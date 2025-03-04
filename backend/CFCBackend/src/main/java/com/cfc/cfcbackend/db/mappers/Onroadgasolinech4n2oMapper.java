package com.cfc.cfcbackend.db.mappers;

import com.cfc.cfcbackend.db.po.Onroadgasolinech4n2o;

public interface Onroadgasolinech4n2oMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Onroadgasolinech4n2o record);

    int insertSelective(Onroadgasolinech4n2o record);

    Onroadgasolinech4n2o selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Onroadgasolinech4n2o record);

    int updateByPrimaryKey(Onroadgasolinech4n2o record);
}