package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BusinessTravel {
    private Integer id;

    private Integer factorId;

    private String vehicleType;

    private Float co2FactorKgco2PerUnit;

    private Float ch4FactorGch4PerUnit;

    private Float n2oFactorGn2oPerUnit;

    private String unit;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFactorId() {
        return factorId;
    }

    public void setFactorId(Integer factorId) {
        this.factorId = factorId;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType == null ? null : vehicleType.trim();
    }

    public Float getCo2FactorKgco2PerUnit() {
        return co2FactorKgco2PerUnit;
    }

    public void setCo2FactorKgco2PerUnit(Float co2FactorKgco2PerUnit) {
        this.co2FactorKgco2PerUnit = co2FactorKgco2PerUnit;
    }

    public Float getCh4FactorGch4PerUnit() {
        return ch4FactorGch4PerUnit;
    }

    public void setCh4FactorGch4PerUnit(Float ch4FactorGch4PerUnit) {
        this.ch4FactorGch4PerUnit = ch4FactorGch4PerUnit;
    }

    public Float getN2oFactorGn2oPerUnit() {
        return n2oFactorGn2oPerUnit;
    }

    public void setN2oFactorGn2oPerUnit(Float n2oFactorGn2oPerUnit) {
        this.n2oFactorGn2oPerUnit = n2oFactorGn2oPerUnit;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit == null ? null : unit.trim();
    }
}