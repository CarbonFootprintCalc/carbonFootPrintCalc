package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Electricity {
    private Integer id;

    private Integer factorId;

    private String egridSubregionAcronym;

    private String egridSubregionName;

    private Float totalCo2FactorLbPerMwh;

    private Float totalCh4FactorLbPerMwh;

    private Float totalN2oFactorLbPerMwh;

    private Float nonBaseloadCo2FactorLbPerMwh;

    private Float nonBaseloadCh4FactorLbPerMwh;

    private Float nonBaseloadN2oFactorLbPerMwh;

    private Float gridGrossLossPercentage;

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

    public String getEgridSubregionAcronym() {
        return egridSubregionAcronym;
    }

    public void setEgridSubregionAcronym(String egridSubregionAcronym) {
        this.egridSubregionAcronym = egridSubregionAcronym == null ? null : egridSubregionAcronym.trim();
    }

    public String getEgridSubregionName() {
        return egridSubregionName;
    }

    public void setEgridSubregionName(String egridSubregionName) {
        this.egridSubregionName = egridSubregionName == null ? null : egridSubregionName.trim();
    }

    public Float getTotalCo2FactorLbPerMwh() {
        return totalCo2FactorLbPerMwh;
    }

    public void setTotalCo2FactorLbPerMwh(Float totalCo2FactorLbPerMwh) {
        this.totalCo2FactorLbPerMwh = totalCo2FactorLbPerMwh;
    }

    public Float getTotalCh4FactorLbPerMwh() {
        return totalCh4FactorLbPerMwh;
    }

    public void setTotalCh4FactorLbPerMwh(Float totalCh4FactorLbPerMwh) {
        this.totalCh4FactorLbPerMwh = totalCh4FactorLbPerMwh;
    }

    public Float getTotalN2oFactorLbPerMwh() {
        return totalN2oFactorLbPerMwh;
    }

    public void setTotalN2oFactorLbPerMwh(Float totalN2oFactorLbPerMwh) {
        this.totalN2oFactorLbPerMwh = totalN2oFactorLbPerMwh;
    }

    public Float getNonBaseloadCo2FactorLbPerMwh() {
        return nonBaseloadCo2FactorLbPerMwh;
    }

    public void setNonBaseloadCo2FactorLbPerMwh(Float nonBaseloadCo2FactorLbPerMwh) {
        this.nonBaseloadCo2FactorLbPerMwh = nonBaseloadCo2FactorLbPerMwh;
    }

    public Float getNonBaseloadCh4FactorLbPerMwh() {
        return nonBaseloadCh4FactorLbPerMwh;
    }

    public void setNonBaseloadCh4FactorLbPerMwh(Float nonBaseloadCh4FactorLbPerMwh) {
        this.nonBaseloadCh4FactorLbPerMwh = nonBaseloadCh4FactorLbPerMwh;
    }

    public Float getNonBaseloadN2oFactorLbPerMwh() {
        return nonBaseloadN2oFactorLbPerMwh;
    }

    public void setNonBaseloadN2oFactorLbPerMwh(Float nonBaseloadN2oFactorLbPerMwh) {
        this.nonBaseloadN2oFactorLbPerMwh = nonBaseloadN2oFactorLbPerMwh;
    }

    public Float getGridGrossLossPercentage() {
        return gridGrossLossPercentage;
    }

    public void setGridGrossLossPercentage(Float gridGrossLossPercentage) {
        this.gridGrossLossPercentage = gridGrossLossPercentage;
    }
}