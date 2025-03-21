package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.MobileCombustionCO2Dao;
import com.cfc.cfcbackend.db.mappers.MobileCombustionCO2Mapper;
import com.cfc.cfcbackend.db.po.MobileCombustionCO2;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class MobileCombustionCO2DaoImpl implements MobileCombustionCO2Dao {

    @Resource
    private MobileCombustionCO2Mapper mobilecombustionco2Mapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(MobileCombustionCO2 record) {
        return 0;
    }

    @Override
    public int insertSelective(MobileCombustionCO2 record) {
        return 0;
    }

    @Override
    public MobileCombustionCO2 selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public MobileCombustionCO2 selectByFuelType(String fuelType) {
        return mobilecombustionco2Mapper.selectByFuelType(fuelType);
    }

    @Override
    public int updateByPrimaryKeySelective(MobileCombustionCO2 record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(MobileCombustionCO2 record) {
        return 0;
    }
}
