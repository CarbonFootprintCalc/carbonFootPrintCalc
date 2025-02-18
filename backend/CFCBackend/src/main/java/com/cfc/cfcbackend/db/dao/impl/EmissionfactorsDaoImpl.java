package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.EmissionfactorsDao;
import com.cfc.cfcbackend.db.mappers.EmissionfactorsMapper;
import com.cfc.cfcbackend.db.po.Emissionfactors;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

@Repository
public class EmissionfactorsDaoImpl implements EmissionfactorsDao {

    @Resource
    EmissionfactorsMapper mapper;
    @Override
    public Emissionfactors getEmissionfactors(int id) {
        return mapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Emissionfactors> getAllEmissionfactors() {
        return mapper.selectAll();
    }
}
