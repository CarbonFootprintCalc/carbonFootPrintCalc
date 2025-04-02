package com.cfc.cfcbackend.service;

import com.cfc.cfcbackend.db.dao.UnitConversionsDao;
import com.cfc.cfcbackend.db.po.UnitConversions;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UnitConversionService {

    @Resource
    private UnitConversionsDao unitConversionsDao;

    /*
     * Convert one unit to the other
     * Parameter:
     *     from: convert from this unit
     *     to: convert to this unit
     */
    public double unitConversion(String from, String to, double quantity) {
        UnitConversions unitConversion = unitConversionsDao.selectByUnits(from, to);
        return quantity * unitConversion.getMultiplyBy();
    }
}
