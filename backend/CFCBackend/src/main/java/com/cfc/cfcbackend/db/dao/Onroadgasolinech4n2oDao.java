package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Onroadgasolinech4n2o;

public interface Onroadgasolinech4n2oDao {
    int deleteByPrimaryKey(Integer id);

    int insert(Onroadgasolinech4n2o record);

    int insertSelective(Onroadgasolinech4n2o record);

    Onroadgasolinech4n2o selectByPrimaryKey(Integer id);

    Onroadgasolinech4n2o selectByTypeNYear(String vehicle_type, String model_year);

    int updateByPrimaryKeySelective(Onroadgasolinech4n2o record);

    int updateByPrimaryKey(Onroadgasolinech4n2o record);
}
