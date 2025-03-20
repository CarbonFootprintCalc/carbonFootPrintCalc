package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.EmissionFactorsDao;
import com.cfc.cfcbackend.db.mappers.EmissionfactorsMapper;
import com.cfc.cfcbackend.db.po.Emissionfactors;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class EmissionFactorsDaoImpl implements EmissionFactorsDao {

    @Resource
    EmissionfactorsMapper mapper;
    @Override
    public Emissionfactors getEmissionfactors(int id) {
        return mapper.selectByPrimaryKey(id);
    }
}
