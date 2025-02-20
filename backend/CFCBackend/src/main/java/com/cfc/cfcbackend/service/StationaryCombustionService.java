package com.cfc.cfcbackend.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cfc.cfcbackend.db.mappers.StationarycombustionfactorsMapper;
import com.cfc.cfcbackend.db.po.Stationarycombustionfactors;

@Service
public class StationaryCombustionService {

    @Resource
    StationarycombustionfactorsMapper mapper;

    public double naturalGasCO2(double quantity) {
        Stationarycombustionfactors factor = this.mapper.selectByPrimaryKey(2);
        System.out.println(factor.toString());
        return quantity * factor.getCo2FactorKgco2PerMmbtu();
    }
}