package com.cfc.cfcbackend.controller;

import com.cfc.cfcbackend.service.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;

// Main controller for handling all scope 3 emission calculations

@RestController
public class Scope3Controller {

    @Resource
    BusinessTravelService businessTravelService;

    // Method to calculate emissions for business travel
    @ResponseBody
    @GetMapping("/business-travel")
    public Map<String, Double> businessTravel(@RequestParam String vehicleType, @RequestParam double mileage) {

        Map<String, Double> emissions = new HashMap<>();

        emissions.put("co2", businessTravelService.calcEmission(vehicleType, mileage));
        emissions.put("ch4", businessTravelService.calcEmission(vehicleType, mileage));
        emissions.put("n2o", businessTravelService.calcEmission(vehicleType, mileage));

        return emissions;
    }
}