package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Emissionfactors;

public interface EmissionfactorsMapper {
    int deleteByPrimaryKey(Integer factorId);

    int insert(Emissionfactors record);

    int insertSelective(Emissionfactors record);

    Emissionfactors selectByPrimaryKey(Integer factorId);

    int updateByPrimaryKeySelective(Emissionfactors record);

    int updateByPrimaryKey(Emissionfactors record);
}