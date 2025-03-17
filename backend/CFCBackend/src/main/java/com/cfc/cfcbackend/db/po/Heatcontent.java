package com.cfc.cfcbackend.db.po;

public class Heatcontent {
    private Integer id;

    private String fuelType;

    private String convertFrom;

    private String convertTo;

    private Float multiplyBy;

    private String units;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType == null ? null : fuelType.trim();
    }

    public String getConvertFrom() {
        return convertFrom;
    }

    public void setConvertFrom(String convertFrom) {
        this.convertFrom = convertFrom == null ? null : convertFrom.trim();
    }

    public String getConvertTo() {
        return convertTo;
    }

    public void setConvertTo(String convertTo) {
        this.convertTo = convertTo == null ? null : convertTo.trim();
    }

    public Float getMultiplyBy() {
        return multiplyBy;
    }

    public void setMultiplyBy(Float multiplyBy) {
        this.multiplyBy = multiplyBy;
    }

    public String getUnits() {
        return units;
    }

    public void setUnits(String units) {
        this.units = units == null ? null : units.trim();
    }
}