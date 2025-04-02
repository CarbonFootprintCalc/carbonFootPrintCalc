package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.po.UnitConversions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UnitConversionServiceTest {

    @Resource
    private UnitConversionService unitConversionService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void unitConversion() {
        double expect = 2.205;
        double actual = unitConversionService.unitConversion("kilogram (kg)", "pounds (lb)", 1);
        assertEquals(expect, Math.round(actual * 1000.0) / 1000.0);
    }
}