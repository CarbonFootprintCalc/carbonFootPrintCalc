package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Gwp;

public interface GWPDao {
    int deleteByPrimaryKey(int id);

    int insert(Gwp record);

    int insertSelective(Gwp record);

    Gwp selectByPrimaryKey(int id);

    int updateByPrimaryKeySelective(Gwp record);

    int updateByPrimaryKey(Gwp record);

    Gwp selectByGasType(String gasType);
}
