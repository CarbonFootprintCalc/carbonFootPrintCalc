package com.cfc.cfcbackend.service;

import org.springframework.stereotype.Service;

@Service
public class StationaryCombustionService {
    double NATURAL_GAS_CO2_FACTOR = 0.05444;
    public double naturalGasCO2(double quantity) {
        return quantity * NATURAL_GAS_CO2_FACTOR;
    }
}
