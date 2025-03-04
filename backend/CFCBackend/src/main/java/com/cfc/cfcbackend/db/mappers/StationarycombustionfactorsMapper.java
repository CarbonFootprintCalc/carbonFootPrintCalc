package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Stationarycombustionfactors;

public interface StationarycombustionfactorsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Stationarycombustionfactors record);

    int insertSelective(Stationarycombustionfactors record);

    Stationarycombustionfactors selectByPrimaryKey(Integer id);

    Stationarycombustionfactors selectByFuelType(String fuel_type);

    int updateByPrimaryKeySelective(Stationarycombustionfactors record);

    int updateByPrimaryKey(Stationarycombustionfactors record);
}