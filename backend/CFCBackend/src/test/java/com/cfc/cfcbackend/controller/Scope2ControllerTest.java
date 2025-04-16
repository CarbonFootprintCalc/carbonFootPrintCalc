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
        expect.put("co2", 33.60268666209413);
        expect.put("n2o", 2.7215999601423735E-4);
        expect.put("ch4", 0.0018597600079679477);
        Map<String, Double> actual = scope2Controller.purchasedElectricity("AZNM", 100.0, 0.0, 0.0, 0.0);
        assertEquals(expect, actual);
    }

    @Test
    void purchasedElectricity2() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("co2", 1.0);
        expect.put("n2o", 2.0);
        expect.put("ch4", 1.5);
        Map<String, Double> actual = scope2Controller.purchasedElectricity("", 100.0, 10.0, 15.0, 20.0);
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
        Map<String, Double> actual = scope2Controller.purchasedSteam(123.0, "Lignite", 80.0,
                null, null,null, null,null,null);
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
        Map<String, Double> actual = scope2Controller.purchasedSteam(123.0, "", 70.0,
                10.0, 15.0,20.0, null,12.0,null);
        assertEquals(expect, actual);
    }
}