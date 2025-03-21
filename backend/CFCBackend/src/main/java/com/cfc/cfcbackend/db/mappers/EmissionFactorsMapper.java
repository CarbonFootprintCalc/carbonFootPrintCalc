package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.EmissionFactors;

public interface EmissionFactorsMapper {
    int deleteByPrimaryKey(Integer factorId);

    int insert(EmissionFactors record);

    int insertSelective(EmissionFactors record);

    EmissionFactors selectByPrimaryKey(Integer factorId);

    int updateByPrimaryKeySelective(EmissionFactors record);

    int updateByPrimaryKey(EmissionFactors record);
}