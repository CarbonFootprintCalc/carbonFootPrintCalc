package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.MobileCombustion;

public interface MobileCombustionMapper {
    int deleteByPrimaryKey(Integer mobileCombustionId);

    int insert(MobileCombustion record);

    int insertSelective(MobileCombustion record);

    MobileCombustion selectByPrimaryKey(Integer mobileCombustionId);

    int updateByPrimaryKeySelective(MobileCombustion record);

    int updateByPrimaryKey(MobileCombustion record);
}