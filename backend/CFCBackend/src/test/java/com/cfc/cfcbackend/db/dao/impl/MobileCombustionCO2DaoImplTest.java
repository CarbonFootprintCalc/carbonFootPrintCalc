package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.MobileCombustionCO2Dao;
import com.cfc.cfcbackend.db.po.Mobilecombustionco2;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MobileCombustionCO2DaoImplTest {

    @Resource
    private MobileCombustionCO2Dao mobileCombustionCO2Dao;

    @BeforeEach
    void setUp() {
    }

    @Test
    void deleteByPrimaryKey() {
    }

    @Test
    void insert() {
    }

    @Test
    void insertSelective() {
    }

    @Test
    void selectByPrimaryKey() {
    }

    @Test
    void selectByFuelType() {
        Mobilecombustionco2 mobilecombustionco2 = Mobilecombustionco2.builder()
                .id(9)
                .mobileCombustionId(1)
                .fuelType("Motor Gasoline")
                .co2FactorKgco2PerUnit(8.78f)
                .unit("gallon")
                .build();
        Mobilecombustionco2 result = mobileCombustionCO2Dao.selectByFuelType("Motor Gasoline");
        assertEquals(mobilecombustionco2, result);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}