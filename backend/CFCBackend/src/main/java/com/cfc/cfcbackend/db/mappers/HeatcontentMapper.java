package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Heatcontent;

public interface HeatcontentMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Heatcontent record);

    int insertSelective(Heatcontent record);

    Heatcontent selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Heatcontent record);

    int updateByPrimaryKey(Heatcontent record);
}