package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.ElectricityMapperDao;
import com.cfc.cfcbackend.db.po.Electricity;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ElectricityMapperDaoImplTest {

    @Resource
    private ElectricityMapperDao electricityMapperDao;

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
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }

    @Test
    void selectBySubregion() {
        Electricity expect = Electricity.builder()
                .id(1)
                .factorId(6)
                .egridSubregionAcronym("AKGD")
                .egridSubregionName("ASCC Alaska Grid")
                .totalCo2FactorLbPerMwh(899f)
                .totalCh4FactorLbPerMwh(0.086f)
                .totalN2oFactorLbPerMwh(0.012f)
                .nonBaseloadCo2FactorLbPerMwh(1077.1f)
                .nonBaseloadCh4FactorLbPerMwh(0.016f)
                .nonBaseloadN2oFactorLbPerMwh(0.016f)
                .gridGrossLossPercentage(4.1f)
                .build();
        Electricity actual = electricityMapperDao.selectBySubregion("AKGD");
        assertEquals(expect, actual);
    }
}