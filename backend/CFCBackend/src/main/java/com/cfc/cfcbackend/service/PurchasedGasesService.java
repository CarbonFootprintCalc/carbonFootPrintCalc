package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.GWPDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class PurchasedGasesService {
    
    @Resource
    private GWPDao gwpDao;

    /*
     * Calculate the emissions from puchased gases that were combusted onsite
     * 
     * The calculation is the GWP multiplied by the amount used
     */
    public double purchGasEmissions(String gas, double amount) {

        return Math.max(gwpDao.selectByGasType(gas).getGwp100Year() * amount, 0);
    }
}
