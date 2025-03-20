package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.Nonroadch4n2oDao;
import com.cfc.cfcbackend.db.mappers.Nonroadch4n2oMapper;
import com.cfc.cfcbackend.db.po.Nonroadch4n2o;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class Nonroadch4n2oDaoImpl implements Nonroadch4n2oDao {

    @Resource
    private Nonroadch4n2oMapper nonroadch4n2oMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(Nonroadch4n2o record) {
        return 0;
    }

    @Override
    public int insertSelective(Nonroadch4n2o record) {
        return 0;
    }

    @Override
    public Nonroadch4n2o selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public Nonroadch4n2o selectByTypeNFuel(String vehicle_type, String fuel_type) {
        return nonroadch4n2oMapper.selectByTypeNFuel(vehicle_type, fuel_type);
    }

    @Override
    public int updateByPrimaryKeySelective(Nonroadch4n2o record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Nonroadch4n2o record) {
        return 0;
    }
}
