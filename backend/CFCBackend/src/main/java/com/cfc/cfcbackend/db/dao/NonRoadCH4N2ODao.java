package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Nonroadch4n2o;

public interface NonRoadCH4N2ODao {
    int deleteByPrimaryKey(Integer id);

    int insert(Nonroadch4n2o record);

    int insertSelective(Nonroadch4n2o record);

    Nonroadch4n2o selectByPrimaryKey(Integer id);

    Nonroadch4n2o selectByTypeNFuel(String vehicleType, String fuelType);

    int updateByPrimaryKeySelective(Nonroadch4n2o record);

    int updateByPrimaryKey(Nonroadch4n2o record);
}
