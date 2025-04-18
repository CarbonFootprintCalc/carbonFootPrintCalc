package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.BusinessTravelDao;
import com.cfc.cfcbackend.db.po.BusinessTravel;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BusinessTravelDaoImplTest {

    @Resource
    private BusinessTravelDao businessTravelDao;

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
    void selectByVehicleType() {
        BusinessTravel expect = BusinessTravel.builder()
                .id(9)
                .factorId(7)
                .vehicleType("Bus")
                .co2FactorKgco2PerUnit(0.066f)
                .ch4FactorGch4PerUnit(0.0046f)
                .n2oFactorGn2oPerUnit(0.0019f)
                .unit("passenger-mile")
                .build();
        BusinessTravel actual = businessTravelDao.selectByVehicleType(expect.getVehicleType());
        assertEquals(expect, actual);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}