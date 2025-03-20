package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.GWP;

public interface GWPMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(GWP record);

    int insertSelective(GWP record);

    GWP selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(GWP record);

    int updateByPrimaryKey(GWP record);
}