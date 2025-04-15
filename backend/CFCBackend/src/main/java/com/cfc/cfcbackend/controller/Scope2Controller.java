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
    @Resource
    PurchasedSteamService purchasedSteamService;

    private final double DEFAULT_BOILER_EFF = 80;

    // Method to calculate emissions for purchased electricity
    @ResponseBody
    @GetMapping("/electricity")
    public Map<String, Double> purchasedElectricity(@RequestParam(required = false) String egridSubregion, @RequestParam(required = false) Double electricityPurchased,
                                                    @RequestParam(required = false) Double co2, @RequestParam(required = false) Double ch4, 
                                                    @RequestParam(required = false) Double n2o) {

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

    // Method to calculate emissions for purchased steam
    @ResponseBody
    @GetMapping("/steam")
    public Map<String, Double> purchasedSteam(@RequestParam Double steamPurchased, @RequestParam(required = false) String fuelType,
                                              @RequestParam(required = false) Double boilerEfficiency, @RequestParam(required = false) Double Lco2, 
                                              @RequestParam(required = false) Double Lch4, @RequestParam(required = false) Double Ln2o, 
                                              @RequestParam(required = false) Double Mco2, @RequestParam(required = false) Double Mch4, 
                                              @RequestParam(required = false) Double Mn2o) {
                                    
        Map<String, Double> emissions = new HashMap<>();

        // Set boiler efficiency to 80% if not provided
        if(boilerEfficiency == null) {
            boilerEfficiency = DEFAULT_BOILER_EFF;
        }

        // If the user selects a preset fuel type, calculate emissions using that fuel type
        if(!fuelType.isEmpty()) {
            emissions = purchasedSteamService.purchSteamFuelType(steamPurchased, fuelType, boilerEfficiency);
        }

        // Otherwise, the user can directly input emission factors
        else {

            // Calculate location-based emissions
            emissions.put("finalLco2", purchasedSteamService.purchSteamCO2(steamPurchased, Lco2, boilerEfficiency));
            emissions.put("finalLch4", purchasedSteamService.purchSteamCH4(steamPurchased, Lch4, boilerEfficiency));
            emissions.put("finalLn2o", purchasedSteamService.purchSteamN2O(steamPurchased, Ln2o, boilerEfficiency));

            // Calculate market-based emissions
            // If the emission factors aren't provided, we default them to the location-based factors
            if(Mco2 == null) Mco2 = Lco2;
            if(Mch4 == null) Mch4 = Lch4;
            if(Mn2o == null) Mn2o = Ln2o;

            emissions.put("finalMco2", purchasedSteamService.purchSteamCO2(steamPurchased, Mco2, boilerEfficiency));
            emissions.put("finalMch4", purchasedSteamService.purchSteamCH4(steamPurchased, Mch4, boilerEfficiency));
            emissions.put("finalMn2o", purchasedSteamService.purchSteamN2O(steamPurchased, Mn2o, boilerEfficiency));
        }
        return emissions;
    }
}