package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.HeatContent;

public interface HeatContentMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(HeatContent record);

    int insertSelective(HeatContent record);

    HeatContent selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(HeatContent record);

    int updateByPrimaryKey(HeatContent record);
}