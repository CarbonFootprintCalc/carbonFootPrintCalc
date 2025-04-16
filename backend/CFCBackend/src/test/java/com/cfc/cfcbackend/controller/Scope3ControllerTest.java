package com.cfc.cfcbackend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class Scope3ControllerTest {

    @Resource
    private Scope3Controller scope3Controller;

    @BeforeEach
    void setUp() {
    }

    @Test
    void businessTravel() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("CO2", 1490.0000393390656);
        expect.put("CH4", 120.00000104308128);
        expect.put("N2O", 40.00000189989805);
        Map<String, Double> actual = scope3Controller.businessTravel("Intercity Rail - Other Routes", 10000);
        assertEquals(expect, actual);
    }
}