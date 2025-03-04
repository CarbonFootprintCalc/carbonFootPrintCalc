package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Nonroadch4n2o;

public interface Nonroadch4n2oMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Nonroadch4n2o record);

    int insertSelective(Nonroadch4n2o record);

    Nonroadch4n2o selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Nonroadch4n2o record);

    int updateByPrimaryKey(Nonroadch4n2o record);
}