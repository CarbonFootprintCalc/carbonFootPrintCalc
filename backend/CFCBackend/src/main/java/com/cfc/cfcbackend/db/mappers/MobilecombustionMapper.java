package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Mobilecombustion;

public interface MobilecombustionMapper {
    int deleteByPrimaryKey(Integer mobileCombustionId);

    int insert(Mobilecombustion record);

    int insertSelective(Mobilecombustion record);

    Mobilecombustion selectByPrimaryKey(Integer mobileCombustionId);

    int updateByPrimaryKeySelective(Mobilecombustion record);

    int updateByPrimaryKey(Mobilecombustion record);
}