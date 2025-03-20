package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.MobileCombustionCO2Dao;
import com.cfc.cfcbackend.db.mappers.Mobilecombustionco2Mapper;
import com.cfc.cfcbackend.db.po.Mobilecombustionco2;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class MobileCombustionCO2DaoImpl implements MobileCombustionCO2Dao {

    @Resource
    private Mobilecombustionco2Mapper mobilecombustionco2Mapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(Mobilecombustionco2 record) {
        return 0;
    }

    @Override
    public int insertSelective(Mobilecombustionco2 record) {
        return 0;
    }

    @Override
    public Mobilecombustionco2 selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public Mobilecombustionco2 selectByFuelType(String fuelType) {
        return mobilecombustionco2Mapper.selectByFuelType(fuelType);
    }

    @Override
    public int updateByPrimaryKeySelective(Mobilecombustionco2 record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Mobilecombustionco2 record) {
        return 0;
    }
}
