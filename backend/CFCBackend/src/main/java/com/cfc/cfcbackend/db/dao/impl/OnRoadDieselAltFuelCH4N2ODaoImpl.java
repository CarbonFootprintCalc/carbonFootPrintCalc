package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.OnRoadDieselAltFuelCH4N2ODao;
import com.cfc.cfcbackend.db.mappers.Onroaddieselaltfuelch4n2oMapper;
import com.cfc.cfcbackend.db.po.Onroaddieselaltfuelch4n2o;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class OnRoadDieselAltFuelCH4N2ODaoImpl implements OnRoadDieselAltFuelCH4N2ODao {

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
    public Onroaddieselaltfuelch4n2o selectByTypeNFuelNYear(String vehicleType, String fuelType, String modelYear) {
        return onroaddieselaltfuelch4n2oMapper.selectByTypeNFuelNYear(vehicleType, fuelType, modelYear);
    }

    @Override
    public Onroaddieselaltfuelch4n2o selectByTypeNFuel(String vehicleType, String fuelType) {
        return onroaddieselaltfuelch4n2oMapper.selectByTypeNFuel(vehicleType, fuelType);
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
