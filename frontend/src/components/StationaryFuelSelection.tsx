import React, { useState } from "react";
import AddSourceForm from "./StationaryFuelForm";
import axios from "axios";

interface ScopeSectionProps {
  title: string;
  description: string;
}

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
  "Natural Gas": ["Natural Gas"],
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
  "Miscellaneous Solid Fuels": [
    "Municipal Solid Waste",
    "Petroleum Coke (Solid)",
    "Plastics",
    "Tires",
    "Agricultural Byproducts",
    "Peat",
    "Solid Byproducts",
    "Wood and Wood Residuals",
    "North American Softwood",
    "North American Hardwood",
    "Bagasse",
    "Bamboo",
    "Straw",
  ],
  "Miscellaneous Liquid Fuels": [
    "Biodiesel (100%)",
    "Ethanol (100%)",
    "Rendered Animal Fat",
    "Vegetable Oil",
  ],
  "Miscellaneous Gaseous Fuels": [
    "Blast Furnace Gas",
    "Coke Oven Gas",
    "Fuel Gas",
    "Propane Gas",
    "Landfill Gas",
    "Other Biomass Gases",
  ],
};

const unitOptions: Record<string, string[]> = {
  "Natural Gas": ["Cubic Meters", "MCF", "MMBtu"],
  "Coal and Coke": ["Metric Tons", "Short Tons", "Kilograms", "MMBtu"],
  "Miscellaneous Solid Fuels": ["Metric Tons", "Short Tons", "Kilograms", "MMBtu"],
  "Petroleum Products": ["Gallons", "Liters", "Barrels", "MMBtu"],
  "Miscellaneous Liquid Fuels": ["Gallons", "Liters", "Barrels", "MMBtu"],
  "Miscellaneous Gaseous Fuels": ["Cubic Meters", "MCF", "MMBtu"],
};

interface Emissions {
  CO2: number;
  CH4: number;
  N2O: number;
  calculatedTotal: number;
  calculatedStationary: number;
}

interface Source {
  description: string;
  fuelType: string;
  quantity: string | number;
  unit: string;
  emissions?: Emissions;
}

const API_BASE = import.meta.env.VITE_API_URL;

const StationaryFuelSelection: React.FC<ScopeSectionProps> = ({ title, description }) => {
  const [sources, setSources] = useState<Source[]>([]);
  const [totalScope, setTotalScope] = useState(0);

  const handleAddSource = async (
    newSources: Omit<Source, "emissions">[]
  ) => {
    let totalCO2e = 0;
    let totalStationary = 0;
    const updated: Source[] = [];

    for (const source of newSources) {
      try {
        const quantity =
          typeof source.quantity === "string"
            ? Number(source.quantity) || 0
            : source.quantity;

        const response = await axios.get<Emissions>(
          `${API_BASE}/stationary-combustion`,
          {
            params: {
              quantity,
              fuelType: source.fuelType,
              unit: source.unit,
              totalCO2e,
              totalStationary,
              totalScope,
            },
          }
        );

        const {
          CO2,
          CH4,
          N2O,
          calculatedTotal,
          calculatedStationary,
        } = response.data;

        totalCO2e = calculatedTotal;
        totalStationary = calculatedStationary;
        setTotalScope((prev) => prev + CO2 + CH4 + N2O);

        updated.push({
          ...source,
          emissions: { CO2, CH4, N2O, calculatedTotal, calculatedStationary },
        });
      } catch (err) {
        console.error("Error fetching emissions data:", err);
        updated.push({
          ...source,
          emissions: {
            CO2: 0,
            CH4: 0,
            N2O: 0,
            calculatedTotal: totalCO2e,
            calculatedStationary: totalStationary,
          },
        });
      }
    }

    setSources((prev) => [...prev, ...updated]);

    localStorage.setItem(
      "stationaryFuelCalculations",
      JSON.stringify({ co2e: totalCO2e })
    );
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

export default StationaryFuelSelection;