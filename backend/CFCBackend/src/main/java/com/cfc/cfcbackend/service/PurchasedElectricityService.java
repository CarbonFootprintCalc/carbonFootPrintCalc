package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.ElectricityMapperDao;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

@Service
public class PurchasedElectricityService {

    @Resource
    private ElectricityMapperDao electricityMapperDao;
    @Resource
    private UnitConversionService unitConversionService;

    // Calculates CO2 emissions using an emission factor entered by the user
    public double purchElecCO2(double electricityPurchased, double co2) {
        return electricityPurchased * co2 / 1000;
    }

    // Calculates CH4 emissions using an emission factor entered by the user
    public double purchElecCH4(double electricityPurchased, double ch4) {
        return electricityPurchased * ch4  / 1000;
    }
    
    // Calculates N2O emissions using an emission factor entered by the user
    public double purchElecN2O(double electricityPurchased, double n2o) {
        return  electricityPurchased * n2o / 1000;
    }

    // Calculate all emissions based on a subregion
    public Map<String, Double> purchElecFromSubreg(double electricityPurchased, String egridSubregion) {
        Map<String, Double> emissions = new HashMap<>();
        emissions.put("CO2", 
            electricityPurchased * unitConversionService.unitConversion("pounds (lb)", "kilogram (kg)", 
            electricityMapperDao.selectBySubregion(egridSubregion).getTotalCo2FactorLbPerMwh()) / 1000);
        emissions.put("CH4",  
            electricityPurchased * unitConversionService.unitConversion("pounds (lb)", "kilogram (kg)", 
            electricityMapperDao.selectBySubregion(egridSubregion).getTotalCh4FactorLbPerMwh()) / 1000);        
        emissions.put("N2O", 
            electricityPurchased * unitConversionService.unitConversion("pounds (lb)", "kilogram (kg)", 
            electricityMapperDao.selectBySubregion(egridSubregion).getTotalN2oFactorLbPerMwh()) / 1000);        
        return emissions;
    }
}
