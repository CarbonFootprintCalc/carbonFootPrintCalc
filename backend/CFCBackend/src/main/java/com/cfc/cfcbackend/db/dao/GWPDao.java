package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.GWP;

public interface GWPDao {
    int deleteByPrimaryKey(int id);

    int insert(GWP record);

    int insertSelective(GWP record);

    GWP selectByPrimaryKey(int id);

    int updateByPrimaryKeySelective(GWP record);

    int updateByPrimaryKey(GWP record);

    GWP selectByGasType(String gasType);
}
