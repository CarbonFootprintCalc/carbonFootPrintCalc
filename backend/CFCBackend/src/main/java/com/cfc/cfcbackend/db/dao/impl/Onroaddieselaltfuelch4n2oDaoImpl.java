package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.Onroaddieselaltfuelch4n2oDao;
import com.cfc.cfcbackend.db.mappers.Onroaddieselaltfuelch4n2oMapper;
import com.cfc.cfcbackend.db.po.Onroaddieselaltfuelch4n2o;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class Onroaddieselaltfuelch4n2oDaoImpl implements Onroaddieselaltfuelch4n2oDao {

    @Resource
    private Onroaddieselaltfuelch4n2oMapper onroaddieselaltfuelch4n2oMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(Onroaddieselaltfuelch4n2o record) {
        return 0;
    }

    @Override
    public int insertSelective(Onroaddieselaltfuelch4n2o record) {
        return 0;
    }

    @Override
    public Onroaddieselaltfuelch4n2o selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public Onroaddieselaltfuelch4n2o selectByTypeNFuelNYear(String vehicle_type, String fuel_type, String model_year) {
        return onroaddieselaltfuelch4n2oMapper.selectByTypeNFuelNYear(vehicle_type, fuel_type, model_year);
    }

    @Override
    public Onroaddieselaltfuelch4n2o selectByTypeNFuel(String vehicle_type, String fuel_type) {
        return onroaddieselaltfuelch4n2oMapper.selectByTypeNFuel(vehicle_type, fuel_type);
    }

    @Override
    public int updateByPrimaryKeySelective(Onroaddieselaltfuelch4n2o record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Onroaddieselaltfuelch4n2o record) {
        return 0;
    }
}
