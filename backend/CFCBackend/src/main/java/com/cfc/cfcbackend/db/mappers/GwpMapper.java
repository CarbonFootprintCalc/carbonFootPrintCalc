package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Gwp;

public interface GwpMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Gwp record);

    int insertSelective(Gwp record);

    Gwp selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Gwp record);

    int updateByPrimaryKey(Gwp record);

    Gwp selectByGasType(String gasType);
}