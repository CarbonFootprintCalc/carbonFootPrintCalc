package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.StationaryCombustionFactors;

public interface StationaryCombustionFactorsDao {
    int deleteByPrimaryKey(Integer id);

    int insert(StationaryCombustionFactors record);

    int insertSelective(StationaryCombustionFactors record);

    StationaryCombustionFactors selectByPrimaryKey(int id);

    StationaryCombustionFactors selectByFuelType(String fuelType);

    int updateByPrimaryKeySelective(StationaryCombustionFactors record);

    int updateByPrimaryKey(StationaryCombustionFactors record);
}
