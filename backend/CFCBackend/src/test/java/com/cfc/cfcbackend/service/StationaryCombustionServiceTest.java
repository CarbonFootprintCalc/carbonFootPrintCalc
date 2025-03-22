package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StationaryCombustionServiceTest {

    @Resource
    StationaryCombustionService stationaryCombustionService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void CO2PerUnit() {
        double expect = 1000 * 0.05444;
        double actual = stationaryCombustionService.CO2PerUnit(1000, "Natural Gas");
        assertEquals(Math.round(expect*10.0)/10.0, Math.round(actual*10.0)/10.0);
    }

    @Test
    void CH4PerUnit() {
        double expect = 1000 * 0.00103;
        double actual = stationaryCombustionService.CH4PerUnit(1000, "Natural Gas");
        assertEquals(Math.round(expect*10.0)/10.0, Math.round(actual*10.0)/10.0);
    }

    @Test
    void n2OPerUnit() {
        double expect = 1000 * 0.0001;
        double actual = stationaryCombustionService.N2OPerUnit(1000, "Natural Gas");
        assertEquals(Math.round(expect*10.0)/10.0, Math.round(actual*10.0)/10.0);
    }

    @Test
    void CO2PerMMBtu() {
        double expect = 1000 * 53.06;
        double actual = stationaryCombustionService.CO2PerMMBtu(1000, "Natural Gas");
        assertEquals(Math.round(expect*10.0)/10.0, Math.round(actual*10.0)/10.0);
    }

    @Test
    void CH4PerMMBtu() {
        double expect = 1000 * 1;
        double actual = stationaryCombustionService.CH4PerMMBtu(1000, "Natural Gas");
        assertEquals(Math.round(expect*10.0)/10.0, Math.round(actual*10.0)/10.0);
    }

    @Test
    void n2OPerMMBtu() {
        double expect = 1000 * 0.1;
        double actual = stationaryCombustionService.N2OPerMMBtu(1000, "Natural Gas");
        assertEquals(Math.round(expect*10.0)/10.0, Math.round(actual*10.0)/10.0);
    }
}