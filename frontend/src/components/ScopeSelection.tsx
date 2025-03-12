import React, { useState } from "react";
import AddSourceForm from "./AddSourceForm";
import axios from "axios";

interface ScopeSectionProps {
  title: string;
  description: string;
}

// fuel project
const fuelOptions: Record<string, string[]> = {
  "Fossil Fuels": ["Coal Fuels", "Natural Gas and Other Gaseous Fuels", "Petroleum-Based Fuels"],
  "Biomass and Biofuels": ["Solid Biomass Fuels", "Liquid Biomass Fuels", "Gaseous Biomass Fuels"],
  "Other Fuels - Solid": ["Municipal Solid Waste", "Petroleum Coke (Solid)", "Plastics", "Tires"],
  "Other Fuels - Gaseous": ["Blast Furnace Gas", "Coke Oven Gas", "Fuel Gas", "Propane Gas", "Natural Gas"],
};

// fuels unit
const unitOptions: Record<string, string[]> = {
  "Fossil Fuels": ["Short Tons", "MMBtu"],
  "Biomass and Biofuels": ["Short Tons", "mmBtu", "Gallons"],
  "Other Fuels - Solid": ["Short Tons", "mmBtu"],
  "Other Fuels - Gaseous": ["SCF", "Therm", "mmBtu"],
};

// data type 
interface Source {
  description: string;
  fuelType: string;
  quantity: number;
  unit: string;
  emissions?: { CO2: number; CH4: number; N2O: number };
}

const ScopeSection: React.FC<ScopeSectionProps> = ({ title, description }) => {
  const [sources, setSources] = useState<Source[]>([]);


  const handleAddSource = async (newSources: Omit<Source, "emissions">[]) => {
    const updatedSources = await Promise.all(
      newSources.map(async (source) => {
        try {
          console.log("Sending to backend:", {
            quantity: Number(source.quantity), 
            fuelType: source.fuelType,
            unit: source.unit,
          });
  
          const response = await axios.get("http://localhost:8080/scope1", {
            params: {
              quantity: Number(source.quantity), 
              fuelType: source.fuelType,
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
              <th className="border border-gray-300 p-2">Fuel Type</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Unit</th>
              <th className="border border-gray-300 p-2">CO₂ (kg)</th>
              <th className="border border-gray-300 p-2">CH₄ (kg)</th>
              <th className="border border-gray-300 p-2">N₂O (kg)</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{source.description}</td>
                <td className="border border-gray-300 p-2">{source.fuelType}</td>
                <td className="border border-gray-300 p-2">{source.quantity}</td>
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
          fuelOptions={fuelOptions[title] ?? []}
          unitOptions={unitOptions[title] ?? []}
        />
      </div>
    </div>
  );
};

export default ScopeSection;
