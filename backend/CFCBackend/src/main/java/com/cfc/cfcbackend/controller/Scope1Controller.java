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
    public double scope1(@RequestParam double quantity, @RequestParam String fuelType) {
        return stationaryCombustionService.CO2PerUnit(quantity, fuelType);
    }

 
}
