package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Refrigerationacresults;

public interface RefrigerationacresultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Refrigerationacresults record);

    int insertSelective(Refrigerationacresults record);

    Refrigerationacresults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Refrigerationacresults record);

    int updateByPrimaryKey(Refrigerationacresults record);
}