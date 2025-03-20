package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.MobileCombustionCO2Dao;
import com.cfc.cfcbackend.db.dao.NonRoadCH4N2ODao;
import com.cfc.cfcbackend.db.dao.OnRoadDieselAltFuelCH4N2ODao;
import com.cfc.cfcbackend.db.dao.OnRoadGasolineCH4N2ODao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MobileSourcesService {
    @Resource
    private MobileCombustionCO2Dao mobilecombustionco2Dao;

    @Resource
    private OnRoadGasolineCH4N2ODao onroadgasolinech4n2oDao;

    @Resource
    private OnRoadDieselAltFuelCH4N2ODao onroaddieselaltfuelch4n2oDao;

    @Resource
    private NonRoadCH4N2ODao nonroadch4n2oDao;

    public double emissionCO2(String fuelType, double fuelUsage) {
        if (fuelType.equals("Ethanol")) {
            return fuelUsage * mobilecombustionco2Dao.selectByFuelType("Motor Gasoline").getCo2FactorKgco2PerUnit() * 0.2;
        } else if (fuelType.equals("Biodiesel")) {
            return fuelUsage * mobilecombustionco2Dao.selectByFuelType("Diesel Fuel").getCo2FactorKgco2PerUnit() * 0.8;
        }
        return fuelUsage * mobilecombustionco2Dao.selectByFuelType(fuelType).getCo2FactorKgco2PerUnit();
    }

    public double emissionOnRoadGasCH4(String vehicleType, String modelYear, int mileage) {
        return mileage * onroadgasolinech4n2oDao.selectByTypeNYear(vehicleType, modelYear).getCh4FactorGch4PerMile();
    }

    public double emissionOnRoadGasN2O(String vehicleType, String modelYear, int mileage) {
        return mileage * onroadgasolinech4n2oDao.selectByTypeNYear(vehicleType, modelYear).getN2oFactorGc2oPerMile();
    }

    public double emissionOnRoadNonGasCH4(String fuelType, String vehicleType, String modelYear, int mileage) {
        if (fuelType.equals("Diesel")) {
            return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuelNYear(vehicleType,fuelType, modelYear).getCh4FactorGch4PerMile();
        }
        return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuel(vehicleType, fuelType).getCh4FactorGch4PerMile();
    }

    public double emissionOnRoadNonGasN2O(String fuelType, String vehicleType, String modelYear, int mileage) {
        if (fuelType.equals("Diesel")) {
            return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuelNYear(vehicleType,fuelType, modelYear).getN2oFactorGn2oPerMile();
        }
        return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuel(vehicleType, fuelType).getN2oFactorGn2oPerMile();
    }

    public double emissionNonRoadCH4(String fuelType, String vehicleType, double fuelUsage) {
        return fuelUsage * nonroadch4n2oDao.selectByTypeNFuel(vehicleType, fuelType).getCh4FactorGch4PerGallon();
    }

    public double emissionNonRoadN2O(String fuelType, String vehicleType, double fuelUsage) {
        return fuelUsage * nonroadch4n2oDao.selectByTypeNFuel(vehicleType, fuelType).getN2oFactorGn2oPerGallon();
    }
}
