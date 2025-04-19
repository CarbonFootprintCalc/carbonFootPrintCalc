package com.cfc.cfcbackend.controller;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class Scope1ControllerTest {
    @Resource
    private Scope1Controller scope1Controller;

    @BeforeEach
    void setUp() {
    }

    @Test
    public void stationaryCombustion() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("CO2", 17194.000244140625);
        expect.put("N2O", 839.9999618530273);
        expect.put("CH4", 6400.0);
        expect.put("calculatedTotal", 17595.800234031678);
        expect.put("calculatedStationary", 17595.800234031678);
        expect.put("calculatedScope1", 17595.800234031678);
        Map<String, Double> actual = scope1Controller.stationaryCombustion(200, "Tires", "mmBtu", 0, 0, 0);
        assertEquals(expect, actual);
    }

    @Test
    public void mobileSources() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("CO2", 1158.9599647521973);
        expect.put("N2O", 127.95659637451172);
        expect.put("CH4", 130.92739868164062);
        expect.put("calculatedTotal", 1196.5344299545288);
        expect.put("calculatedMobile", 1196.5344299545288);
        expect.put("calculatedScope1", 1196.5344299545288);
        Map<String, Double> actual = scope1Controller.mobileSources("Gasoline", 132, "Passenger Cars",
                1994, 2122, true, 0, 0, 0);
        assertEquals(expect, actual);
    }

    @Test
    public void refrigerationAC() {
        Map<String, Double> expect = new HashMap<>();
        expect.put("emissions", 1015.5);
        expect.put("calculatedTotal", 1015.5);
        expect.put("calculatedRefAC", 1015.5);
        expect.put("calculatedScope1", 1015.5);
        Map<String, Double> actual = scope1Controller.refrigerationAC("HFC-32", 2, 1.5, 1, 1, 1, 0, 0, 0);
        assertEquals(expect, actual);
    }

    @Test
    public void fireSuppression() {
        Double expect = 1426500.0;
        Double actual = scope1Controller.fireSuppression("HFC-125", 100, 300, 50);
        assertEquals(expect, actual);
    }

    @Test
    public void purchasedGases() {
        Double expect = 317000.0;
        Double actual = scope1Controller.purchasedGases("HFC-125", 100);
        assertEquals(expect, actual);
    }
}
