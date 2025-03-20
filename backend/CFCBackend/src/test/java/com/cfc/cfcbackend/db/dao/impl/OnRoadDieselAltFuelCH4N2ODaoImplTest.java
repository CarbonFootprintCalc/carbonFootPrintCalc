package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.OnRoadDieselAltFuelCH4N2ODao;
import com.cfc.cfcbackend.db.po.OnRoadDieselAltFuelCH4N2O;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OnRoadDieselAltFuelCH4N2ODaoImplTest {

    @Resource
    private OnRoadDieselAltFuelCH4N2ODao onRoadDieselAltFuelCH4N2ODao;

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
    void selectByTypeNFuelNYear() {
        OnRoadDieselAltFuelCH4N2O onroaddieselaltfuelch4n2o = OnRoadDieselAltFuelCH4N2O.builder()
                .id(3)
                .mobileCombustionId(3)
                .vehicleType("Passenger Cars")
                .fuelType("Diesel")
                .modelYear("2007-2024")
                .ch4FactorGch4PerMile(0.0302f)
                .n2oFactorGn2oPerMile(0.0192f)
                .build();
        OnRoadDieselAltFuelCH4N2O result = onRoadDieselAltFuelCH4N2ODao.selectByTypeNFuelNYear("Passenger Cars", "Diesel", "2007-2024");
        assertEquals(onroaddieselaltfuelch4n2o, result);
    }

    @Test
    void selectByTypeNFuel() {
        OnRoadDieselAltFuelCH4N2O onroaddieselaltfuelch4n2o = OnRoadDieselAltFuelCH4N2O.builder()
                .id(30)
                .mobileCombustionId(3)
                .vehicleType("Buses")
                .fuelType("Ethanol")
                .ch4FactorGch4PerMile(0.19f)
                .n2oFactorGn2oPerMile(0.029f)
                .build();
        OnRoadDieselAltFuelCH4N2O result = onRoadDieselAltFuelCH4N2ODao.selectByTypeNFuel("Buses", "Ethanol");
        assertEquals(onroaddieselaltfuelch4n2o, result);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}