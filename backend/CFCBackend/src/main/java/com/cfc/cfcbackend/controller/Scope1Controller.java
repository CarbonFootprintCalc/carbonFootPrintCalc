package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.StationaryCombustionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

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
    @GetMapping("scope1")
    public double[] scope1(@RequestParam double quantity, @RequestParam String fuelType) {
        double[] scope1Emiss = new double[3];
        scope1Emiss[0] = stationaryCombustionService.CO2PerUnit(quantity, fuelType);
        scope1Emiss[1] = stationaryCombustionService.CH4PerUnit(quantity, fuelType);
        scope1Emiss[2] = stationaryCombustionService.N2OPerUnit(quantity, fuelType);
        return scope1Emiss;
    }

}
