package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.OnRoadGasolineCH4N2ODao;
import com.cfc.cfcbackend.db.po.OnRoadGasolineCH4N2O;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OnRoadGasolineCH4N2ODaoImplTest {

    @Resource
    private OnRoadGasolineCH4N2ODao onRoadGasolineCH4N2ODao;

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
    void selectByTypeNYear() {
        OnRoadGasolineCH4N2O expect = OnRoadGasolineCH4N2O.builder()
                .id(10)
                .mobileCombustionId(2)
                .vehicleType("Passenger Cars")
                .modelYear("1994")
                .ch4FactorGch4PerMile(0.0617f)
                .n2oFactorGc2oPerMile(0.0603f)
                .build();
        OnRoadGasolineCH4N2O actual = onRoadGasolineCH4N2ODao.selectByTypeNYear("Passenger Cars", "1994");
        assertEquals(expect, actual);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}