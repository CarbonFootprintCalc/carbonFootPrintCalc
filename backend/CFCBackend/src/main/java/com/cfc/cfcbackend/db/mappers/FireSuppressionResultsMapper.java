package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.FireSuppressionResults;

public interface FireSuppressionResultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FireSuppressionResults record);

    int insertSelective(FireSuppressionResults record);

    FireSuppressionResults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FireSuppressionResults record);

    int updateByPrimaryKey(FireSuppressionResults record);
}