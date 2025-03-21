package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.UnitConversions;

public interface UnitConversionsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UnitConversions record);

    int insertSelective(UnitConversions record);

    UnitConversions selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UnitConversions record);

    int updateByPrimaryKey(UnitConversions record);
}