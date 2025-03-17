package com.cfc.cfcbackend.db.po;

public class Onroaddieselaltfuelch4n2o {
    private Integer id;

    private Integer mobileCombustionId;

    private String vehicleType;

    private String fuelType;

    private String modelYear;

    private Float ch4FactorGch4PerMile;

    private Float n2oFactorGn2oPerMile;

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

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType == null ? null : vehicleType.trim();
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType == null ? null : fuelType.trim();
    }

    public String getModelYear() {
        return modelYear;
    }

    public void setModelYear(String modelYear) {
        this.modelYear = modelYear == null ? null : modelYear.trim();
    }

    public Float getCh4FactorGch4PerMile() {
        return ch4FactorGch4PerMile;
    }

    public void setCh4FactorGch4PerMile(Float ch4FactorGch4PerMile) {
        this.ch4FactorGch4PerMile = ch4FactorGch4PerMile;
    }

    public Float getN2oFactorGn2oPerMile() {
        return n2oFactorGn2oPerMile;
    }

    public void setN2oFactorGn2oPerMile(Float n2oFactorGn2oPerMile) {
        this.n2oFactorGn2oPerMile = n2oFactorGn2oPerMile;
    }
}