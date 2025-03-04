package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.StationarycombustionfactorsDao;
import com.cfc.cfcbackend.db.mappers.StationarycombustionfactorsMapper;
import com.cfc.cfcbackend.db.po.Stationarycombustionfactors;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class StationarycombustionfactorsDaoImpl implements StationarycombustionfactorsDao {

    @Resource
    private StationarycombustionfactorsMapper stationarycombustionfactorsMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(Stationarycombustionfactors record) {
        return 0;
    }

    @Override
    public int insertSelective(Stationarycombustionfactors record) {
        return 0;
    }

    @Override
    public Stationarycombustionfactors selectByPrimaryKey(int id) {
        return stationarycombustionfactorsMapper.selectByPrimaryKey(id);
    }

    @Override
    public Stationarycombustionfactors selectByFuelType(String fuelType) {
        return stationarycombustionfactorsMapper.selectByFuelType(fuelType);
    }

    @Override
    public int updateByPrimaryKeySelective(Stationarycombustionfactors record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Stationarycombustionfactors record) {
        return 0;
    }
}
