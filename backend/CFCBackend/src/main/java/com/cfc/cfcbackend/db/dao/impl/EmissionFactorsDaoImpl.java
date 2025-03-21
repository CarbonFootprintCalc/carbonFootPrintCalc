package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.EmissionFactorsDao;
import com.cfc.cfcbackend.db.mappers.EmissionFactorsMapper;
import com.cfc.cfcbackend.db.po.EmissionFactors;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class EmissionFactorsDaoImpl implements EmissionFactorsDao {

    @Resource
    EmissionFactorsMapper mapper;
    @Override
    public EmissionFactors getEmissionfactors(int id) {
        return mapper.selectByPrimaryKey(id);
    }
}
