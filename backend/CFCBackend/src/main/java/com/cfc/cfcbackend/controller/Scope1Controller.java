package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.*;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;

// Main controller for handling all scope 1 emission calculations

@RestController
public class Scope1Controller {

    private final double SCF_CONVERTER = 97.5; // Convert therms to scf

    @Resource
    StationaryCombustionService stationaryCombustionService;
    @Resource
    MobileSourcesService mobileSourcesService;
    @Resource
    RefrigerationACService refrigerationACService;
    @Resource
    FireSuppressionService fireSuppressionService;
    @Resource
    PurchasedGasesService purchasedGasesService;
    @Resource
    ModelYearConversionService modelYearConversionService;

    @Resource
    FinalReportService finalReportService;

    @ResponseBody
    @GetMapping("/")
    public String root() {
        return "Welcome to the Carbon Footprint Calculator API";
    }
    
    // Method to calculate emissions for stationary combustion
    @ResponseBody
    @GetMapping("/stationary-combustion")
    public Map<String, Double> stationaryCombustion(@RequestParam double quantity, @RequestParam String fuelType, @RequestParam String unit,
                                                    @RequestParam double totalCO2e, @RequestParam double totalStationary, @RequestParam double totalScope) {

        Map<String, Double> stationarySources = new HashMap<>();
        
        // Convert therms to scf (unit) for gases
        if(unit.equals("Therm")) {
            quantity *= SCF_CONVERTER;
        }

        switch(unit) {
            case "Cubic Meters":
                quantity *= 35.31;
                break;
            case "MCF":
                quantity *= 1000;
                break;
            case "Metric Tons":
                quantity *= 1.102;
                break;
            case "Kilograms":
                quantity *= 0.001102;
                break;
            case "Liters":
                quantity *= 0.2642;
                break;
            case "Barrels":
                quantity *= 42;
                break;
        }

        // Calculate emissions based on the mmBtu
        if(unit.equals("MMBtu")) {
            stationarySources.put("CO2", stationaryCombustionService.CO2PerMMBtu(quantity, fuelType)); 
            stationarySources.put("CH4", stationaryCombustionService.CH4PerMMBtu(quantity, fuelType)); 
            stationarySources.put("N2O", stationaryCombustionService.N2OPerMMBtu(quantity, fuelType)); 
        }
        // Otherwise, calculate based on the unit
        else {
            stationarySources.put("CO2", stationaryCombustionService.CO2PerUnit(quantity, fuelType)); 
            stationarySources.put("CH4", stationaryCombustionService.CH4PerUnit(quantity, fuelType)); 
            stationarySources.put("N2O", stationaryCombustionService.N2OPerUnit(quantity, fuelType)); 
        }

        // Add calculations to total stationary combustion, scope 1, and overall emissions
        stationarySources = finalReportService.compileAll("calculatedScope1", "calculatedStationary", totalCO2e, totalScope, totalStationary, stationarySources);

        return stationarySources;
    }

    // Method to calculate emissions for mobile combustion
    @ResponseBody
    @GetMapping("/mobile-sources")
    public Map<String, Double> mobileSources(@RequestParam String fuelType, @RequestParam double fuelUsage,
                                             @RequestParam String vehicleType, @RequestParam int modelYear,
                                             @RequestParam int mileage, @RequestParam boolean onRoad) {
        Map<String, Double> mobileSources = new HashMap<>();

        String modelYearString = "";

        //test only, need to change database and backend to make sure fuel type are consistent
        if (fuelType.equals("Gasoline") || fuelType.equals("Gasoline (4 stroke)") || fuelType.equals("Gasoline (2 stroke)")) {
            mobileSources.put("CO2", mobileSourcesService.emissionCO2("Motor Gasoline", fuelUsage));
        } else if (fuelType.equals("Methanol")) {
            mobileSources.put("CO2", mobileSourcesService.emissionCO2("Ethanol", fuelUsage));
        } else {
            mobileSources.put("CO2", mobileSourcesService.emissionCO2(fuelType, fuelUsage));
        }
        if (onRoad) {
            if (fuelType.equals("Gasoline")) {
                // Assign value to string model year according to the integer model year since database uses string for gasoline vehicles
                switch (vehicleType) {
                    case "Passenger Cars":
                        modelYearString = modelYearConversionService.getPassengerCarYear(modelYear);
                        break;
                    case "Light-Duty Trucks":
                        modelYearString = modelYearConversionService.getLightDutyTruckYear(modelYear);
                        break;
                    case "Heavy-Duty Vehicles":
                        modelYearString = modelYearConversionService.getHeavyDutyVehicleYear(modelYear);
                        break;
                    case "Motorcycles":
                        modelYearString = modelYearConversionService.getMotorcycleYear(modelYear);
                        break;
                    default:
                        modelYearString = Integer.toString(modelYear);
                        break;
                }
                mobileSources.put("CH4", mobileSourcesService.emissionOnRoadGasCH4(vehicleType, modelYearString, mileage));
                mobileSources.put("N2O", mobileSourcesService.emissionOnRoadGasN2O(vehicleType, modelYearString, mileage));
            } else {
                // Assign value to string model year according to the integer model year since database uses string for non gasoline vehicles
                if (fuelType.equals("Diesel")) {
                    switch (vehicleType) {
                        case "Passenger Cars":
                        case "Light-Duty Trucks":
                            modelYearString = modelYearConversionService.getYearCategory(modelYear, 1982, 2006);
                            break;
                        case "Medium-Duty Trucks":
                        case "Heavy-Duty Trucks":
                            modelYearString = modelYearConversionService.getYearCategory(modelYear, 2006, 2006);
                            break;
                        default:
                            modelYearString = Integer.toString(modelYear);
                            break;
                    }
                }
                mobileSources.put("CH4", mobileSourcesService.emissionOnRoadNonGasCH4(fuelType, vehicleType, modelYearString, mileage));
                mobileSources.put("N2O", mobileSourcesService.emissionOnRoadNonGasN2O(fuelType, vehicleType, modelYearString, mileage));
            }
        } else {
            mobileSources.put("CH4", mobileSourcesService.emissionNonRoadCH4(fuelType ,vehicleType, fuelUsage));
            mobileSources.put("N2O", mobileSourcesService.emissionNonRoadN2O(fuelType ,vehicleType, fuelUsage));
        }

        return mobileSources;
    }

    // Method to calculate CO2 emissions for refrigeration and AC sources
    @ResponseBody
    @GetMapping("/refrigeration-ac")
    public double refrigerationAC(@RequestParam String gasType, @RequestParam double newCharge, 
                                  @RequestParam double newCapacity, @RequestParam double recharge, 
                                  @RequestParam double disposedCapacity, @RequestParam double disposedRecovered) {

        return refrigerationACService.refrigACEmissions(gasType, newCharge, newCapacity, recharge, disposedCapacity, disposedRecovered);
    }

    // Method to calculate CO2 emissions for gases used in fire suppression
    @ResponseBody
    @GetMapping("/fire-suppression")
    public double fireSuppression(@RequestParam String gas, @RequestParam double inventoryChange, 
                                  @RequestParam double transferredAmount, @RequestParam double capacityChange) {
        return fireSuppressionService.fireSuppEmissions(gas, inventoryChange, transferredAmount, capacityChange);
    }

    // Method to calculate CO2 emissions for purchased gases that were combusted onsite
    @ResponseBody
    @GetMapping("/purchase-gas")
    public double purchasedGases(@RequestParam String gas, @RequestParam double amount) {
        return purchasedGasesService.purchGasEmissions(gas, amount);
    }
}
