package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MobileSourcesServiceTest {

    @Resource
    MobileSourcesService mobileSourcesService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void emissionCO2() {
        double expect = 500 * 8.78;
        double actual = mobileSourcesService.emissionCO2("Motor Gasoline", 500);
        assertEquals(expect, Math.round(actual));
    }

    @Test
    void emissionOnRoadGasCH4() {
        double expect = 12000 * 0.0051;
        double actual = mobileSourcesService.emissionOnRoadGasCH4("Passenger Cars", "2019", 12000);
        assertEquals(expect, Math.round(actual*10.0)/10.0);
    }

    @Test
    void emissionOnRoadGasN2O() {
        double expect = 12000 * 0.0015;
        double actual = mobileSourcesService.emissionOnRoadGasN2O("Passenger Cars", "2019", 12000);
        assertEquals(expect, Math.round(actual*10.0)/10.0);
    }

    @Test
    void emissionOnRoadNonGasCH4() {
        double expect = 12000 * 0.012;
        double actual = mobileSourcesService.emissionOnRoadNonGasCH4("Methanol", "Passenger Cars", "2019", 12000);
        assertEquals(expect, Math.round(actual*10.0)/10.0);
    }

    @Test
    void emissionOnRoadNonGasN2O() {
        double expect = 12000 * 0.004;
        double actual = mobileSourcesService.emissionOnRoadNonGasN2O("Methanol", "Passenger Cars", "2019", 12000);
        assertEquals(expect, Math.round(actual*10.0)/10.0);
    }

    @Test
    void emissionNonRoadCH4() {
        double expect = 500 * 2.27;
        double actual = mobileSourcesService.emissionNonRoadCH4("Gasoline (4 stroke)", "Ships and Boats", 500);
        assertEquals(expect, Math.round(actual*10.0)/10.0);
    }

    @Test
    void emissionNonRoadN2O() {
        double expect = 500 * 0.01;
        double actual = mobileSourcesService.emissionNonRoadN2O("Gasoline (4 stroke)", "Ships and Boats", 500);
        assertEquals(expect, Math.round(actual*10.0)/10.0);
    }
}