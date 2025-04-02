package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.UnitConversionsDao;
import com.cfc.cfcbackend.db.po.UnitConversions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UnitConversionsDaoImplTest {

    @Resource
    private UnitConversionsDao unitConversionsDao;

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
    void selectByUnits() {
        UnitConversions expect = UnitConversions.builder()
                .id(8)
                .category("Mass")
                .convertFrom("pounds (lb)")
                .convertTo("short ton")
                .multiplyBy(0.0005f)
                .units("short ton / lb")
                .build();
        UnitConversions actual = unitConversionsDao.selectByUnits("pounds (lb)", "short ton");
        assertEquals(expect, actual);
    }

    @Test
    void updateByPrimaryKeySelective() {
    }

    @Test
    void updateByPrimaryKey() {
    }
}