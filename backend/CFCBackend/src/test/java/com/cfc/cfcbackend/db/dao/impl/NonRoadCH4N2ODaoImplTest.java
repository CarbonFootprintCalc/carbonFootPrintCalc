package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.NonRoadCH4N2ODao;
import com.cfc.cfcbackend.db.po.Mobilecombustionco2;
import com.cfc.cfcbackend.db.po.Nonroadch4n2o;
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
        Nonroadch4n2o nonroadch4n2o = Nonroadch4n2o.builder()
                .id(5)
                .mobileCombustionId(4)
                .vehicleType("Locomotives")
                .fuelType("Diesel")
                .ch4FactorGch4PerGallon(0.8f)
                .n2oFactorGn2oPerGallon(0.26f)
                .build();
        Nonroadch4n2o result = nonRoadCH4N2ODao.selectByTypeNFuel("Locomotives", "Diesel");
        assertEquals(nonroadch4n2o, result);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}