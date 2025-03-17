package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.Mobilecombustionco2Dao;
import com.cfc.cfcbackend.db.dao.Nonroadch4n2oDao;
import com.cfc.cfcbackend.db.dao.Onroaddieselaltfuelch4n2oDao;
import com.cfc.cfcbackend.db.dao.Onroadgasolinech4n2oDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MobileSourcesService {
    @Resource
    private Mobilecombustionco2Dao mobilecombustionco2Dao;

    @Resource
    private Onroadgasolinech4n2oDao onroadgasolinech4n2oDao;

    @Resource
    private Onroaddieselaltfuelch4n2oDao onroaddieselaltfuelch4n2oDao;

    @Resource
    private Nonroadch4n2oDao nonroadch4n2oDao;

    public double emissionCO2(String fuel_type, double fuelUsage) {
        if (fuel_type.equals("Ethanol")) {
            return fuelUsage * mobilecombustionco2Dao.selectByFuelType("Motor Gasoline").getCo2FactorKgco2PerUnit() * 0.2;
        } else if (fuel_type.equals("Biodiesel")) {
            return fuelUsage * mobilecombustionco2Dao.selectByFuelType("Diesel Fuel").getCo2FactorKgco2PerUnit() * 0.8;
        }
        return fuelUsage * mobilecombustionco2Dao.selectByFuelType(fuel_type).getCo2FactorKgco2PerUnit();
    }

    public double emissionOnRoadGasCH4(String vehicle_type, String model_year, int mileage) {
        return mileage * onroadgasolinech4n2oDao.selectByTypeNYear(vehicle_type, model_year).getCh4FactorGch4PerMile();
    }

    public double emissionOnRoadGasN2O(String vehicle_type, String model_year, int mileage) {
        return mileage * onroadgasolinech4n2oDao.selectByTypeNYear(vehicle_type, model_year).getN2oFactorGc2oPerMile();
    }

    public double emissionOnRoadNonGasCH4(String fuel_type, String vehicle_type, String model_year, int mileage) {
        if (fuel_type.equals("Diesel")) {
            return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuelNYear(vehicle_type,fuel_type, model_year).getCh4FactorGch4PerMile();
        }
        return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuel(vehicle_type, fuel_type).getCh4FactorGch4PerMile();
    }

    public double emissionOnRoadNonGasN2O(String fuel_type, String vehicle_type, String model_year, int mileage) {
        if (fuel_type.equals("Diesel")) {
            return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuelNYear(vehicle_type,fuel_type, model_year).getN2oFactorGn2oPerMile();
        }
        return mileage * onroaddieselaltfuelch4n2oDao.selectByTypeNFuel(vehicle_type, fuel_type).getN2oFactorGn2oPerMile();
    }

    public double emissionNonRoadCH4(String fuel_type, String vehicle_type, double fuelUsage) {
        return fuelUsage * nonroadch4n2oDao.selectByTypeNFuel(vehicle_type, fuel_type).getCh4FactorGch4PerGallon();
    }

    public double emissionNonRoadN2O(String fuel_type, String vehicle_type, double fuelUsage) {
        return fuelUsage * nonroadch4n2oDao.selectByTypeNFuel(vehicle_type, fuel_type).getN2oFactorGn2oPerGallon();
    }
}
