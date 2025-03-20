package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Onroaddieselaltfuelch4n2o;
import org.apache.ibatis.annotations.Param;

public interface Onroaddieselaltfuelch4n2oMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Onroaddieselaltfuelch4n2o record);

    int insertSelective(Onroaddieselaltfuelch4n2o record);

    Onroaddieselaltfuelch4n2o selectByPrimaryKey(Integer id);

    Onroaddieselaltfuelch4n2o selectByTypeNFuelNYear(@Param("vehicle_type") String vehicle_type,
                                                     @Param("fuel_type") String fuel_type,
                                                     @Param("model_year") String model_year);

    Onroaddieselaltfuelch4n2o selectByTypeNFuel(@Param("vehicle_type") String vehicleType,
                                                @Param("fuel_type") String fuelType);

    int updateByPrimaryKeySelective(Onroaddieselaltfuelch4n2o record);

    int updateByPrimaryKey(Onroaddieselaltfuelch4n2o record);
}