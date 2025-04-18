package com.cfc.cfcbackend.service;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.HashMap;

import javax.annotation.Resource;

@Service
public class FinalReportService {
    
    private final double CH4_GWP = 28;
    private final double N2O_GWP = 265;

    private final double G_TO_KG = 1000;

    // We don't need to convert CO2 to CO2e as the conversion is 1-to-1

    // Method to convert CH4 emissions to CO2e in kg
    public double convertCH4ToCO2e(double ch4) {
        return (ch4 * CH4_GWP) / G_TO_KG;
    }

    // Method to convert N2O emissions to CO2e in kg
    public double convertN2OToCO2e(double n2o) {
        return (n2o * N2O_GWP) / G_TO_KG;
    }

    // Method to only add CO2 emissions to total CO2e
    // This can be used universally with total overall and total category emissions
    public double addToTotal(double total, double toAdd) {
        return total + toAdd;
    }

    // Method to only add CO2 emissions to total CO2e
    // This can be used universally with total overall and total category emissions
    public double addToTotal(double total, Map<String, Double> toAdd) {
        return total += toAdd.get("CO2") + this.convertCH4ToCO2e(toAdd.get("CH4")) + this.convertN2OToCO2e(toAdd.get("N2O"));
    }

    public Map<String, Double> compileAll(String scope, String category, double totalCO2e, double totalScope, 
                                          double totalCategory, Map<String, Double> emissions) {
        emissions.put(category, addToTotal(totalCategory, emissions));
        emissions.put(scope, addToTotal(totalScope, emissions));
        emissions.put("calculatedTotal", addToTotal(totalCO2e, emissions));
        return emissions;
    }
}
