package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.GWPDao;
import com.cfc.cfcbackend.db.mappers.GWPMapper;
import com.cfc.cfcbackend.db.po.GWP;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class GWPDaoImpl implements GWPDao {
    
    @Resource
    private GWPMapper gwpMapper;

    @Override
    public int deleteByPrimaryKey(int id) {
        return 0;
    }

    @Override
    public int insert(GWP record) {
        return 0;
    }

    @Override
    public int insertSelective(GWP record) {
        return 0;
    }

    @Override
    public GWP selectByPrimaryKey(int id) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(GWP record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(GWP record) {
        return 0;
    }

    @Override
    public GWP selectByGasType(String gasType) {
        return gwpMapper.selectByGasType(gasType);
    }
}
