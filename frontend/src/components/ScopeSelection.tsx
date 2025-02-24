import React, { useState } from "react";
import AddSourceForm from "./AddSourceForm";

interface ScopeSectionProps {
  title: string;
  description: string;
}

//currently I have separated the emission factors into several different categories to make it easier for consumer
// i think many companies don't know how much "anthracite" they are consuming, but they may know how much coal they are consuming
// on the flip side you can get a more accurate reading if we do each individual fuel type -ryan
const fuelOptions: Record<string, string[]> = {
  "Fossil Fuels": ["Coal Fuels", "Natural Gas and Other Gaseous Fuels", "Petroleum-Based Fuels"],
  "Biomass and Biofuels": ["Solid Biomass Fuels", "Liquid Biomass Fuels", "Gaseous Biomass Fuels"],
  "Other Fuels - Solid": ["Municipal Solid Waste", "Petroleum Coke (Solid)", "Plastics", "Tires"],
  "Other Fuels - Gaseous": ["Blast Furnace Gas", "Coke Oven Gas", "Fuel Gas", "Propane Gas"],
  };

  // units need to be looked at, had trouble figuring out exactly what needs to go where
const unitOptions: Record<string, string[]> = {
  "Fossil Fuels": ["short tons", "MMBtu"],
  "Biomass and Biofuels": ["Short Tons", "mmBtu", "Gallons"],
  "Other Fuels - Solid": ["Short Tons", "mmBtu"],
  "Other Fuels - Gaseous": ["SCF", "Therm", "mmBtu"],
};

const ScopeSection: React.FC<ScopeSectionProps> = ({ title, description }) => {
  const [sources, setSources] = useState<
    { description: string; fuelType: string; quantity: string; unit: string }[]
  >([]);

  const handleAddSource = (source: {
    description: string;
    fuelType: string;
    quantity: string;
    unit: string;
  }) => {
    setSources((prev) => [...prev, source]);
  };


  return (
    <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-sm bg-white w-[900px] mx-auto">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {sources.length > 0 && (
        <ul className="mt-4 space-y-2">
          {sources.map((source, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded p-2 bg-gray-50"
            >
              <strong>{source.description}</strong> - {source.fuelType} -{" "}
              {source.quantity} {source.unit}
            </li>
          ))}
        </ul>
      )}
      <div className="w-full flex justify-center">
        <AddSourceForm onAdd={handleAddSource}
        fuelOptions={fuelOptions[title] ?? []}
        unitOptions={unitOptions[title] ?? []}
        />
      </div>
    </div>
  );
};

export default ScopeSection;
