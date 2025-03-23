package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FireSuppressionServiceTest {

    @Resource
    private FireSuppressionService fireSuppressionService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void fireSuppEmissions() {
        double expect = 1172500.0;
        double actual = fireSuppressionService.fireSuppEmissions("HFC-227ea", 50, 100, 200);
        assertEquals(expect, actual);
    }
}