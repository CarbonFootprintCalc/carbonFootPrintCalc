package com.cfc.cfcbackend.service;

import org.springframework.stereotype.Service;

@Service
public class BusinessTravelService {

    @Resource
    private BusinessTravelDao businessTravelDao;

    // Calculation for business travel emission for co2, ch4, n2o
    public Map<String, Double> calcEmission(String vehicleType, double mileage) {
        Map<String, Double> emissions = new HashMap<>();
        emissions.put("co2", mileage * businessTravelDao.selectByVehicleType(vehicleType).getCo2FactorKgco2PerUnit());
        emissions.put("ch4", mileage * businessTravelDao.selectByVehicleType(vehicleType).getCh4FactorGch4PerUnit());
        emissions.put("n2o", mileage * businessTravelDao.selectByVehicleType(vehicleType).getN2oFactorGn2oPerUnit());
        return emissions;
    }
}
