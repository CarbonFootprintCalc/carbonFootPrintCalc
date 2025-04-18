package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PurchasedSteamServiceTest {

    @Resource
    private PurchasedSteamService purchasedSteamService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void purchSteamCO2() {
        double expect = 15000.0;
        double actual = purchasedSteamService.purchSteamCO2(800.0, 15.0, 80);
        assertEquals(expect, actual);
    }

    @Test
    void purchSteamCH4() {
        double expect = 7857.142857142857;
        double actual = purchasedSteamService.purchSteamCH4(550.0, 10.0, 70);
        assertEquals(expect, actual);
    }

    @Test
    void purchSteamN2O() {
        double expect = 2000.0;
        double actual = purchasedSteamService.purchSteamN2O(250.0, 8.0, 100);
        assertEquals(expect, actual);
    }

    @Test
    void purchSteamFuelType() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("finalLco2", 466399.9938964844);
        expect.put("finalLch4", 55000.0);
        expect.put("finalLn2o", 8000.00011920929);
        expect.put("finalMco2", 466399.9938964844);
        expect.put("finalMch4", 55000.0);
        expect.put("finalMn2o", 8000.00011920929);
        Map<String, Double> actual = purchasedSteamService.purchSteamFuelType(4000, "Bituminous", 80);
        assertEquals(expect, actual);
    }
}