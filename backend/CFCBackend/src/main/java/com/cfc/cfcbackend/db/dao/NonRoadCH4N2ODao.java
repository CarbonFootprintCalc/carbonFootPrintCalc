package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.NonRoadCH4N2O;

public interface NonRoadCH4N2ODao {
    int deleteByPrimaryKey(Integer id);

    int insert(NonRoadCH4N2O record);

    int insertSelective(NonRoadCH4N2O record);

    NonRoadCH4N2O selectByPrimaryKey(Integer id);

    NonRoadCH4N2O selectByTypeNFuel(String vehicleType, String fuelType);

    int updateByPrimaryKeySelective(NonRoadCH4N2O record);

    int updateByPrimaryKey(NonRoadCH4N2O record);
}
