package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.OnRoadDieselAltFuelCH4N2ODao;
import com.cfc.cfcbackend.db.mappers.OnRoadDieselAltFuelCH4N2OMapper;
import com.cfc.cfcbackend.db.po.OnRoadDieselAltFuelCH4N2O;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class OnRoadDieselAltFuelCH4N2ODaoImpl implements OnRoadDieselAltFuelCH4N2ODao {

    @Resource
    private OnRoadDieselAltFuelCH4N2OMapper onroaddieselaltfuelch4n2oMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(OnRoadDieselAltFuelCH4N2O record) {
        return 0;
    }

    @Override
    public int insertSelective(OnRoadDieselAltFuelCH4N2O record) {
        return 0;
    }

    @Override
    public OnRoadDieselAltFuelCH4N2O selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public OnRoadDieselAltFuelCH4N2O selectByTypeNFuelNYear(String vehicleType, String fuelType, String modelYear) {
        return onroaddieselaltfuelch4n2oMapper.selectByTypeNFuelNYear(vehicleType, fuelType, modelYear);
    }

    @Override
    public OnRoadDieselAltFuelCH4N2O selectByTypeNFuel(String vehicleType, String fuelType) {
        return onroaddieselaltfuelch4n2oMapper.selectByTypeNFuel(vehicleType, fuelType);
    }

    @Override
    public int updateByPrimaryKeySelective(OnRoadDieselAltFuelCH4N2O record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(OnRoadDieselAltFuelCH4N2O record) {
        return 0;
    }
}
