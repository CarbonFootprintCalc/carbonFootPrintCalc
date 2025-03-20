package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Gwp {
    private Integer id;

    private String gasName;

    private Float gwp100Year;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGasName() {
        return gasName;
    }

    public void setGasName(String gasName) {
        this.gasName = gasName == null ? null : gasName.trim();
    }

    public Float getGwp100Year() {
        return gwp100Year;
    }

    public void setGwp100Year(Float gwp100Year) {
        this.gwp100Year = gwp100Year;
    }
}