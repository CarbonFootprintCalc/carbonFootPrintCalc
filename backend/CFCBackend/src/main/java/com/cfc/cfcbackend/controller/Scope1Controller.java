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

    // Convert to grams
    // We might need to move this later
    private final int GRAM_CONVERTER = 1000;

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
