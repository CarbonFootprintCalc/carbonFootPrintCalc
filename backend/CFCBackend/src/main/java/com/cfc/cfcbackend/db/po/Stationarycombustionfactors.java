package com.cfc.cfcbackend.db.po;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Stationarycombustionfactors {
    private String fueltype;

    private Float co2mmbtu;

    private Float ch4mmbtu;

    private Float n2ommbtu;

    private Float co2unit;

    private Float ch4unit;

    private Float n2ounit;

    public String getFueltype() {
        return fueltype;
    }

    public void setFueltype(String fueltype) {
        this.fueltype = fueltype == null ? null : fueltype.trim();
    }

    public Float getCo2mmbtu() {
        return co2mmbtu;
    }

    public void setCo2mmbtu(Float co2mmbtu) {
        this.co2mmbtu = co2mmbtu;
    }

    public Float getCh4mmbtu() {
        return ch4mmbtu;
    }

    public void setCh4mmbtu(Float ch4mmbtu) {
        this.ch4mmbtu = ch4mmbtu;
    }

    public Float getN2ommbtu() {
        return n2ommbtu;
    }

    public void setN2ommbtu(Float n2ommbtu) {
        this.n2ommbtu = n2ommbtu;
    }

    public Float getCo2unit() {
        return co2unit;
    }

    public void setCo2unit(Float co2unit) {
        this.co2unit = co2unit;
    }

    public Float getCh4unit() {
        return ch4unit;
    }

    public void setCh4unit(Float ch4unit) {
        this.ch4unit = ch4unit;
    }

    public Float getN2ounit() {
        return n2ounit;
    }

    public void setN2ounit(Float n2ounit) {
        this.n2ounit = n2ounit;
    }
}