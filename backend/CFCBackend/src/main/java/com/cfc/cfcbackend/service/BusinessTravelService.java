package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.BusinessTravelDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

@Service
public class BusinessTravelService {

    @Resource
    private BusinessTravelDao businessTravelDao;

    // Calculation for business travel emission for co2, ch4, n2o
    public Map<String, Double> calcEmission(String vehicleType, double mileage) {
        Map<String, Double> emissions = new HashMap<>();
        emissions.put("CO2", mileage * businessTravelDao.selectByVehicleType(vehicleType).getCo2FactorKgco2PerUnit());
        emissions.put("CH4", mileage * businessTravelDao.selectByVehicleType(vehicleType).getCh4FactorGch4PerUnit());
        emissions.put("N2O", mileage * businessTravelDao.selectByVehicleType(vehicleType).getN2oFactorGn2oPerUnit());
        return emissions;
    }
}
