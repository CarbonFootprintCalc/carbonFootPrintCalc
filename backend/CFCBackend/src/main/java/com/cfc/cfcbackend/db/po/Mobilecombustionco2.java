package com.cfc.cfcbackend.db.po;

public class Mobilecombustionco2 {
    private Integer id;

    private Integer mobileCombustionId;

    private String fuelType;

    private Float co2FactorKgco2PerUnit;

    private String unit;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMobileCombustionId() {
        return mobileCombustionId;
    }

    public void setMobileCombustionId(Integer mobileCombustionId) {
        this.mobileCombustionId = mobileCombustionId;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType == null ? null : fuelType.trim();
    }

    public Float getCo2FactorKgco2PerUnit() {
        return co2FactorKgco2PerUnit;
    }

    public void setCo2FactorKgco2PerUnit(Float co2FactorKgco2PerUnit) {
        this.co2FactorKgco2PerUnit = co2FactorKgco2PerUnit;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit == null ? null : unit.trim();
    }
}