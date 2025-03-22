package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.GWPDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class FireSuppressionService {
    
    @Resource
    private GWPDao gwpDao;

    /*
     * Calculate fire suppression CO2 emissions using the material balance method.
     * 
     * The parameters refer to as follows:
     *      gas: The type of gas, used to grab its GWP for calculations
     *      inventoryChange: The change in the amount of gas stored in the inventory
     *      transferredAmount: The change in the amount of gas purchased and stored or disposed
     *      capacityChange: The change in the capacity of all units
     */
    public double fireSuppEmissions(String gas, double inventoryChange, double transferredAmount, double capacityChange) {

        return Math.max(gwpDao.selectByGasType(gas).getGwp100Year() * (inventoryChange + transferredAmount + capacityChange), 0);
    }
}
