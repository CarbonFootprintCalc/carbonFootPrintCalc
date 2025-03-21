package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.CFCUsers;

public interface CFCUsersMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(CFCUsers record);

    int insertSelective(CFCUsers record);

    CFCUsers selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(CFCUsers record);

    int updateByPrimaryKey(CFCUsers record);
}