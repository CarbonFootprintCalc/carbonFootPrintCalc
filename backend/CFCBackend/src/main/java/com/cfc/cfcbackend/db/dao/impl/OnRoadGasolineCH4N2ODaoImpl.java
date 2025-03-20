package com.cfc.cfcbackend.db.dao.impl;

import com.cfc.cfcbackend.db.dao.OnRoadGasolineCH4N2ODao;
import com.cfc.cfcbackend.db.mappers.Onroadgasolinech4n2oMapper;
import com.cfc.cfcbackend.db.po.Onroadgasolinech4n2o;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class OnRoadGasolineCH4N2ODaoImpl implements OnRoadGasolineCH4N2ODao {

    @Resource
    private Onroadgasolinech4n2oMapper onroadgasolinech4n2oMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(Onroadgasolinech4n2o record) {
        return 0;
    }

    @Override
    public int insertSelective(Onroadgasolinech4n2o record) {
        return 0;
    }

    @Override
    public Onroadgasolinech4n2o selectByPrimaryKey(Integer id) {
        return null;
    }

    @Override
    public Onroadgasolinech4n2o selectByTypeNYear(String vehicleType, String modelYear) {
        return onroadgasolinech4n2oMapper.selectByTypeNYear(vehicleType, modelYear);
    }

    @Override
    public int updateByPrimaryKeySelective(Onroadgasolinech4n2o record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(Onroadgasolinech4n2o record) {
        return 0;
    }
}
