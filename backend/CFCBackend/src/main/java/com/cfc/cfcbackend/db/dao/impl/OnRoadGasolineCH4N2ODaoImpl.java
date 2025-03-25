package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.OnRoadGasolineCH4N2ODao;
import com.cfc.cfcbackend.db.mappers.OnRoadGasolineCH4N2OMapper;
import com.cfc.cfcbackend.db.po.OnRoadGasolineCH4N2O;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class OnRoadGasolineCH4N2ODaoImpl implements OnRoadGasolineCH4N2ODao {

    @Resource
    private OnRoadGasolineCH4N2OMapper onroadgasolinech4n2oMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(OnRoadGasolineCH4N2O record) {
        return 0;
    }

    @Override
    public int insertSelective(OnRoadGasolineCH4N2O record) {
        return 0;
    }

    @Override
    public OnRoadGasolineCH4N2O selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public OnRoadGasolineCH4N2O selectByTypeNYear(String vehicleType, String modelYear) {
        return onroadgasolinech4n2oMapper.selectByTypeNYear(vehicleType, modelYear);
    }

    @Override
    public int updateByPrimaryKeySelective(OnRoadGasolineCH4N2O record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(OnRoadGasolineCH4N2O record) {
        return 0;
    }
}
