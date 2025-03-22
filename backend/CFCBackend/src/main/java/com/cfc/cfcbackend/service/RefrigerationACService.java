package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.GWPDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class RefrigerationACService {
    
    @Resource
    private GWPDao gwpDao;

    /*
     * Calculate CO2 emissions for refrigeration and AC sources
     * This specifically uses the simplified material balance method
     * 
     * The parameters refer to as follows:
     *      gasType: The type of gas, used to grab its GWP for calculations
     *      newCharge: Newly acquired gas as a result of installing new unit sources
     *      newCapacity: The total full gas capacity of the new units
     *      recharge: Newly acquired gas as a result of replenishing existing units
     *      disposedCapacity: The total full gas capacity of disposed units
     *      disposedRecovered: Recovered gases as a result of disposing units
     */
    public double CO2EqEmissions(String gasType, double newCharge, double newCapacity, 
                                 double recharge, double disposedCapacity, double disposedRecovered) {
        return Math.max(gwpDao.selectByGasType(gasType).getGwp100Year() * 
            ((newCharge - newCapacity) + recharge + (disposedCapacity - disposedRecovered)), 0);
    }
}
