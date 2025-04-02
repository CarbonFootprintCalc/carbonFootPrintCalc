package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.UnitConversionsDao;
import com.cfc.cfcbackend.db.mappers.UnitConversionsMapper;
import com.cfc.cfcbackend.db.po.UnitConversions;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class UnitConversionsDaoImpl implements UnitConversionsDao {
    @Resource
    private UnitConversionsMapper unitConversionsMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(UnitConversions record) {
        return 0;
    }

    @Override
    public int insertSelective(UnitConversions record) {
        return 0;
    }

    @Override
    public UnitConversions selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public UnitConversions selectByUnits(String from, String to) {
        return unitConversionsMapper.selectByUnits(from, to);
    }

    @Override
    public int updateByPrimaryKeySelective(UnitConversions record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(UnitConversions record) {
        return 0;
    }
}
