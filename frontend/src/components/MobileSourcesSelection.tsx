import React, { useState } from "react";
import AddSourceForm from "./MobileSourcesForm";
import axios from "axios";

interface ScopeSectionProps {
  title: string;
  description: React.ReactNode;
}

// fuel project
const mobileSourcesVehicleOptions: Record<string, string[]> = {
  "On-Road Vehicles": ["Passenger Cars", "Light-Duty Trucks", "Medium-Duty Trucks", "Heavy-Duty Trucks", "Buses", "Motorcycles"],
  "Equipment Vehicles": ["Agricultural Equipment", "Construction/Mining Equipment", "Lawn and Garden Equipment", "Airport Equipment", "Industrial/Commericial Equipment", "Logging Equipment", "Railroad Equipment", "Recreational Equipment"],
  "Other Vehicles": ["Ship/Boat", "Locomotive", "Aircraft"],
};

const mobileSourcesFuelOptions: Record<string, string[]> = {
  "On-Road Vehicles": ["Gasoline", "Diesel", "Methanol", "Ethanol", "CNG", "LPG", "LNG", "Biodiesel"],
  "Equipment Vehicles": ["Gasoline (2 stroke)", "Gasoline (4 stroke)", "Diesel Equipment", "Diesel Off-Road Trucks", "Diesel", "LPG", ""],
  "Other Vehicles": ["Residual Fuel Oil", "Gasoline (2 stroke)", "Gasoline (4 stroke", "Diesel", "Jet Fuel", "Aviation Gasoline"],
};

const unitOptions = ["Gallons", "Liters", "MMBtu"];

// data type
interface Source {
  description: string;
  vehicleType: string;
  fuelType: string;
  vehicleYear: number;
  fuelUsage: number;
  unit: string;
  emissions?: { CO2: number; CH4: number; N2O: number };
}

const MobileSourcesSelection: React.FC<ScopeSectionProps> = ({ title, description }) => {
  const [sources, setSources] = useState<Source[]>([]);

  const handleAddSource = async (newSources: Omit<Source, "emissions">[]) => {
    const updatedSources = await Promise.all(
      newSources.map(async (source) => {
        try {
          console.log("Sending to backend:", {
            vehicleType: source.vehicleType,
            fuelType: source.fuelType,
            vehicleYear: source.vehicleYear,
            fuelUsage: Number(source.fuelUsage),
            unit: source.unit,
          });

          const response = await axios.get("http://localhost:8080/scope1", {
            params: {
              vehicleType: source.vehicleType,
              fuelType: source.fuelType,
              vehicleYear: source.vehicleYear,
              fuelUsage: Number(source.fuelUsage),
              unit: source.unit,
            },
          });

          console.log("Response from backend:", response.data);
          return { ...source, emissions: response.data };
        } catch (error) {
          console.error("Error fetching emissions data:", error);
          return { ...source, emissions: { CO2: 0, CH4: 0, N2O: 0 } };
        }
      })
    );

    setSources((prev) => [...prev, ...updatedSources]);
  };

  return (
    <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-sm bg-white w-[900px] mx-auto">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {sources.length > 0 && (
        <table className="mt-4 w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Vehicle Type</th>
              <th className="border border-gray-300 p-2">Fuel Type</th>
              <th className="border border-gray-300 p-2">Vehicle Year</th>
              <th className="border border-gray-300 p-2">Fuel Usage</th>
              <th className="border border-gray-300 p-2">Unit</th>
              <th className="border border-gray-300 p-2">CO₂ (kg)</th>
              <th className="border border-gray-300 p-2">CH₄ (g)</th>
              <th className="border border-gray-300 p-2">N₂O (g)</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source, index) => (
              <tr key={index} className="border border-gray-300">
                       <td className="border border-gray-300 p-2">{source.description}</td>
                <td className="border border-gray-300 p-2">{source.vehicleType}</td>
                <td className="border border-gray-300 p-2">{source.fuelType}</td>
                <td className="border border-gray-300 p-2">{source.vehicleYear}</td>
                <td className="border border-gray-300 p-2">{source.fuelUsage}</td>
                <td className="border border-gray-300 p-2">{source.unit}</td>
                <td className="border border-gray-300 p-2">{source.emissions?.CO2?.toFixed(2) ?? "Calculating..."}</td>
                <td className="border border-gray-300 p-2">{source.emissions?.CH4?.toFixed(6) ?? "Calculating..."}</td>
                <td className="border border-gray-300 p-2">{source.emissions?.N2O?.toFixed(6) ?? "Calculating..."}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="w-full flex justify-center mt-4">
        <AddSourceForm
          onAdd={handleAddSource}
          vehicleOptions={mobileSourcesVehicleOptions[title] || []}
          fuelOptions={mobileSourcesFuelOptions[title] || []}
          unitOptions={unitOptions}
          disableYear={title === "Equipment Vehicles" || title === "Other Vehicles"}
        />
      </div>
    </div>
  );
};

export default MobileSourcesSelection;
