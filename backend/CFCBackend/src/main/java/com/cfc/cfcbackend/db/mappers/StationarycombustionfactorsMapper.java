package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Stationarycombustionfactors;

public interface StationarycombustionfactorsMapper {
    int deleteByPrimaryKey(String fueltype);

    int insert(Stationarycombustionfactors record);

    int insertSelective(Stationarycombustionfactors record);

    Stationarycombustionfactors selectByPrimaryKey(String fueltype);

    int updateByPrimaryKeySelective(Stationarycombustionfactors record);

    int updateByPrimaryKey(Stationarycombustionfactors record);
}