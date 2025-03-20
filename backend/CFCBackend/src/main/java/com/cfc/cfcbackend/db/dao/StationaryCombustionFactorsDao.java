package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Stationarycombustionfactors;

public interface StationarycombustionfactorsDao {
    int deleteByPrimaryKey(Integer id);

    int insert(Stationarycombustionfactors record);

    int insertSelective(Stationarycombustionfactors record);

    Stationarycombustionfactors selectByPrimaryKey(int id);

    Stationarycombustionfactors selectByFuelType(String fuelType);

    int updateByPrimaryKeySelective(Stationarycombustionfactors record);

    int updateByPrimaryKey(Stationarycombustionfactors record);
}
