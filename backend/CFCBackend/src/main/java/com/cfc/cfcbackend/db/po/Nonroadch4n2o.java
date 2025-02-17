package com.cfc.cfcbackend.db.po;

public class Nonroadch4n2o {
    private Integer id;

    private Integer mobileCombustionId;

    private String vehicleType;

    private String fuelType;

    private Float ch4FactorGch4PerGallon;

    private Float n2oFactorGn2oPerGallon;

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

    public Float getCh4FactorGch4PerGallon() {
        return ch4FactorGch4PerGallon;
    }

    public void setCh4FactorGch4PerGallon(Float ch4FactorGch4PerGallon) {
        this.ch4FactorGch4PerGallon = ch4FactorGch4PerGallon;
    }

    public Float getN2oFactorGn2oPerGallon() {
        return n2oFactorGn2oPerGallon;
    }

    public void setN2oFactorGn2oPerGallon(Float n2oFactorGn2oPerGallon) {
        this.n2oFactorGn2oPerGallon = n2oFactorGn2oPerGallon;
    }
}