package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.RefrigerationACResults;

public interface RefrigerationACResultsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(RefrigerationACResults record);

    int insertSelective(RefrigerationACResults record);

    RefrigerationACResults selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(RefrigerationACResults record);

    int updateByPrimaryKey(RefrigerationACResults record);
}