package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.BusinessTravelResults;

public interface BusinessTravelResultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(BusinessTravelResults record);

    int insertSelective(BusinessTravelResults record);

    BusinessTravelResults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(BusinessTravelResults record);

    int updateByPrimaryKey(BusinessTravelResults record);
}