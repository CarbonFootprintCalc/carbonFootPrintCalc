package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.StationaryCombustionFactorsDao;
import com.cfc.cfcbackend.db.mappers.StationaryCombustionFactorsMapper;
import com.cfc.cfcbackend.db.po.StationaryCombustionFactors;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class StationaryCombustionFactorsDaoImpl implements StationaryCombustionFactorsDao {

    @Resource
    private StationaryCombustionFactorsMapper stationarycombustionfactorsMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(StationaryCombustionFactors record) {
        return 0;
    }

    @Override
    public int insertSelective(StationaryCombustionFactors record) {
        return 0;
    }

    @Override
    public StationaryCombustionFactors selectByPrimaryKey(int id) {
        return stationarycombustionfactorsMapper.selectByPrimaryKey(id);
    }

    @Override
    public StationaryCombustionFactors selectByFuelType(String fuelType) {
        return stationarycombustionfactorsMapper.selectByFuelType(fuelType);
    }

    @Override
    public int updateByPrimaryKeySelective(StationaryCombustionFactors record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(StationaryCombustionFactors record) {
        return 0;
    }
}
