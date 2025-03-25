package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.StationaryCombustionFactors;

public interface StationaryCombustionFactorsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StationaryCombustionFactors record);

    int insertSelective(StationaryCombustionFactors record);

    StationaryCombustionFactors selectByPrimaryKey(Integer id);

    StationaryCombustionFactors selectByFuelType(String fuel_type);

    int updateByPrimaryKeySelective(StationaryCombustionFactors record);

    int updateByPrimaryKey(StationaryCombustionFactors record);
}