import React, { useState } from "react";
import axios from "axios";
import ElectricityFuelForm from "./ElectricityFuelForm";

interface ElectricityFuelSelectionProps {
  title: string;
  description: React.ReactNode;
}

interface ElectricitySource {
  description: string;
  egridSubregion: string;
  electricityPurchased: number;
  co2?: number;
  ch4?: number;
  n2o?: number;
}

const egridOptions = [
  "AKGD",
  "AKMS",
  "AZNM",
  "CAMX",
  "ERCT",
  "FRCC",
  "HIMS",
  "HIOA",
  "MROE",
  "MROW",
  "NEWE",
  "NWPP",
  "NYCW",
  "NYLI",
  "NYUP",
  "PRMS",
  "RFCE",
  "RFCM",
  "RFCW",
  "RMPA",
  "SPNO",
  "SPSO",
  "SRMV",
  "SRMW",
  "SRSO",
  "SRTV",
  "SRVC",
  "US Average"
];

const ElectricityFuelSelection: React.FC<ElectricityFuelSelectionProps> = ({
  title,
  description,
}) => {
  const [sources, setSources] = useState<ElectricitySource[]>([]);
  const [useMarketBased, setUseMarketBased] = useState<null | boolean>(null);

  const handleAddSource = async (newSources: ElectricitySource[]) => {
    const updated = await Promise.all(
      newSources.map(async (source) => {
        try {
          const res = await axios.get("http://localhost:8080/electricity", {
            params: source,
          });

          return {
            ...source,
            co2: res.data.co2,
            ch4: res.data.ch4,
            n2o: res.data.n2o,
          };
        } catch (err) {
          console.error("Fetch error:", err);
          return { ...source, co2: 0, ch4: 0, n2o: 0 };
        }
      })
    );

    setSources((prev) => [...prev, ...updated]);
  };

  return (
    <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white w-[1400px] mx-auto">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-center">
        <img
          src="/egrid-subregion-map.png"
          alt="eGRID Subregion Map"
          className="mt-4 rounded shadow-lg w-full max-w-3xl z-0"
        />
      </div>
      {useMarketBased === null ? (
      <div className="mt-6 w-full max-w-xl mx-auto p-6 bg-white border border-gray-300 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 text-center">
        Market-Based Emission Factor
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
        Do you know what a <span className="font-medium">market-based emission factor</span> is? If yes, we’ll use that for your electricity emissions. If not, we’ll default to location-based data.
      </p>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => setUseMarketBased(true)}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md shadow-md transition"
        >
          Yes, I do
        </button>
        <button
          onClick={() => setUseMarketBased(false)}
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium rounded-md shadow-md transition"
        >
          No, use default
        </button>
      </div>
    </div>
    
      ) : (
        <>
          {sources.length > 0 && (
            <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Description</th>
                  <th className="border p-2">eGRID Subregion</th>
                  <th className="border p-2">Electricity Purchased (MWh)</th>
                  <th className="border p-2">CO₂ (kg)</th>
                  <th className="border p-2">CH₄ (kg)</th>
                  <th className="border p-2">N₂O (kg)</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((s, i) => (
                  <tr key={i}>
                    <td className="border p-2">{s.description}</td>
                    <td className="border p-2">{s.egridSubregion}</td>
                    <td className="border p-2">{s.electricityPurchased}</td>
                    <td className="border p-2">{s.co2?.toFixed(2)}</td>
                    <td className="border p-2">{s.ch4?.toFixed(6)}</td>
                    <td className="border p-2">{s.n2o?.toFixed(6)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}

          <div className="mt-10 z-20 relative">
            <ElectricityFuelForm
              onAdd={handleAddSource}
              egridOptions={egridOptions}
              useMarketBased={useMarketBased}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ElectricityFuelSelection;