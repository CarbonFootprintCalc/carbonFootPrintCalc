package com.cfc.cfcbackend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ModelYearConversionServiceTest {

    @Resource
    private ModelYearConversionService modelYearConversionService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getPassengerCarYear() {
        String expect = "1984-1993";
        String actual = modelYearConversionService.getPassengerCarYear(1990);
        assertEquals(expect, actual);
    }

    @Test
    void getLightDutyTruckYear() {
        String expect = "1987-1993";
        String actual = modelYearConversionService.getLightDutyTruckYear(1990);
        assertEquals(expect, actual);
    }

    @Test
    void getHeavyDutyVehicleYear() {
        String expect = "1990-1995";
        String actual = modelYearConversionService.getHeavyDutyVehicleYear(1990);
        assertEquals(expect, actual);
    }

    @Test
    void getMotorcycleYear() {
        String expect = "1960-1995";
        String actual = modelYearConversionService.getMotorcycleYear(1990);
        assertEquals(expect, actual);
    }

    // Not needing a test since all functions above uses this function
    @Test
    void getYearRange() {
    }

    @Test
    void getYearCategory() {
        String expect = "1983-2006";
        // Passenger cars and light duty trucks
        String actual = modelYearConversionService.getYearCategory(1990, 1982, 2006);
        assertEquals(expect, actual);
    }
}