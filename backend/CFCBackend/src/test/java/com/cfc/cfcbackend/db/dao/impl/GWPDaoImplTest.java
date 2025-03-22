package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.GWPDao;
import com.cfc.cfcbackend.db.po.GWP;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class GWPDaoImplTest {

    @Resource
    GWPDao gwpDao;

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
    void selectByGasType() {
        GWP expect = GWP.builder()
                .id(25)
                .gasName("PFC-14")
                .gwp100Year(6630f)
                .build();
        GWP actual = gwpDao.selectByGasType("PFC-14");
        assertEquals(expect, actual);
    }
}