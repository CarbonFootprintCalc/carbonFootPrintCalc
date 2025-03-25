package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PurchasedGasesServiceTest {

    @Resource
    private PurchasedGasesService purchasedGasesService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void purchGasEmissions() {
        double expect = 805000.0;
        double actual = purchasedGasesService.purchGasEmissions("Nitrogen trifluoride", 50);
        assertEquals(expect, actual);
    }
}