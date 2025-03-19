package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Refrigerationacresults {
    private Integer id;

    private Integer userId;

    private String refrigerantType;

    private Float co2EquivalentEmissionsKg;

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

    public String getRefrigerantType() {
        return refrigerantType;
    }

    public void setRefrigerantType(String refrigerantType) {
        this.refrigerantType = refrigerantType == null ? null : refrigerantType.trim();
    }

    public Float getCo2EquivalentEmissionsKg() {
        return co2EquivalentEmissionsKg;
    }

    public void setCo2EquivalentEmissionsKg(Float co2EquivalentEmissionsKg) {
        this.co2EquivalentEmissionsKg = co2EquivalentEmissionsKg;
    }

    public Float getCo2EquivalentEmissionsTons() {
        return co2EquivalentEmissionsTons;
    }

    public void setCo2EquivalentEmissionsTons(Float co2EquivalentEmissionsTons) {
        this.co2EquivalentEmissionsTons = co2EquivalentEmissionsTons;
    }
}