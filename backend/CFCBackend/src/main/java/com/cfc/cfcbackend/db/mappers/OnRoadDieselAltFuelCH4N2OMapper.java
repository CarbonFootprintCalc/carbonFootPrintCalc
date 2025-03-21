package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.OnRoadDieselAltFuelCH4N2O;
import org.apache.ibatis.annotations.Param;

public interface OnRoadDieselAltFuelCH4N2OMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(OnRoadDieselAltFuelCH4N2O record);

    int insertSelective(OnRoadDieselAltFuelCH4N2O record);

    OnRoadDieselAltFuelCH4N2O selectByPrimaryKey(Integer id);

    OnRoadDieselAltFuelCH4N2O selectByTypeNFuelNYear(@Param("vehicle_type") String vehicle_type,
                                                     @Param("fuel_type") String fuel_type,
                                                     @Param("model_year") String model_year);

    OnRoadDieselAltFuelCH4N2O selectByTypeNFuel(@Param("vehicle_type") String vehicleType,
                                                @Param("fuel_type") String fuelType);

    int updateByPrimaryKeySelective(OnRoadDieselAltFuelCH4N2O record);

    int updateByPrimaryKey(OnRoadDieselAltFuelCH4N2O record);
}