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

    @Resource
    FinalReportService finalReportService;

    // Method to calculate emissions for business travel
    @ResponseBody
    @GetMapping("/business-travel")
    public Map<String, Double> businessTravel(@RequestParam String vehicleType, @RequestParam double miles,
                                              @RequestParam double totalCO2e, @RequestParam double totalBusiTra, @RequestParam double totalScope) {
        
        // Calculate emissions
        Map<String, Double> busiTraEmissions = businessTravelService.calcEmission(vehicleType, miles);;

        // Add calculations to total business travel, scope 3, and overall emissions
        busiTraEmissions = finalReportService.compileAll("calculatedScope3", "calculatedBusiTra", totalCO2e, totalScope, totalBusiTra, busiTraEmissions);
        return busiTraEmissions;
    }
}