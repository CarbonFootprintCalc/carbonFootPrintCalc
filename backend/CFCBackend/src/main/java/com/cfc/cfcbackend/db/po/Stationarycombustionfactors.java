package com.cfc.cfcbackend.db.po;

public class Stationarycombustionfactors {
    private Integer id;

    private Integer factorId;

    private String fuelType;

    private Float co2FactorKgco2PerMmbtu;

    private Float ch4FactorGch4PerMmbtu;

    private Float n2oFactorGn2oPerMmbtu;

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

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType == null ? null : fuelType.trim();
    }

    public Float getCo2FactorKgco2PerMmbtu() {
        return co2FactorKgco2PerMmbtu;
    }

    public void setCo2FactorKgco2PerMmbtu(Float co2FactorKgco2PerMmbtu) {
        this.co2FactorKgco2PerMmbtu = co2FactorKgco2PerMmbtu;
    }

    public Float getCh4FactorGch4PerMmbtu() {
        return ch4FactorGch4PerMmbtu;
    }

    public void setCh4FactorGch4PerMmbtu(Float ch4FactorGch4PerMmbtu) {
        this.ch4FactorGch4PerMmbtu = ch4FactorGch4PerMmbtu;
    }

    public Float getN2oFactorGn2oPerMmbtu() {
        return n2oFactorGn2oPerMmbtu;
    }

    public void setN2oFactorGn2oPerMmbtu(Float n2oFactorGn2oPerMmbtu) {
        this.n2oFactorGn2oPerMmbtu = n2oFactorGn2oPerMmbtu;
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