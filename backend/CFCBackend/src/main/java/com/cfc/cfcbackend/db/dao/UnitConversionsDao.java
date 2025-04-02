package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.UnitConversions;

public interface UnitConversionsDao {
    int deleteByPrimaryKey(Integer id);

    int insert(UnitConversions record);

    int insertSelective(UnitConversions record);

    UnitConversions selectByPrimaryKey(Integer id);

    UnitConversions selectByUnits(String convertFrom, String to);

    int updateByPrimaryKeySelective(UnitConversions record);

    int updateByPrimaryKey(UnitConversions record);
}
