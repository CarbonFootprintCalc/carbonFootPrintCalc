package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.MobileCombustionCO2;

public interface MobileCombustionCO2Dao {
    int deleteByPrimaryKey(Integer id);

    int insert(MobileCombustionCO2 record);

    int insertSelective(MobileCombustionCO2 record);

    MobileCombustionCO2 selectByPrimaryKey(Integer id);

    MobileCombustionCO2 selectByFuelType(String fuelType);

    int updateByPrimaryKeySelective(MobileCombustionCO2 record);

    int updateByPrimaryKey(MobileCombustionCO2 record);
}
