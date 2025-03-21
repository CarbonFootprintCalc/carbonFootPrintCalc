import React, { useState } from "react";
import RefrigerationACFuelForm from "./RefrigerationACFuelForm";
import axios from "axios";

interface RefrigerationACFuelSelectionProps {
  title: string;
  description: string;
}

interface RefrigerationSource {
  gasType: string;
  newCharge: number;
  newCapacity: number;
  recharge: number;
  disposedCapacity: number;
  disposedRecovered: number;
  emissions?: number;
}

const gasOptions = ["HFC-23", "HFC-32", "CO2", "SF6"];

const RefrigerationACFuelSelection: React.FC<RefrigerationACFuelSelectionProps> = ({
  title,
  description,
}) => {
  const [sources, setSources] = useState<RefrigerationSource[]>([]);

  const handleAddSource = async (newSources: RefrigerationSource[]) => {
    const updatedSources = await Promise.all(
      newSources.map(async (source) => {
        try {
          const response = await axios.get("http://localhost:8080/refrigeration-ac", {
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
              <th className="border p-2">Charge (kg)</th>
              <th className="border p-2">Capacity (kg)</th>
              <th className="border p-2">Recharge (kg)</th>
              <th className="border p-2">Total Capacity (kg)</th>
              <th className="border p-2">Recovered (kg)</th>
              <th className="border p-2">CO₂ Emissions (kg)</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((src, idx) => (
              <tr key={idx}>
                <td className="border p-2">{src.gasType}</td>
                <td className="border p-2">{src.newCharge}</td>
                <td className="border p-2">{src.newCapacity}</td>
                <td className="border p-2">{src.recharge}</td>
                <td className="border p-2">{src.disposedCapacity}</td>
                <td className="border p-2">{src.disposedRecovered}</td>
                <td className="border p-2">{src.emissions?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-4">
        <RefrigerationACFuelForm onAdd={handleAddSource} gasOptions={gasOptions} />
      </div>
    </div>
  );
};

export default RefrigerationACFuelSelection;
