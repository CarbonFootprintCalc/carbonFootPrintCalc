package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Mobilecombustionco2;

public interface Mobilecombustionco2Mapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Mobilecombustionco2 record);

    int insertSelective(Mobilecombustionco2 record);

    Mobilecombustionco2 selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Mobilecombustionco2 record);

    int updateByPrimaryKey(Mobilecombustionco2 record);
}