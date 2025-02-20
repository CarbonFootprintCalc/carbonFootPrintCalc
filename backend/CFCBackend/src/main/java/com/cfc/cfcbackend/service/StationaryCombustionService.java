package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.StationarycombustionfactorsDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class StationaryCombustionService {
    double NATURAL_GAS_CO2_FACTOR = 0.05444;
    @Resource
    private StationarycombustionfactorsDao stationarycombustionfactorsDao;

    public double CO2PerUnit(double quantity, int factorId) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCo2FactorKgco2PerUnit();
    }
    public double CH4PerUnit(double quantity, int factorId) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCh4FactorGch4PerUnit();
    }
    public double N2OPerUnit(double quantity, int factorId) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getN2oFactorGn2oPerUnit();
    }
    public double CO2PerMMBtu(double quantity, int factorId) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCo2FactorKgco2PerMmbtu();
    }
    public double CH4PerMMBtu(double quantity, int factorId) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getCh4FactorGch4PerMmbtu();
    }
    public double N2OPerMMBtu(double quantity, int factorId) {
        return quantity * stationarycombustionfactorsDao.selectByPrimaryKey(factorId).getN2oFactorGn2oPerMmbtu();
    }

    public double CO2PerUnit(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByFactorName(factorName).getCo2FactorKgco2PerUnit();
    }
    public double CH4PerUnit(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByFactorName(factorName).getCh4FactorGch4PerUnit();
    }
    public double N2OPerUnit(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByFactorName(factorName).getN2oFactorGn2oPerUnit();
    }
    public double CO2PerMMBtu(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByFactorName(factorName).getCo2FactorKgco2PerMmbtu();
    }
    public double CH4PerMMBtu(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByFactorName(factorName).getCh4FactorGch4PerMmbtu();
    }
    public double N2OPerMMBtu(double quantity, String factorName) {
        return quantity * stationarycombustionfactorsDao.selectByFactorName(factorName).getN2oFactorGn2oPerMmbtu();
    }
}
