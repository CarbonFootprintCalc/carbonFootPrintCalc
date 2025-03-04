package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Cfcusers;

public interface CfcusersMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(Cfcusers record);

    int insertSelective(Cfcusers record);

    Cfcusers selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(Cfcusers record);

    int updateByPrimaryKey(Cfcusers record);
}