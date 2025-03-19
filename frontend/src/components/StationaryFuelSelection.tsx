import React, { useState } from "react";
import AddSourceForm from "./StationaryFuelForm";
import axios from "axios";

interface ScopeSectionProps {
  title: string;
  description: string;
}

// fuel project
const fuelOptions: Record<string, string[]> = {
  "Coal and Coke": [
    "Anthracite",
    "Bituminous",
    "Sub-bituminous",
    "Lignite",
    "Mixed (Commercial Sector)",
    "Mixed (Electric Power Sector)",
    "Mixed (Industrial Coking)",
    "Mixed (Industrial Sector)",
    "Coal Coke",
  ],
  "Other Fuels - Solid": [
    "Municipal Solid Waste",
    "Petroleum Coke (Solid)",
    "Plastics",
    "Tires",
  ],
  "Biomass Fuels - Solid": [
    "Agricultural Byproducts",
    "Peat",
    "Solid Byproducts",
    "Wood and Wood Residuals",
  ],
  "Natural Gas": ["Natural Gas"],
  "Other Fuels - Gaseous": [
    "Blast Furnace Gas",
    "Coke Oven Gas",
    "Fuel Gas",
    "Propane Gas",
  ],
  "Biomass Fuels - Gaseous": ["Landfill Gas", "Other Biomass Gases"],
  "Petroleum Products": [
    "Asphalt and Road Oil",
    "Aviation Gasoline",
    "Butane",
    "Butylene",
    "Crude Oil",
    "Distillate Fuel Oil No. 1",
    "Distillate Fuel Oil No. 2",
    "Distillate Fuel Oil No. 4",
    "Ethane",
    "Ethylene",
    "Heavy Gas Oils",
    "Isobutane",
    "Isobutylene",
    "Kerosene",
    "Kerosene-Type Jet Fuel",
    "Liquefied Petroleum Gases (LPG)",
    "Lubricants",
    "Motor Gasoline",
    "Naphtha (<401 deg F)",
    "Natural Gasoline",
    "Other Oil (>401 deg F)",
    "Pentanes Plus",
    "Petrochemical Feedstocks",
    "Propane",
    "Propylene",
    "Residual Fuel Oil No. 5",
    "Residual Fuel Oil No. 6",
    "Special Naphtha",
    "Unfinished Oils",
    "Used Oil",
  ],
  "Biomass Fuels - Liquid": [
    "Biodiesel (100%)",
    "Ethanol (100%)",
    "Rendered Animal Fat",
    "Vegetable Oil",
  ],
  "Biomass Fuels - Kraft Pulping Liquor, by Wood Furnish": [
    "North American Softwood",
    "North American Hardwood",
    "Bagasse",
    "Bamboo",
    "Straw",
  ],
};

const unitOptions: Record<string, string[]> = {
  "Coal and Coke": ["Short Tons", "MMBtu"],
  "Other Fuels - Solid": ["Short Tons", "MMBtu"],
  "Biomass Fuels - Solid": ["Short Tons", "MMBtu"],
  "Natural Gas": ["SCF", "Therm", "MMBtu"],
  "Other Fuels - Gaseous": ["SCF", "Therm", "MMBtu"],
  "Biomass Fuels - Gaseous": ["SCF", "Therm", "MMBtu"],
  "Petroleum Products": ["Gallons", "MMBtu"],
  "Biomass Fuels - Liquid": ["Gallons", "MMBtu"],
  "Biomass Fuels - Kraft Pulping Liquor, by Wood Furnish": ["Gallons", "MMBtu"],
};

// data type
interface Source {
  description: string;
  fuelType: string;
  quantity: number;
  unit: string;
  emissions?: { CO2: number; CH4: number; N2O: number };
}

const StationaryFuelSelection: React.FC<ScopeSectionProps> = ({ title, description }) => {
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
              <th className="border border-gray-300 p-2">CH₄ (g)</th>
              <th className="border border-gray-300 p-2">N₂O (g)</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">
                  {source.description}
                </td>
                <td className="border border-gray-300 p-2">
                  {source.fuelType}
                </td>
                <td className="border border-gray-300 p-2">
                  {source.quantity}
                </td>
                <td className="border border-gray-300 p-2">{source.unit}</td>
                <td className="border border-gray-300 p-2">
                  {source.emissions?.CO2?.toFixed(2) ?? "Calculating..."}
                </td>
                <td className="border border-gray-300 p-2">
                  {source.emissions?.CH4?.toFixed(6) ?? "Calculating..."}
                </td>
                <td className="border border-gray-300 p-2">
                  {source.emissions?.N2O?.toFixed(6) ?? "Calculating..."}
                </td>
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

export default StationaryFuelSelection;
