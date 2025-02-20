package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.EmissionfactorsDao;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class EmissionfactorsDaoImplTest {

    @Resource
    private EmissionfactorsDao emissionfactorsDao;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getEmissionfactors() {
        log.info(emissionfactorsDao.getEmissionfactors(1).toString());
    }

    @Test
    void getAllEmissionfactors() {
        log.info(emissionfactorsDao.getAllEmissionfactors().toString());
    }
}