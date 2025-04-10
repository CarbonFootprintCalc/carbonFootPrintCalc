package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.ElectricityResults;

public interface ElectricityResultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ElectricityResults record);

    int insertSelective(ElectricityResults record);

    ElectricityResults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ElectricityResults record);

    int updateByPrimaryKey(ElectricityResults record);
}