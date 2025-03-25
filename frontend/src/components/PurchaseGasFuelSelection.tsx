import React, { useState } from "react";
import PurchaseGasForm from "./PurchaseGasFuelForm";
import axios from "axios";

interface PurchaseGasFuelSelectionProps {
  title: string;
  description: React.ReactNode;
}

interface PurchaseGasSource {
  description: string;
  gas: string;
  amount: number;
  emissions?: number;
}

const gasOptions = [
  "Carbon dioxide",
  "Methane",
  "Nitrous oxide",
  "HFC-23",
  "HFC-32",
  "HFC-41",
  "HFC-125",
  "HFC-134",
  "HFC-134a",
  "HFC-143",
  "HFC-143a",
  "HFC-152",
  "HFC-152a",
  "HFC-161",
  "HFC-227ea",
  "HFC-236cb",
  "HFC-236ea",
  "HFC-236fa",
  "HFC-245ca",
  "HFC-245fa",
  "HFC-365mfc",
  "HFC-43-10mee",
  "Sulfur hexafluoride",
  "Nitrogen trifluoride",
  "PFC-14",
  "PFC-116",
  "PFC-218",
  "PFC-318",
  "PFC-31-10",
  "PFC-41-12",
  "PFC-51-14",
  "PFC-91-18",
];

const PurchaseGasFuelSelection: React.FC<PurchaseGasFuelSelectionProps> = ({
  title,
  description,
}) => {
  const [sources, setSources] = useState<PurchaseGasSource[]>([]);

  const handleAddSource = async (newSources: PurchaseGasSource[]) => {
    const updatedSources = await Promise.all(
      newSources.map(async (source) => {
        try {
          const response = await axios.get("http://localhost:8080/purchase-gas", {
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
              <th className="border p-2">Description</th>
              <th className="border p-2">Gas</th>
              <th className="border p-2">Amount (kg)</th>
              <th className="border p-2">CO₂ Emissions (kg)</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((src, idx) => (
              <tr key={idx}>
                <td className="border p-2">{src.description}</td>
                <td className="border p-2">{src.gas}</td>
                <td className="border p-2">{src.amount}</td>
                <td className="border p-2">{src.emissions?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-4">
        <PurchaseGasForm onAdd={handleAddSource} gasOptions={gasOptions} />
      </div>
    </div>
  );
};

export default PurchaseGasFuelSelection;
