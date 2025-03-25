package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.OnRoadGasolineCH4N2O;

public interface OnRoadGasolineCH4N2ODao {
    int deleteByPrimaryKey(Integer id);

    int insert(OnRoadGasolineCH4N2O record);

    int insertSelective(OnRoadGasolineCH4N2O record);

    OnRoadGasolineCH4N2O selectByPrimaryKey(Integer id);

    OnRoadGasolineCH4N2O selectByTypeNYear(String vehicleType, String modelYear);

    int updateByPrimaryKeySelective(OnRoadGasolineCH4N2O record);

    int updateByPrimaryKey(OnRoadGasolineCH4N2O record);
}
