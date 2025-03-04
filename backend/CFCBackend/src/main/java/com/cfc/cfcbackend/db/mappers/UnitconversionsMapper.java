package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Unitconversions;

public interface UnitconversionsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Unitconversions record);

    int insertSelective(Unitconversions record);

    Unitconversions selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Unitconversions record);

    int updateByPrimaryKey(Unitconversions record);
}