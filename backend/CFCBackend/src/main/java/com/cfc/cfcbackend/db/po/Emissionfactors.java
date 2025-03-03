package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Emissionfactors {
    private Integer id;

    private String factor;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFactor() {
        return factor;
    }

    public void setFactor(String factor) {
        this.factor = factor == null ? null : factor.trim();
    }
}