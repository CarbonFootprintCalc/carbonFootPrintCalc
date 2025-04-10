package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BusinessTravelResults {
    private Integer id;

    private Integer userId;

    private String vehicleType;

    private Float traveledMiles;

    private Float co2EmissionKg;

    private Float ch4EmissionG;

    private Float n2oEmissionG;

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

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType == null ? null : vehicleType.trim();
    }

    public Float getTraveledMiles() {
        return traveledMiles;
    }

    public void setTraveledMiles(Float traveledMiles) {
        this.traveledMiles = traveledMiles;
    }

    public Float getCo2EmissionKg() {
        return co2EmissionKg;
    }

    public void setCo2EmissionKg(Float co2EmissionKg) {
        this.co2EmissionKg = co2EmissionKg;
    }

    public Float getCh4EmissionG() {
        return ch4EmissionG;
    }

    public void setCh4EmissionG(Float ch4EmissionG) {
        this.ch4EmissionG = ch4EmissionG;
    }

    public Float getN2oEmissionG() {
        return n2oEmissionG;
    }

    public void setN2oEmissionG(Float n2oEmissionG) {
        this.n2oEmissionG = n2oEmissionG;
    }
}