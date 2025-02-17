package com.cfc.cfcbackend.db.po;

public class Unitconversions {
    private Integer id;

    private String category;

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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category == null ? null : category.trim();
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