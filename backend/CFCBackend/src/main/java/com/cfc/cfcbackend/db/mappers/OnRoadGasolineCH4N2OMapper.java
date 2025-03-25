package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.OnRoadGasolineCH4N2O;
import org.apache.ibatis.annotations.Param;

public interface OnRoadGasolineCH4N2OMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(OnRoadGasolineCH4N2O record);

    int insertSelective(OnRoadGasolineCH4N2O record);

    OnRoadGasolineCH4N2O selectByPrimaryKey(Integer id);

    OnRoadGasolineCH4N2O selectByTypeNYear(@Param("vehicle_type") String vehicle_type, @Param("model_year") String model_year);

    int updateByPrimaryKeySelective(OnRoadGasolineCH4N2O record);

    int updateByPrimaryKey(OnRoadGasolineCH4N2O record);
}