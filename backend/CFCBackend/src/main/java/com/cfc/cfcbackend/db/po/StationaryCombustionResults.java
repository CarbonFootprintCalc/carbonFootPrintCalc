package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class StationaryCombustionResults {
    private Integer id;

    private Integer userId;

    private String fuelType;

    private Float energyConsumed;

    private String unit;

    private Float emissionCo2Kg;

    private Float emissionCh4G;

    private Float emissionN2oG;

    private Float totalEmissionTonsCo2e;

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

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType == null ? null : fuelType.trim();
    }

    public Float getEnergyConsumed() {
        return energyConsumed;
    }

    public void setEnergyConsumed(Float energyConsumed) {
        this.energyConsumed = energyConsumed;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit == null ? null : unit.trim();
    }

    public Float getEmissionCo2Kg() {
        return emissionCo2Kg;
    }

    public void setEmissionCo2Kg(Float emissionCo2Kg) {
        this.emissionCo2Kg = emissionCo2Kg;
    }

    public Float getEmissionCh4G() {
        return emissionCh4G;
    }

    public void setEmissionCh4G(Float emissionCh4G) {
        this.emissionCh4G = emissionCh4G;
    }

    public Float getEmissionN2oG() {
        return emissionN2oG;
    }

    public void setEmissionN2oG(Float emissionN2oG) {
        this.emissionN2oG = emissionN2oG;
    }

    public Float getTotalEmissionTonsCo2e() {
        return totalEmissionTonsCo2e;
    }

    public void setTotalEmissionTonsCo2e(Float totalEmissionTonsCo2e) {
        this.totalEmissionTonsCo2e = totalEmissionTonsCo2e;
    }
}