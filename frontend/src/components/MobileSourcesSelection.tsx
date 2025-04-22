import React, { useState } from "react";
import MobileSourcesForm from "./MobileSourcesForm";
import axios from "axios";
import { updateFinalReportSection } from "./localStroage";

interface MobileSourcesSelectionProps {
  title: string;
  description: React.ReactNode;
}

interface MobileSource {
  description: string;
  vehicleType: string;
  fuelType: string;
  modelYear: number;
  fuelUsage: number;
  unit: string;
  mileage: number;
  emissions?: {
    CO2: number;
    CH4: number;
    N2O: number;
  };
}

const vehicleOptionsMap: Record<string, string[]> = {
  "On-Road Vehicles": [
    "Passenger Cars",
    "Light-Duty Trucks",
    "Medium-Duty Trucks",
    "Heavy-Duty Trucks",
    "Buses",
    "Motorcycles",
  ],
  "Equipment Vehicles": [
    "Agricultural Equipment",
    "Construction/Mining Equipment",
    "Lawn and Garden Equipment",
    "Airport Equipment",
    "Industrial/Commercial Equipment",
    "Logging Equipment",
    "Railroad Equipment",
    "Recreational Equipment",
  ],
  "Other Vehicles": ["Ships and Boats", "Locomotives", "Aircraft"],
};

const fuelOptionsMap: Record<string, string[]> = {
  "On-Road Vehicles": [
    "Gasoline",
    "Diesel",
    "Methanol",
    "Ethanol",
    "CNG",
    "LPG",
    "LNG",
    "Biodiesel",
  ],
  "Equipment Vehicles": [
    "Gasoline (2 stroke)",
    "Gasoline (4 stroke)",
    "Diesel Equipment",
    "Diesel Off-Road Trucks",
    "Diesel",
    "LPG",
  ],
  "Other Vehicles": [
    "Residual Fuel Oil",
    "Gasoline (2 stroke)",
    "Gasoline (4 stroke)",
    "Diesel",
    "Jet Fuel",
    "Aviation Gasoline",
  ],
};

const unitOptions = ["Gallons", "Liters", "MMBtu"];

const isOnRoadVehicle = (vehicleType: string): boolean =>
  vehicleOptionsMap["On-Road Vehicles"].includes(vehicleType);

const MobileSourcesSelection: React.FC<MobileSourcesSelectionProps> = ({
  title,
  description,
}) => {
  const [sources, setSources] = useState<MobileSource[]>([]);

  const handleAddSource = async (
    newSources: Omit<MobileSource, "emissions">[],
    totals: { totalCO2e: number; totalMobile: number; totalScope: number }
  ) => {
    let totalCO2e = 0;
    let totalMobile = 0;
    let totalScope = 0;
    const updatedSources = await Promise.all(
      newSources.map(async (src) => {
        const onRoad = isOnRoadVehicle(src.vehicleType);

        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/mobile-sources`,
            {
              params: {
                fuelType: src.fuelType,
                fuelUsage: src.fuelUsage,
                vehicleType: src.vehicleType,
                modelYear: String(src.modelYear),
                mileage: src.mileage,
                onRoad: onRoad,
                totalCO2e: totals.totalCO2e,
                totalMobile: totals.totalMobile,
                totalScope: totals.totalScope,
              },
            }
          );
          const { CO2 = 0, CH4 = 0, N2O = 0 } = response.data;
          totalCO2e += CO2 + CH4 + N2O;
          
          return { ...src, emissions: response.data };
        } catch (err) {
          console.error("Emission fetch failed:", err);
          return { ...src, emissions: { CO2: 0, CH4: 0, N2O: 0 } };
        }
      })
    );

    setSources((prev) => [...prev, ...updatedSources]);
    updateFinalReportSection("mobileSources", { co2e: totalCO2e });
  };

  return (
    <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white w-[1200px] mx-auto">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {sources.length > 0 && (
        <table className="mt-4 w-full border-collapse text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Description</th>
              <th className="border p-2">Vehicle</th>
              <th className="border p-2">Fuel</th>
              {sources.some((s) => isOnRoadVehicle(s.vehicleType)) && (
                <th className="border p-2">Model Year</th>
              )}
              <th className="border p-2">Fuel Usage</th>
              <th className="border p-2">Unit</th>
              <th className="border p-2">Mileage</th>
              <th className="border p-2">CO₂ (kg)</th>
              <th className="border p-2">CH₄ (g)</th>
              <th className="border p-2">N₂O (g)</th>
            </tr>
          </thead>

          <tbody>
            {sources.map((src, i) => {
              const isOnRoad = isOnRoadVehicle(src.vehicleType);

              return (
                <tr key={i}>
                  <td className="border p-2">{src.description}</td>
                  <td className="border p-2">{src.vehicleType}</td>
                  <td className="border p-2">{src.fuelType}</td>
                  {isOnRoad && <td className="border p-2">{src.modelYear}</td>}
                  <td className="border p-2">{src.fuelUsage}</td>
                  <td className="border p-2">{src.unit}</td>
                  <td className="border p-2">{src.mileage}</td>
                  <td className="border p-2">
                    {src.emissions?.CO2?.toFixed(2)}
                  </td>
                  <td className="border p-2">
                    {src.emissions?.CH4?.toFixed(6)}
                  </td>
                  <td className="border p-2">
                    {src.emissions?.N2O?.toFixed(6)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <div className="mt-4">
        <MobileSourcesForm
          onAdd={handleAddSource}
          vehicleOptions={vehicleOptionsMap[title] || []}
          fuelOptions={fuelOptionsMap[title] || []}
          unitOptions={unitOptions}
          disableYear={
            title === "Equipment Vehicles" || title === "Other Vehicles"
          }
        />
      </div>
    </div>
  );
};

export default MobileSourcesSelection;
