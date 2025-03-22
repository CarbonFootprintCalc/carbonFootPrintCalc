package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.NonRoadCH4N2ODao;
import com.cfc.cfcbackend.db.po.NonRoadCH4N2O;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class NonRoadCH4N2ODaoImplTest {

    @Resource
    private NonRoadCH4N2ODao nonRoadCH4N2ODao;

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
    void selectByTypeNFuel() {
        NonRoadCH4N2O expect = NonRoadCH4N2O.builder()
                .id(5)
                .mobileCombustionId(4)
                .vehicleType("Locomotives")
                .fuelType("Diesel")
                .ch4FactorGch4PerGallon(0.8f)
                .n2oFactorGn2oPerGallon(0.26f)
                .build();
        NonRoadCH4N2O actual = nonRoadCH4N2ODao.selectByTypeNFuel("Locomotives", "Diesel");
        assertEquals(expect, actual);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}