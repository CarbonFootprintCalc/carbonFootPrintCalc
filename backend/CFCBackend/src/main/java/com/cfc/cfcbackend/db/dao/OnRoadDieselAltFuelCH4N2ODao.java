package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.OnRoadDieselAltFuelCH4N2O;

public interface OnRoadDieselAltFuelCH4N2ODao {
    int deleteByPrimaryKey(Integer id);

    int insert(OnRoadDieselAltFuelCH4N2O record);

    int insertSelective(OnRoadDieselAltFuelCH4N2O record);

    OnRoadDieselAltFuelCH4N2O selectByPrimaryKey(Integer id);

    OnRoadDieselAltFuelCH4N2O selectByTypeNFuelNYear(String vehicleType, String fuelType, String modelYear);

    OnRoadDieselAltFuelCH4N2O selectByTypeNFuel(String vehicleType, String fuelType);

    int updateByPrimaryKeySelective(OnRoadDieselAltFuelCH4N2O record);

    int updateByPrimaryKey(OnRoadDieselAltFuelCH4N2O record);
}
