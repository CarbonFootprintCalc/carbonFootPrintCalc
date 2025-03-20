package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Onroaddieselaltfuelch4n2o;

public interface Onroaddieselaltfuelch4n2oDao {
    int deleteByPrimaryKey(Integer id);

    int insert(Onroaddieselaltfuelch4n2o record);

    int insertSelective(Onroaddieselaltfuelch4n2o record);

    Onroaddieselaltfuelch4n2o selectByPrimaryKey(Integer id);

    Onroaddieselaltfuelch4n2o selectByTypeNFuelNYear(String vehicle_type, String fuel_type, String model_year);

    Onroaddieselaltfuelch4n2o selectByTypeNFuel(String vehicle_type, String fuel_type);

    int updateByPrimaryKeySelective(Onroaddieselaltfuelch4n2o record);

    int updateByPrimaryKey(Onroaddieselaltfuelch4n2o record);
}
