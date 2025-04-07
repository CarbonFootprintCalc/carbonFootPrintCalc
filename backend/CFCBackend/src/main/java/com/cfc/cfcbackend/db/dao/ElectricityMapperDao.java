package com.cfc.cfcbackend.db.dao;

import com.cfc.cfcbackend.db.po.Electricity;

public interface ElectricityMapperDao {
    int deleteByPrimaryKey(int id);

    int insert(Electricity record);

    int insertSelective(Electricity record);

    Electricity selectByPrimaryKey(int id);

    int updateByPrimaryKeySelective(Electricity record);

    int updateByPrimaryKey(Electricity record);

    Electricity selectBySubregion(String subregion);
}