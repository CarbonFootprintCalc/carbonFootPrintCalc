package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.StationaryCombustionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
public class Scope1Controller {

    // We might need to move these or shove them into a database so they aren't hardcoded
    private final double GRAM_CONVERTER = 1000; // Convert kg to g
    private final double SCF_CONVERTER = 97.5; // Convert therms to scf

    @Resource
    StationaryCombustionService stationaryCombustionService;
    @ResponseBody
    @GetMapping("/")
    public String root() {
        return "Welcome to the Carbon Footprint Calculator API";
    }
    
    // Method to calculate emissions for stationary combustion
    @ResponseBody
    @GetMapping("/scope1")
    public Map<String, Double> scope1(@RequestParam double quantity, @RequestParam String fuelType, @RequestParam String unit) {

        Map<String, Double> scope1Emiss = new HashMap<>(); 
        
        // Convert therms to scf (unit) for gases
        if(unit.equals("Therm")) {
            quantity *= SCF_CONVERTER;
        }

        // Calculate emissions based on the mmBtu
        if(unit.equals("mmBtu")) {
            scope1Emiss.put("CO2", stationaryCombustionService.CO2PerMMBtu(quantity, fuelType)); 
            scope1Emiss.put("CH4", stationaryCombustionService.CH4PerMMBtu(quantity, fuelType) * GRAM_CONVERTER); 
            scope1Emiss.put("N2O", stationaryCombustionService.N2OPerMMBtu(quantity, fuelType) * GRAM_CONVERTER); 
        }
        // Otherwise, calculate based on the unit
        else {
            scope1Emiss.put("CO2", stationaryCombustionService.CO2PerUnit(quantity, fuelType)); 
            scope1Emiss.put("CH4", stationaryCombustionService.CH4PerUnit(quantity, fuelType) * GRAM_CONVERTER); 
            scope1Emiss.put("N2O", stationaryCombustionService.N2OPerUnit(quantity, fuelType) * GRAM_CONVERTER); 
        }
        return scope1Emiss;
    }

}
