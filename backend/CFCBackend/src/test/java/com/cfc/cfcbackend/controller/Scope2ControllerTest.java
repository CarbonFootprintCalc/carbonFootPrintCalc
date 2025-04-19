package com.cfc.cfcbackend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class Scope2ControllerTest {

    @Resource
    private Scope2Controller scope2Controller;

    @BeforeEach
    void setUp() {
    }

    @Test
    void purchasedElectricity() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("CO2", 33.60268666209413);
        expect.put("N2O", 2.7215999601423735E-4);
        expect.put("CH4", 0.0018597600079679477);
        expect.put("calculatedTotal", 0.0336028108577733);
        expect.put("calculatedElecLoc", 0.0336028108577733);
        expect.put("calculatedScope2Loc", 0.0336028108577733);
        Map<String, Double> actual = scope2Controller.purchasedElectricity("AZNM", 100.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        assertEquals(expect, actual);
    }

    @Test
    void purchasedElectricity2() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("CO2", 1.0);
        expect.put("N2O", 2.0);
        expect.put("CH4", 1.5);
        expect.put("calculatedTotal", 0.001572);
        expect.put("calculatedElecMark", 0.001572);
        expect.put("calculatedScope2Mark", 0.001572);
        Map<String, Double> actual = scope2Controller.purchasedElectricity("", 100.0, 10.0, 15.0, 20.0, 0.0, 0.0, 0.0, 0.0);
        assertEquals(expect, actual);
    }

    @Test
    void purchasedSteam() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("finalLco2", 15024.450187683105);
        expect.put("finalLch4", 1691.25);
        expect.put("finalLn2o", 246.00000366568565);
        expect.put("finalMco2", 15024.450187683105);
        expect.put("finalMch4", 1691.25);
        expect.put("finalMn2o", 246.00000366568565);
        expect.put("calculatedScope2Loc", 15.136995188654511);
        expect.put("calculatedSteamLoc", 15.136995188654511);
        expect.put("calculatedScope2Mark", 15.136995188654511);
        expect.put("calculatedSteamMark", 15.136995188654511);
        Map<String, Double> actual = scope2Controller.purchasedSteam(123.0, "Lignite", 80.0,
                null, null,null, null,null,null, 0.0, 0.0, 0.0, 0.0);
        assertEquals(expect, actual);
    }

    @Test
    void purchasedSteam2() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("finalLco2", 1757.142857142857);
        expect.put("finalLch4", 2635.714285714286);
        expect.put("finalLn2o", 3514.285714285714);
        expect.put("finalMco2", 1757.142857142857);
        expect.put("finalMch4", 2108.5714285714284);
        expect.put("finalMn2o", 3514.285714285714);
        expect.put("calculatedScope2Loc", 2.7622285714285715);
        expect.put("calculatedSteamLoc", 2.7622285714285715);
        expect.put("calculatedScope2Mark", 2.7474685714285716);
        expect.put("calculatedSteamMark", 2.7474685714285716);
        Map<String, Double> actual = scope2Controller.purchasedSteam(123.0, "", 70.0,
                10.0, 15.0,20.0, null,12.0,null, 0.0, 0.0, 0.0, 0.0);
        assertEquals(expect, actual);
    }
}