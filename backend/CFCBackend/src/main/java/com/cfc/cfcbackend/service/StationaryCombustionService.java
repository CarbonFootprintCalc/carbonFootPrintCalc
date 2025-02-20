package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.StationarycombustionfactorsDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class StationaryCombustionService {
    double NATURAL_GAS_CO2_FACTOR = 0.05444;
    @Resource
    private StationarycombustionfactorsDao stationarycombustionfactorsDao;

    public double naturalGasCO2(double quantity) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(1).getCo2FactorKgco2PerUnit();
    }
}
