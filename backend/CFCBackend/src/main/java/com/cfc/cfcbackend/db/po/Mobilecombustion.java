package com.cfc.cfcbackend.db.po;

public class Mobilecombustion {
    private Integer mobileCombustionId;

    private Integer factorId;

    private String subCategory;

    public Integer getMobileCombustionId() {
        return mobileCombustionId;
    }

    public void setMobileCombustionId(Integer mobileCombustionId) {
        this.mobileCombustionId = mobileCombustionId;
    }

    public Integer getFactorId() {
        return factorId;
    }

    public void setFactorId(Integer factorId) {
        this.factorId = factorId;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory == null ? null : subCategory.trim();
    }
}