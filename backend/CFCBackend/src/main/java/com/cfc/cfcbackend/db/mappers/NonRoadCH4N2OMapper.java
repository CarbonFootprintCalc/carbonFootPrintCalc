package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.NonRoadCH4N2O;
import org.apache.ibatis.annotations.Param;

public interface NonRoadCH4N2OMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(NonRoadCH4N2O record);

    int insertSelective(NonRoadCH4N2O record);

    NonRoadCH4N2O selectByPrimaryKey(Integer id);

    NonRoadCH4N2O selectByTypeNFuel(@Param("vehicle_type") String vehicle_type,
                                    @Param("fuel_type") String fuel_type);

    int updateByPrimaryKeySelective(NonRoadCH4N2O record);

    int updateByPrimaryKey(NonRoadCH4N2O record);
}