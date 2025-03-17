package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Electricity;

public interface ElectricityMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Electricity record);

    int insertSelective(Electricity record);

    Electricity selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Electricity record);

    int updateByPrimaryKey(Electricity record);
}