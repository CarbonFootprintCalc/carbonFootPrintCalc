import React, { useState } from "react";
import axios from "axios";
import SteamForm from "./SteamForm";
import { updateFinalReportSection, updateScope2SummaryLocation, updateScope2SummaryMarket, updateScope1LocScope2Combined, updateScope1MarkScope2Combined, updateFinalLocationEmissions, updateFinalMarketEmissions, getFinalReport } from "./localStroage";

interface SteamSelectionProps {
  title: string;
  description: React.ReactNode;
}

interface SteamSource {
  description: string;
  steamPurchased: number;
  fuelType: string;
  boilerEfficiency: number;
  Lco2?: number;
  Lch4?: number;
  Ln2o?: number;
  Mco2?: number;
  Mch4?: number;
  Mn2o?: number;
  // final calculations
  finalLco2?: number;
  finalLch4?: number;
  finalLn2o?: number;
  finalMco2?: number;
  finalMch4?: number;
  finalMn2o?: number;
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
    let totalLoc = 0;
    let totalMark = 0;

  
    const report = getFinalReport();
  
    const updated = await Promise.all(
      newSources.map(async (source) => {
        const {
          steamPurchased,
          fuelType,
          boilerEfficiency,
          Lco2,
          Lch4,
          Ln2o,
          Mco2,
          Mch4,
          Mn2o,
        } = source;
  
        const isAlternate = !!fuelType; // 有 fuelType 就是 alternate method
  
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/steam`, {
            params: {
              steamPurchased,
              fuelType: isAlternate ? fuelType : "", // 必须手动设 ""，不然 spring 会报错
              boilerEfficiency,
              Lco2: isAlternate ? undefined : Lco2,
              Lch4: isAlternate ? undefined : Lch4,
              Ln2o: isAlternate ? undefined : Ln2o,
              Mco2: isAlternate ? undefined : Mco2,
              Mch4: isAlternate ? undefined : Mch4,
              Mn2o: isAlternate ? undefined : Mn2o,
              totalSteamLoc: report.lSteam?.co2e || 0,
              totalSteamMark: report.mSteam?.co2e || 0,
              totalScope2Loc: report.lScope2Summary?.co2e || 0,
              totalScope2Mark: report.mScope2Summary?.co2e || 0,
            },
          });
  
          const {
            finalLco2, finalLch4, finalLn2o,
            finalMco2, finalMch4, finalMn2o,
          } = res.data;
  
          totalLoc += finalLco2 + finalLch4 + finalLn2o;
          totalMark += finalMco2 + finalMch4 + finalMn2o;
  
          return {
            ...source,
            finalLco2, finalLch4, finalLn2o,
            finalMco2, finalMch4, finalMn2o,
          };
        } catch (err) {
          console.error("Fetch error:", err);
          return {
            ...source,
            finalLco2: 0, finalLch4: 0, finalLn2o: 0,
            finalMco2: 0, finalMch4: 0, finalMn2o: 0,
          };
        }
      })
    );
  
    setSources((prev) => [...prev, ...updated]);
  
    updateFinalReportSection("lSteam", { co2e: totalLoc });
    updateFinalReportSection("mSteam", { co2e: totalMark });
  
    updateScope2SummaryLocation();
    updateScope2SummaryMarket();
    updateScope1LocScope2Combined();
    updateScope1MarkScope2Combined();
    updateFinalLocationEmissions();
    updateFinalMarketEmissions();
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
                    <th className="border p-2">CO₂ (Location)(kg)</th>
                    <th className="border p-2">CO₂ (Market)(kg)</th>
                    <th className="border p-2">CH₄ (Location) (g)</th>
                    <th className="border p-2">CH₄ (Market) (g)</th>
                    <th className="border p-2">N₂O (Location) (g)</th>
                    <th className="border p-2">N₂O (Market)(g)</th>
                  </tr>
                </thead>
                <tbody>
                  {sources.map((s, i) => (
                    <tr key={i}>
                      <td className="border p-2">{s.description}</td>
                      <td className="border p-2">{s.steamPurchased}</td>
                      <td className="border p-2">{s.boilerEfficiency}%</td>
                      <td className="border p-2">{s.finalLco2?.toFixed(2)}</td>
                      <td className="border p-2">{s.finalMco2?.toFixed(2)}</td>
                      <td className="border p-2">{s.finalLch4?.toFixed(6)}</td>
                      <td className="border p-2">{s.finalMch4?.toFixed(6)}</td>
                      <td className="border p-2">{s.finalLn2o?.toFixed(6)}</td>
                      <td className="border p-2">{s.finalMn2o?.toFixed(6)}</td>
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
