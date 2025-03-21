package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.UserSessions;

public interface UserSessionsMapper {
    int deleteByPrimaryKey(Integer sessionId);

    int insert(UserSessions record);

    int insertSelective(UserSessions record);

    UserSessions selectByPrimaryKey(Integer sessionId);

    int updateByPrimaryKeySelective(UserSessions record);

    int updateByPrimaryKey(UserSessions record);
}