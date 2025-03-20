package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.MobileCombustionResults;

public interface MobileCombustionResultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MobileCombustionResults record);

    int insertSelective(MobileCombustionResults record);

    MobileCombustionResults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MobileCombustionResults record);

    int updateByPrimaryKey(MobileCombustionResults record);
}