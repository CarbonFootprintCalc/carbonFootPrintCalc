package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PurchasedElectricityServiceTest {

    @Resource
    private PurchasedElectricityService purchasedElectricityService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void purchElecCO2() {
        double expect = 12345678.4;
        double actual = purchasedElectricityService.purchElecCO2(100, 123456784);
        assertEquals(expect, actual);
    }

    @Test
    void purchElecCH4() {
        double expect = 0.1;
        double actual = purchasedElectricityService.purchElecCH4(100, 1);
        assertEquals(expect, actual);
    }

    @Test
    void purchElecN2O() {
        double expect = 50;
        double actual = purchasedElectricityService.purchElecN2O(100, 500);
        assertEquals(expect, actual);
    }

    @Test
    void purchElecFromSubreg() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("co2", 432.46224098173116);
        expect.put("ch4", 0.02267999980866908);
        expect.put("n2o", .0027215999601423735);
        Map<String, Double> actual = purchasedElectricityService.purchElecFromSubreg(2000, "CAMX");
        assertEquals(expect, actual);
    }
}