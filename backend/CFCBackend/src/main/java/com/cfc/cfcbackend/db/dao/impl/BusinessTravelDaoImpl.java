package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.BusinessTravelDao;
import com.cfc.cfcbackend.db.mappers.BusinessTravelMapper;
import com.cfc.cfcbackend.db.po.BusinessTravel;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class BusinessTravelDaoImpl implements BusinessTravelDao {

    @Resource
    private BusinessTravelMapper businessTravelMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(BusinessTravel record) {
        return 0;
    }

    @Override
    public int insertSelective(BusinessTravel record) {
        return 0;
    }

    @Override
    public BusinessTravel selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public BusinessTravel selectByVehicleType(String vehicleType) {
        return businessTravelMapper.selectByVehicleType(vehicleType);
    }

    @Override
    public int updateByPrimaryKeySelective(BusinessTravel record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(BusinessTravel record) {
        return 0;
    }
}
