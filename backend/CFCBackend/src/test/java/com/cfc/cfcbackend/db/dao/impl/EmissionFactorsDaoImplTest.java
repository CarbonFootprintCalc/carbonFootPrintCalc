package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.EmissionFactorsDao;
import com.cfc.cfcbackend.db.po.EmissionFactors;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EmissionFactorsDaoImplTest {

    @Resource
    private EmissionFactorsDao emissionfactorsDao;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getEmissionFactors() {
        EmissionFactors emissionfactors = EmissionFactors.builder()
                .factorId(1)
                .scope("Scope1")
                .category("Stationary Combustion")
                .unit("mmBtu")
                .build();
        EmissionFactors result = emissionfactorsDao.getEmissionfactors(1);
        assertEquals(emissionfactors, result);
    }
}