package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.MobileSourcesService;
import com.cfc.cfcbackend.service.RefrigerationACService;
import com.cfc.cfcbackend.service.StationaryCombustionService;
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

    // We might need to move this or shove it into a database so it isn't hardcoded
    private final double SCF_CONVERTER = 97.5; // Convert therms to scf

    @Resource
    StationaryCombustionService stationaryCombustionService;
    @Resource
    MobileSourcesService mobileSourcesService;
    @Resource
    RefrigerationACService refrigerationACService;

    @ResponseBody
    @GetMapping("/")
    public String root() {
        return "Welcome to the Carbon Footprint Calculator API";
    }
    
    // Method to calculate emissions for stationary combustion
    @ResponseBody
    @GetMapping("/stationary-combustion")
    public Map<String, Double> stationaryCombustion(@RequestParam double quantity, @RequestParam String fuelType, @RequestParam String unit) {

        Map<String, Double> stationarySources = new HashMap<>(); 
        
        // Convert therms to scf (unit) for gases
        if(unit.equals("Therm")) {
            quantity *= SCF_CONVERTER;
        }

        // Calculate emissions based on the mmBtu
        if(unit.equals("mmBtu")) {
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
        return stationarySources;
    }

    // Method to calculate emissions for mobile combustion
    @ResponseBody
    @GetMapping("/mobile-sources")
    public Map<String, Double> mobileSources(@RequestParam String fuelType, @RequestParam double fuelUsage,
                                             @RequestParam String vehicleType, @RequestParam String modelYear,
                                             @RequestParam int mileage, @RequestParam boolean onRoad) {
        Map<String, Double> mobileSources = new HashMap<>();
        //test only, need to change database and backend to make sure fuel type are consistent
        if (fuelType.equals("Gasoline") || fuelType.equals("Gasoline (4 stroke)") || fuelType.equals("Gasoline (2 stroke)")) {
            mobileSources.put("CO2", mobileSourcesService.emissionCO2("Motor Gasoline", fuelUsage));
        } else {
            mobileSources.put("CO2", mobileSourcesService.emissionCO2(fuelType, fuelUsage));
        }
        if (onRoad) {
            if (fuelType.equals("Gasoline")) {
                mobileSources.put("CH4", mobileSourcesService.emissionOnRoadGasCH4(vehicleType, modelYear, mileage));
                mobileSources.put("N2O", mobileSourcesService.emissionOnRoadGasN2O(vehicleType, modelYear, mileage));
            } else {
                mobileSources.put("CH4", mobileSourcesService.emissionOnRoadNonGasCH4(fuelType, vehicleType, modelYear, mileage));
                mobileSources.put("N2O", mobileSourcesService.emissionOnRoadNonGasN2O(fuelType, vehicleType, modelYear, mileage));
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

        return refrigerationACService.CO2EqEmissions(gasType, newCharge, newCapacity, recharge, disposedCapacity, disposedRecovered);
    }

}
