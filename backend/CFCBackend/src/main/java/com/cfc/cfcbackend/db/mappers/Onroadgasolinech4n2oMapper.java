package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Onroadgasolinech4n2o;
import org.apache.ibatis.annotations.Param;

public interface Onroadgasolinech4n2oMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Onroadgasolinech4n2o record);

    int insertSelective(Onroadgasolinech4n2o record);

    Onroadgasolinech4n2o selectByPrimaryKey(Integer id);

    Onroadgasolinech4n2o selectByTypeNYear(@Param("vehicle_type") String vehicle_type, @Param("model_year") String model_year);

    int updateByPrimaryKeySelective(Onroadgasolinech4n2o record);

    int updateByPrimaryKey(Onroadgasolinech4n2o record);
}