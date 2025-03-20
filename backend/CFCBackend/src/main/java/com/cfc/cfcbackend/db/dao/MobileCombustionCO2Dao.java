package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Mobilecombustionco2;

public interface MobileCombustionCO2Dao {
    int deleteByPrimaryKey(Integer id);

    int insert(Mobilecombustionco2 record);

    int insertSelective(Mobilecombustionco2 record);

    Mobilecombustionco2 selectByPrimaryKey(Integer id);

    Mobilecombustionco2 selectByFuelType(String fuelType);

    int updateByPrimaryKeySelective(Mobilecombustionco2 record);

    int updateByPrimaryKey(Mobilecombustionco2 record);
}
