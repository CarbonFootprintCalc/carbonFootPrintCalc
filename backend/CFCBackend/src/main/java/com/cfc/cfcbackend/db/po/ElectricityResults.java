package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ElectricityResults {
    private Integer id;

    private Integer userId;

    private String egridSubregionAcronym;

    private Float electricityUsedMwh;

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

    public String getEgridSubregionAcronym() {
        return egridSubregionAcronym;
    }

    public void setEgridSubregionAcronym(String egridSubregionAcronym) {
        this.egridSubregionAcronym = egridSubregionAcronym == null ? null : egridSubregionAcronym.trim();
    }

    public Float getElectricityUsedMwh() {
        return electricityUsedMwh;
    }

    public void setElectricityUsedMwh(Float electricityUsedMwh) {
        this.electricityUsedMwh = electricityUsedMwh;
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