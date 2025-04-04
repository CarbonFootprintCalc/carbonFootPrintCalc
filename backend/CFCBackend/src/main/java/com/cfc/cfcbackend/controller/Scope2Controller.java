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

// Main controller for handling all scope 2 emission calculations

@RestController
public class Scope2Controller {

    @Resource
    PurchasedElectricityService purchasedElectricityService;

    // Method to calculate emissions for purchased electricity
    @ResponseBody
    @GetMapping("/electricity")
    public Map<String, Double> purchasedElectricity(@RequestParam String egridSubregion, @RequestParam double electricityPurchased,
                                                    @RequestParam double co2, @RequestParam double ch4, @RequestParam double n2o) {

        Map<String, Double> emissions = new HashMap<>();

        // If the user uses an eGrid Subregion, calculate location-based emissions
        if(!egridSubregion.isEmpty()) {
            emissions = purchasedElectricityService.purchElecFromSubreg(electricityPurchased, egridSubregion);
        }

        // If the user directly inputs emission factors, calculate market-based emissions
        else {
            emissions.put("co2", purchasedElectricityService.purchElecCO2(electricityPurchased, co2));
            emissions.put("ch4", purchasedElectricityService.purchElecCH4(electricityPurchased, ch4));
            emissions.put("n2o", purchasedElectricityService.purchElecN2O(electricityPurchased, n2o));
        }
        return emissions;
    }
}