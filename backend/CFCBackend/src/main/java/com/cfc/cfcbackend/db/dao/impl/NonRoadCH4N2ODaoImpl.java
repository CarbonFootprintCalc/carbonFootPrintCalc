package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.NonRoadCH4N2ODao;
import com.cfc.cfcbackend.db.mappers.NonRoadCH4N2OMapper;
import com.cfc.cfcbackend.db.po.NonRoadCH4N2O;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class NonRoadCH4N2ODaoImpl implements NonRoadCH4N2ODao {

    @Resource
    private NonRoadCH4N2OMapper nonroadch4n2oMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(NonRoadCH4N2O record) {
        return 0;
    }

    @Override
    public int insertSelective(NonRoadCH4N2O record) {
        return 0;
    }

    @Override
    public NonRoadCH4N2O selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public NonRoadCH4N2O selectByTypeNFuel(String vehicleType, String fuelType) {
        return nonroadch4n2oMapper.selectByTypeNFuel(vehicleType, fuelType);
    }

    @Override
    public int updateByPrimaryKeySelective(NonRoadCH4N2O record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(NonRoadCH4N2O record) {
        return 0;
    }
}
