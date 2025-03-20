package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Firesuppressionresults;

public interface FiresuppressionresultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Firesuppressionresults record);

    int insertSelective(Firesuppressionresults record);

    Firesuppressionresults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Firesuppressionresults record);

    int updateByPrimaryKey(Firesuppressionresults record);
}