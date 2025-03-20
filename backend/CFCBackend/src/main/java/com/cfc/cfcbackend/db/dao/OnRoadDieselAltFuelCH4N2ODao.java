package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Onroaddieselaltfuelch4n2o;

public interface OnRoadDieselAltFuelCH4N2ODao {
    int deleteByPrimaryKey(Integer id);

    int insert(Onroaddieselaltfuelch4n2o record);

    int insertSelective(Onroaddieselaltfuelch4n2o record);

    Onroaddieselaltfuelch4n2o selectByPrimaryKey(Integer id);

    Onroaddieselaltfuelch4n2o selectByTypeNFuelNYear(String vehicleType, String fuelType, String modelYear);

    Onroaddieselaltfuelch4n2o selectByTypeNFuel(String vehicleType, String fuelType);

    int updateByPrimaryKeySelective(Onroaddieselaltfuelch4n2o record);

    int updateByPrimaryKey(Onroaddieselaltfuelch4n2o record);
}
