package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BusinessTravelServiceTest {

    @Resource
    private BusinessTravelService businessTravelService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void calcEmission() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("CO2", 1821.6000199317932);
        expect.put("CH4", 56.31999857723713);
        expect.put("N2O", 58.079999685287476);
        Map<String, Double> actual = businessTravelService.calcEmission("Air Travel - Short Haul (< 300 miles)", 8800);
        assertEquals(expect, actual);
    }
}