package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.BusinessTravel;

public interface BusinessTravelMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(BusinessTravel record);

    int insertSelective(BusinessTravel record);

    BusinessTravel selectByPrimaryKey(Integer id);

    BusinessTravel selectByVehicleType(String vehicleType);

    int updateByPrimaryKeySelective(BusinessTravel record);

    int updateByPrimaryKey(BusinessTravel record);
}