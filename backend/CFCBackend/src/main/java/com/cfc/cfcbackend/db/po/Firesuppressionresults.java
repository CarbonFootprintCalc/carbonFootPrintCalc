package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Firesuppressionresults {
    private Integer id;

    private Integer userId;

    private String suppressantType;

    private Float co2EquivalentEmissionsLb;

    private Float co2EquivalentEmissionsTons;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getSuppressantType() {
        return suppressantType;
    }

    public void setSuppressantType(String suppressantType) {
        this.suppressantType = suppressantType == null ? null : suppressantType.trim();
    }

    public Float getCo2EquivalentEmissionsLb() {
        return co2EquivalentEmissionsLb;
    }

    public void setCo2EquivalentEmissionsLb(Float co2EquivalentEmissionsLb) {
        this.co2EquivalentEmissionsLb = co2EquivalentEmissionsLb;
    }

    public Float getCo2EquivalentEmissionsTons() {
        return co2EquivalentEmissionsTons;
    }

    public void setCo2EquivalentEmissionsTons(Float co2EquivalentEmissionsTons) {
        this.co2EquivalentEmissionsTons = co2EquivalentEmissionsTons;
    }
}