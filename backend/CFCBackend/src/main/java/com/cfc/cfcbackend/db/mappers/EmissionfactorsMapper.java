package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Emissionfactors;

public interface EmissionfactorsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Emissionfactors record);

    int insertSelective(Emissionfactors record);

    Emissionfactors selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Emissionfactors record);

    int updateByPrimaryKey(Emissionfactors record);
}