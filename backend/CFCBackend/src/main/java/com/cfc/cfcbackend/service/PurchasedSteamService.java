package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.StationaryCombustionFactorsDao;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

@Service
public class PurchasedSteamService {
    
    @Resource
    StationaryCombustionFactorsDao stationaryCombustionFactorsDao;

    // Calculates CO2 emissions from steam based off a user-provided emission factor
    public double purchSteamCO2(double steamPurchased, double co2, double boilerEfficiency) {
        return steamPurchased * co2 * (100 / boilerEfficiency);
    }

    // Calculates CH4 emissions from steam based off a user-provided emission factor
    public double purchSteamCH4(double steamPurchased, double ch4, double boilerEfficiency) {
        return steamPurchased * ch4 * (100 / boilerEfficiency);
    }

    // Calculates CO2 emissions from steam based off a user-provided emission factor
    public double purchSteamN2O(double steamPurchased, double n2o, double boilerEfficiency) {
        return steamPurchased * n2o * (100 / boilerEfficiency);
    }

    // Calculates all emissions from steam based off a specific fuel source
    public Map<String, Double> purchSteamFuelType(double steamPurchased, String fuelType, double boilerEfficiency) {
        Map<String, Double> emissions = new HashMap<>();
        emissions.put("finalLco2", steamPurchased * 
            stationaryCombustionFactorsDao.selectByFuelType(fuelType).getCo2FactorKgco2PerMmbtu() * (100 / boilerEfficiency));
        emissions.put("finalLch4", steamPurchased * 
            stationaryCombustionFactorsDao.selectByFuelType(fuelType).getCh4FactorGch4PerMmbtu() * (100 / boilerEfficiency));
        emissions.put("finalLn2o", steamPurchased * 
            stationaryCombustionFactorsDao.selectByFuelType(fuelType).getN2oFactorGn2oPerMmbtu() * (100 / boilerEfficiency));
        emissions.put("finalMco2", steamPurchased * 
            stationaryCombustionFactorsDao.selectByFuelType(fuelType).getCo2FactorKgco2PerMmbtu() * (100 / boilerEfficiency));
        emissions.put("finalMch4", steamPurchased * 
            stationaryCombustionFactorsDao.selectByFuelType(fuelType).getCh4FactorGch4PerMmbtu() * (100 / boilerEfficiency));
        emissions.put("finalMn2o", steamPurchased * 
            stationaryCombustionFactorsDao.selectByFuelType(fuelType).getN2oFactorGn2oPerMmbtu() * (100 / boilerEfficiency));
        return emissions;
    }
}
