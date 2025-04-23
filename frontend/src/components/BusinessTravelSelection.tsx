import React, { useState } from "react";
import axios from "axios";
import BusinessTravelForm from "./BusinessTravelForm";
import { getFinalReport, updateFinalLocationEmissions, updateFinalMarketEmissions, updateFinalReportSection } from "./localStroage";

interface ScopeSectionProps {
  title: string;
  description: string;
}

interface TravelSource {
  description: string;
  vehicleType: string;
  miles: number;
  emissions?: { CO2: number; CH4: number; N2O: number };
}

const vehicleOptionsMap: Record<string, string[]> = {
  "Ground Travel": [
    "Passenger Car",
    "Light-Duty Truck",
    "Motorcycle"
  ],
  "Public Transit": [
    "Intercity Rail - Northeast Corridor",
    "Intercity Rail - Other Routes",
    "Intercity Rail - National Average",
    "Commuter Rail",
    "Transit Rail",
    "Bus"
  ],
  "Air Travel": [
    "Air Travel - Short Haul (< 300 miles)",
    "Air Travel - Medium Haul (>= 300 miles, < 2300 miles)",
    "Air Travel - Long Haul (>= 2300 miles)"
  ]
};

// 字段标签配置
const unitLabelMap: Record<string, string> = {
  "Ground Travel": "Vehicle-Miles (miles)",
  "Public Transit": "Passenger-Miles (miles)",
  "Air Travel": "Passenger-Miles (miles)"
};

const vehicleLabelMap: Record<string, string> = {
  "Ground Travel": "Vehicle Type",
  "Public Transit": "Vehicle Type",
  "Air Travel": "Flight Length"
};

const BusinessTravelSelection: React.FC<ScopeSectionProps> = ({
  title,
  description,
}) => {
  const [sources, setSources] = useState<TravelSource[]>([]);

  const handleAddTravel = async (
    newTravels: { description: string; vehicleType: string; miles: string | number }[]
  ) => {
    const processedTravels = newTravels.map(travel => ({
      ...travel,
      miles: typeof travel.miles === 'string' ? Number(travel.miles) || 0 : travel.miles,
    }));
  
    const report = getFinalReport();
    const totalCO2e = Object.values(report).reduce((acc, entry) => acc + (entry?.co2e || 0), 0);
    const totalBusiTra = report.businessTravel?.co2e || 0;
    const totalScope = report.scope3Summary?.co2e || 0;
  
    let latestBusinessTravel = 0;
    let latestScope3 = 0;
  
    const updatedSources = await Promise.all(
      processedTravels.map(async (travel) => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/business-travel`, {
            params: {
              vehicleType: travel.vehicleType,
              miles: travel.miles,
              totalCO2e,
              totalBusiTra,
              totalScope,
            },
          });
  
          const {
            CO2,
            CH4,
            N2O,
            calculatedBusiTra,
            calculatedScope3,
          } = response.data;
  
          latestBusinessTravel = calculatedBusiTra;
          latestScope3 = calculatedScope3;
  
          return {
            ...travel,
            emissions: { CO2, CH4, N2O },
          };
        } catch (error) {
          console.error("Error fetching emissions:", error);
          return {
            ...travel,
            emissions: { CO2: 0, CH4: 0, N2O: 0 },
          };
        }
      })
    );
  
    updateFinalReportSection("businessTravel", { co2e: latestBusinessTravel });
    updateFinalReportSection("scope3Summary", { co2e: latestScope3 });
    updateFinalLocationEmissions();
    updateFinalMarketEmissions(); 
  
    setSources((prev) => [...prev, ...updatedSources]);
  };
  

  const vehicleOptions = vehicleOptionsMap[title] ?? [];
  const unitLabel = unitLabelMap[title] ?? "Miles";
  const vehicleLabel = vehicleLabelMap[title] ?? "Vehicle Type";

  return (
    <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-sm bg-white w-[900px] mx-auto">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {sources.length > 0 && (
        <table className="mt-4 w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Description</th>
              <th className="border p-2">{vehicleLabel}</th>
              <th className="border p-2">{unitLabel}</th>
              <th className="border p-2">CO₂ (kg)</th>
              <th className="border p-2">CH₄ (g)</th>
              <th className="border p-2">N₂O (g)</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((s, i) => (
              <tr key={i} className="border">
                <td className="border p-2">{s.description}</td>
                <td className="border p-2">{s.vehicleType}</td>
                <td className="border p-2">{s.miles}</td>
                <td className="border p-2">{s.emissions?.CO2?.toFixed(2) ?? "..."}</td>
                <td className="border p-2">{s.emissions?.CH4?.toFixed(6) ?? "..."}</td>
                <td className="border p-2">{s.emissions?.N2O?.toFixed(6) ?? "..."}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="w-full flex justify-center mt-4">
        <BusinessTravelForm
          onAdd={handleAddTravel}
          vehicleOptions={vehicleOptions}
          unitLabel={unitLabel}
          vehicleLabel={vehicleLabel}
        />
      </div>
    </div>
  );
};

export default BusinessTravelSelection;
