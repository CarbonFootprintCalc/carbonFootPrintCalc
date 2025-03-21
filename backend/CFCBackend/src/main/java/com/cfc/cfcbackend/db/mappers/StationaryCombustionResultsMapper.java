package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.StationaryCombustionResults;

public interface StationaryCombustionResultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StationaryCombustionResults record);

    int insertSelective(StationaryCombustionResults record);

    StationaryCombustionResults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StationaryCombustionResults record);

    int updateByPrimaryKey(StationaryCombustionResults record);
}