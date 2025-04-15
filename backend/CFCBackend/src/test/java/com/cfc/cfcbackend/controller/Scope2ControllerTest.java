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
    void purchasedSteam() {
    }
}