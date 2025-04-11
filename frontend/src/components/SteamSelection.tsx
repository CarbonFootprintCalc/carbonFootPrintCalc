import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import SteamForm from "./SteamForm";

interface SteamSelectionProps {
  title: string;
  description: React.ReactNode;
}

interface SteamSource {
  description: string;
  steamPurchased: number;
  fuelType: string;
  boilerEfficiency: number;

  //location and market based emission factors
  Lco2?: number;
  Lch4?: number;
  Ln2o?: number;
  Mco2?: number;
  Mch4?: number;
  Mn2o?: number;

  // final calculations
  co2?: number;
  ch4?: number;
  n2o?: number;
}

const fuelTypeOptions = [
    "Natural Gas",
    "Distillate Fuel Oil No. 2",
    "Residual Fuel Oil No. 6",
    "Kerosene",
    "Liquefied Petroleum Gases (LPG)",
    "Anthracite Coal",
    "Bituminous Coal",
    "Sub-bituminous Coal",
    "Lignite Coal",
    "Mixed (Electric Power Sector)",
    "Coal Coke",
    "Wood and Wood Residuals",
    "Landfill Gas",
];

const SteamSelection: React.FC<SteamSelectionProps> = ({
  title,
  description,
}) => {
  const [sources, setSources] = useState<SteamSource[]>([]);
  const [useAlternateMethod, setUseAlternateMethod] = useState<null | boolean>(null);

  const handleAddSource = async (newSources: SteamSource[]) => {
    const updated = await Promise.all(
      newSources.map(async (source) => {
        try {
          const res = await axios.get("http://localhost:8080/steam", {
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
    <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white max-w-7xl mx-auto">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-gray-600">{description}</div>
      {useAlternateMethod === null ? (
        <div className="mt-6 w-full max-w-xl mx-auto p-6 bg-white border border-gray-300 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 text-center">
            Preferred vs Alternative Method
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Select the <strong>Preferred Method</strong> if supplier-specific emission factors are available.
            <br /> Select the <strong>Alternative Method</strong> if supplier emission factors are unavailable and boiler efficiency must be used instead.
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setUseAlternateMethod(false)}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md shadow-md transition"
            >
              Preferred Method
            </button>
            <button
              onClick={() => setUseAlternateMethod(true)}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium rounded-md shadow-md transition"
            >
              Alternative Method
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setUseAlternateMethod(null)}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <span className="  text-white-600 mr-2">←</span>
              Back to selection
            </button>
          </div>
          {sources.length > 0 && (
            <div className="overflow-x-auto">
              <table className="mt-4 w-full border-collapse text-center">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Steam Purchased</th>
                    <th className="border p-2">Boiler Efficiency (%)</th>
                    <th className="border p-2">CO₂ (kg)</th>
                    <th className="border p-2">CH₄ (kg)</th>
                    <th className="border p-2">N₂O (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {sources.map((s, i) => (
                    <tr key={i}>
                      <td className="border p-2">{s.description}</td>
                      <td className="border p-2">{s.steamPurchased}</td>
                      <td className="border p-2">{s.boilerEfficiency}%</td>
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
            <SteamForm
              onAdd={handleAddSource}
              fuelTypeOptions={fuelTypeOptions}
              useAlternateMethod={useAlternateMethod}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SteamSelection;
