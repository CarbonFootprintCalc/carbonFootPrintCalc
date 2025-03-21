package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.StationaryCombustionFactorsDao;
import com.cfc.cfcbackend.db.po.StationaryCombustionFactors;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StationaryCombustionFactorsDaoImplTest {

    @Resource
    private StationaryCombustionFactorsDao stationaryCombustionFactorsDao;

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
        StationaryCombustionFactors stationarycombustionfactors = StationaryCombustionFactors.builder()
                .id(13)
                .factorId(1)
                .fuelType("Tires")
                .co2FactorKgco2PerMmbtu(85.97f)
                .ch4FactorGch4PerMmbtu(32f)
                .n2oFactorGn2oPerMmbtu(4.2f)
                .co2FactorKgco2PerUnit(2407f)
                .ch4FactorGch4PerUnit(896f)
                .n2oFactorGn2oPerUnit(118f)
                .unit("short ton")
                .build();
        StationaryCombustionFactors result = stationaryCombustionFactorsDao.selectByFuelType("Tires");
        assertEquals(stationarycombustionfactors, result);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}