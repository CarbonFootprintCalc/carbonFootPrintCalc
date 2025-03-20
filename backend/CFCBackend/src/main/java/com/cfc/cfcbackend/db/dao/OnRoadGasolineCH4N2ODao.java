package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Onroadgasolinech4n2o;

public interface OnRoadGasolineCH4N2ODao {
    int deleteByPrimaryKey(Integer id);

    int insert(Onroadgasolinech4n2o record);

    int insertSelective(Onroadgasolinech4n2o record);

    Onroadgasolinech4n2o selectByPrimaryKey(Integer id);

    Onroadgasolinech4n2o selectByTypeNYear(String vehicleType, String modelYear);

    int updateByPrimaryKeySelective(Onroadgasolinech4n2o record);

    int updateByPrimaryKey(Onroadgasolinech4n2o record);
}
