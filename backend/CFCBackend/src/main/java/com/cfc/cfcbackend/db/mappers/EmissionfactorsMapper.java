package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Emissionfactors;

import java.util.List;

public interface EmissionfactorsMapper {
    int deleteByPrimaryKey(Integer factorId);

    int insert(Emissionfactors record);

    int insertSelective(Emissionfactors record);

    Emissionfactors selectByPrimaryKey(Integer factorId);

    List<Emissionfactors> selectAll();

    int updateByPrimaryKeySelective(Emissionfactors record);

    int updateByPrimaryKey(Emissionfactors record);
}