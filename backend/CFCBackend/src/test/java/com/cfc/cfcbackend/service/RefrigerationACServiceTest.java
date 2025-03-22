package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class RefrigerationACServiceTest {

    @Resource
    private RefrigerationACService refrigerationACService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void CO2EqEmissions() {
        double expect = 1015.5;
        double actual = refrigerationACService.CO2EqEmissions("HFC-32", 2, 1.5, 1, 1, 1);
        assertEquals(expect, actual);
    }
}