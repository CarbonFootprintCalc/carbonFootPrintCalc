import React, { useState } from "react";
import FireSuppressionFuelForm from "./FireSuppressionFuelForm";
import axios from "axios";

interface FireSuppressionFuelSelectionProps {
  title: string;
  description: React.ReactNode;
}

interface FireSuppressionSource {
  gas: string;
  inventoryChange: number;
  transferredAmount: number;
  capacityChange: number;
  emissions?: number;
}

const gasOptions = [
  "Carbon dioxide",
  "HFC-23",
  "HFC-125",
  "HFC-134a",
  "HFC-227ea",
  "HFC-236fa",
  "PFC-14",
  "PFC-31-10",
];

const FireSuppressionFuelSelection: React.FC<FireSuppressionFuelSelectionProps> = ({
  title,
  description,
}) => {
  const [sources, setSources] = useState<FireSuppressionSource[]>([]);

  const handleAddSource = async (newSources: FireSuppressionSource[]) => {
    const updatedSources = await Promise.all(
      newSources.map(async (source) => {
        try {
          const response = await axios.get("http://localhost:8080/fire-suppression", {
            params: source,
          });

          return { ...source, emissions: response.data };
        } catch (error) {
          console.error("Error fetching emissions data:", error);
          return { ...source, emissions: 0 };
        }
      })
    );

    setSources((prev) => [...prev, ...updatedSources]);
  };

  return (
    <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white w-[1200px] mx-auto">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {sources.length > 0 && (
        <table className="mt-4 w-full border-collapse text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Gas</th>
              <th className="border p-2">Inventory Change (kg)</th>
              <th className="border p-2">Transferred Amount (kg)</th>
              <th className="border p-2">Capacity Change (kg)</th>
              <th className="border p-2">CO₂ Emissions (kg)</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((src, idx) => (
              <tr key={idx}>
                <td className="border p-2">{src.gas}</td>
                <td className="border p-2">{src.inventoryChange}</td>
                <td className="border p-2">{src.transferredAmount}</td>
                <td className="border p-2">{src.capacityChange}</td>
                <td className="border p-2">{src.emissions?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-4">
        <FireSuppressionFuelForm onAdd={handleAddSource} gasOptions={gasOptions} />
      </div>
    </div>
  );
};

export default FireSuppressionFuelSelection;
