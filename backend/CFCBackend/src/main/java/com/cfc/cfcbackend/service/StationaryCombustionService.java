package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.StationarycombustionfactorsDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class StationaryCombustionService {

    @Resource
    private StationarycombustionfactorsDao stationarycombustionfactorsDao;

//    public double CO2PerUnit(double quantity, int factorId) {
//        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCo2unit();
//    }
//    public double CH4PerUnit(double quantity, int factorId) {
//        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCh4unit();
//    }
//    public double N2OPerUnit(double quantity, int factorId) {
//        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getN2ounit();
//    }
//    public double CO2PerMMBtu(double quantity, int factorId) {
//        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCo2mmbtu();
//    }
//    public double CH4PerMMBtu(double quantity, int factorId) {
//        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCh4mmbtu();
//    }
//    public double N2OPerMMBtu(double quantity, int factorId) {
//        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getN2ounit();
//    }

    public double CO2PerUnit(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorName).getCo2unit();
    }
    public double CH4PerUnit(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorName).getCh4unit();
    }
    public double N2OPerUnit(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorName).getN2ounit();
    }
    public double CO2PerMMBtu(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorName).getCo2mmbtu();
    }
    public double CH4PerMMBtu(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorName).getCh4mmbtu();
    }
    public double N2OPerMMBtu(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorName).getN2ounit();
    }
}
