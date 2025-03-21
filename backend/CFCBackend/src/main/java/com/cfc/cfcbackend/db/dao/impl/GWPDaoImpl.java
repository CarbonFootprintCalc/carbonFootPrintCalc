package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.GWPDao;
import com.cfc.cfcbackend.db.mappers.GwpMapper;
import com.cfc.cfcbackend.db.po.Gwp;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class GWPDaoImpl implements GWPDao {
    
    @Resource
    private GwpMapper gwpMapper;

    @Override
    public int deleteByPrimaryKey(int id) {
        return 0;
    }

    @Override
    public int insert(Gwp record) {
        return 0;
    }

    @Override
    public int insertSelective(Gwp record) {
        return 0;
    }

    @Override
    public Gwp selectByPrimaryKey(int id) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(Gwp record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Gwp record) {
        return 0;
    }

    @Override
    public Gwp selectByGasType(String gasType) {
        return gwpMapper.selectByGasType(gasType);
    }
}
