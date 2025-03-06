package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.StationaryCombustionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

@RestController
public class Scope1Controller {
    @Resource
    StationaryCombustionService stationaryCombustionService;
    @ResponseBody
    @GetMapping("/")
    public String root() {
        return "Welcome to the Carbon Footprint Calculator API";
    }
    
    @ResponseBody
    @GetMapping("/scope1")
    public Map<String, Double> scope1(@RequestParam double quantity, @RequestParam String fuelType) {
        Map<String, Double> scope1Emiss = new HashMap<>(); 
        scope1Emiss.put("CO2", stationaryCombustionService.CO2PerUnit(quantity, fuelType)); 
        scope1Emiss.put("CH4", stationaryCombustionService.CH4PerUnit(quantity, fuelType)); 
        scope1Emiss.put("N2O", stationaryCombustionService.N2OPerUnit(quantity, fuelType)); 
        return scope1Emiss;
    }

}
