package com.cfc.cfcbackend.service;

import org.springframework.stereotype.Service;

@Service
public class ModelYearConversionService {
    // Convert year from int to string for passenger car
    public String getPassengerCarYear(int modelYear) {
        return getYearRange(modelYear, new String[][]{
                {"1973", "1974"}, {"1976", "1977"}, {"1978", "1979"}, {"1984", "1993"}
        }, modelYear > 2024 ? "2024" : Integer.toString(modelYear));
    }

    // Convert year from int to string for Light Duty Truck
    public String getLightDutyTruckYear(int modelYear) {
        return getYearRange(modelYear, new String[][]{
                {"1973", "1974"}, {"1977", "1978"}, {"1979", "1980"}, {"1987", "1993"}
        }, modelYear > 2024 ? "2024" : Integer.toString(modelYear));
    }

    // Convert year from int to string for Heavy Duty Vehicle
    public String getHeavyDutyVehicleYear(int modelYear) {
        return getYearRange(modelYear, new String[][]{
                {"0", "1980", "≤1980"}, {"1981", "1984"}, {"1985", "1986"}, {"1988", "1989"}, {"1990", "1995"}
        }, modelYear > 2024 ? "2024" : Integer.toString(modelYear));
    }

    // Convert year from int to string for Motorcycle
    public String getMotorcycleYear(int modelYear) {
        if (modelYear >= 1960 && modelYear <= 1995) return "1960-1995";
        if (modelYear <= 2005) return "1996-2005";
        return "2006-2024";
    }

    /**
     * Determines the appropriate model year range label for a given vehicle year.
     *
     * @param modelYear   The model year of the vehicle.
     * @param ranges      A 2D array where each row represents a year range:
     *                    - First two elements (String) define the start and end of the range.
     *                    - Optional third element (String) is a custom label for the range (e.g., "≤1980").
     * @param defaultYear The default label to return if no range matches.
     * @return The formatted year range string or the default year if no match is found.
     */
    public String getYearRange(int modelYear, String[][] ranges, String defaultYear) {
        for (String[] range : ranges) {
            int start = Integer.parseInt(range[0]);
            int end = Integer.parseInt(range[1]);
            String label = (range.length == 3) ? range[2] : (start + "-" + end);

            if (modelYear >= start && modelYear <= end) return label;
        }
        return defaultYear;
    }

    /**
     * Categorizes a given model year into a predefined range.
     *
     * @param modelYear      The model year to be categorized.
     * @param firstCutoff    The upper limit of the first category.
     * @param secondCutoff   The upper limit of the second category.
     * @return A string representing the appropriate year range.
     */
    public String getYearCategory(int modelYear, int firstCutoff, int secondCutoff) {
        if (modelYear <= firstCutoff) return "1960-" + firstCutoff;
        if (modelYear <= secondCutoff) return (firstCutoff + 1) + "-" + secondCutoff;
        return "2007-2024";
    }
}
