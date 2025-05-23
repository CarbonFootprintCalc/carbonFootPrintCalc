package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.UnitConversions;
import org.apache.ibatis.annotations.Param;

public interface UnitConversionsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UnitConversions record);

    int insertSelective(UnitConversions record);

    UnitConversions selectByPrimaryKey(Integer id);

    UnitConversions selectByUnits(@Param("from") String from, @Param("to") String to);

    int updateByPrimaryKeySelective(UnitConversions record);

    int updateByPrimaryKey(UnitConversions record);
}