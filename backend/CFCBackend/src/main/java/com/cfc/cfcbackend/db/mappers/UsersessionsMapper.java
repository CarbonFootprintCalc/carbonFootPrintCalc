package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Usersessions;

public interface UsersessionsMapper {
    int deleteByPrimaryKey(Integer sessionId);

    int insert(Usersessions record);

    int insertSelective(Usersessions record);

    Usersessions selectByPrimaryKey(Integer sessionId);

    int updateByPrimaryKeySelective(Usersessions record);

    int updateByPrimaryKey(Usersessions record);
}