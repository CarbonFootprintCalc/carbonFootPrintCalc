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

    // Calculates CO2 emissions using an emission factor entered by the user
    public double purchElecCO2(double electricityPurchased, double co2) {
        return electricityPurchased * co2;
    }

    // Calculates CH4 emissions using an emission factor entered by the user
    public double purchElecCH4(double electricityPurchased, double ch4) {
        return electricityPurchased * ch4;
    }
    
    // Calculates N2O emissions using an emission factor entered by the user
    public double purchElecN2O(double electricityPurchased, double n2o) {
        return electricityPurchased * n2o;
    }

    // Calculate all emissions based on a subregion
    public Map<String, Double> purchElecFromSubreg(double electricityPurchased, String egridSubregion) {
        Map<String, Double> emissions = new HashMap<>();
        emissions.put("co2", (double)electricityMapperDao.selectBySubregion(egridSubregion).getTotalCo2FactorLbPerMwh());
        emissions.put("ch4", (double)electricityMapperDao.selectBySubregion(egridSubregion).getTotalCh4FactorLbPerMwh());
        emissions.put("n2o", (double)electricityMapperDao.selectBySubregion(egridSubregion).getTotalN2oFactorLbPerMwh());
        return emissions;
    }
}
