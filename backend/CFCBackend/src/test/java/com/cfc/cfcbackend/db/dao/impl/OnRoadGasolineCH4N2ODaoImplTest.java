package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.OnRoadGasolineCH4N2ODao;
import com.cfc.cfcbackend.db.po.Onroadgasolinech4n2o;
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
        Onroadgasolinech4n2o onroadgasolinech4n2o = Onroadgasolinech4n2o.builder()
                .id(10)
                .mobileCombustionId(2)
                .vehicleType("Gasoline Passenger Cars")
                .modelYear("1994")
                .ch4FactorGch4PerMile(0.0617f)
                .n2oFactorGc2oPerMile(0.0603f)
                .build();
        Onroadgasolinech4n2o result = onRoadGasolineCH4N2ODao.selectByTypeNYear("Gasoline Passenger Cars", "1994");
        assertEquals(onroadgasolinech4n2o, result);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}