package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.ElectricityMapperDao;
import com.cfc.cfcbackend.db.mappers.ElectricityMapper;
import com.cfc.cfcbackend.db.po.Electricity;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class ElectricityMapperDaoImpl implements ElectricityMapperDao {
    
    @Resource
    private ElectricityMapper electricityMapper;

    @Override
    public int deleteByPrimaryKey(int id) {
        return 0;
    }

    @Override
    public int insert(Electricity record) {
        return 0;
    }

    @Override
    public int insertSelective(Electricity record) {
        return 0;
    }

    @Override
    public Electricity selectByPrimaryKey(int id) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(Electricity record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Electricity record) {
        return 0;
    }

    @Override
    public Electricity selectBySubregion(String subregion) {
        return electricityMapper.selectBySubregion(subregion);
    }
}
