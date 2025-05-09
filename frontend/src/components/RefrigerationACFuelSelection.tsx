import React, { useState } from "react";
import RefrigerationACFuelForm from "./RefrigerationACFuelForm";
import axios from "axios";
import { updateFinalLocationEmissions, updateFinalMarketEmissions, updateFinalReportSection, updateScope1Summary } from "./localStroage";

interface RefrigerationACFuelSelectionProps {
  title: string;
  description: React.ReactNode;
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
  "R-401A",
  "R-401B",
  "R-401C",
  "R-402A",
  "R-402B",
  "R-403B",
  "R-404A",
  "R-406A",
  "R-407A",
  "R-407B",
  "R-407C",
  "R-407D",
  "R-408A",
  "R-409A",
  "R-410A",
  "R-410B",
  "R-411A",
  "R-411B",
  "R-414A",
  "R-414B",
  "R-417A",
  "R-422A",
  "R-422D",
  "R-424A",
  "R-426A",
  "R-428A",
  "R-434A",
  "R-507A",
  "R-508A",
  "R-508B",
];

const RefrigerationACFuelSelection: React.FC<
  RefrigerationACFuelSelectionProps
> = ({ title, description }) => {
  const [sources, setSources] = useState<RefrigerationSource[]>([]);

  const handleAddSource = async (newSources: RefrigerationSource[]) => {
    let totalCO2e = 0;
    let totalRefAC = 0;
    let totalScope = 0;
  
    const updatedSources = await Promise.all(
      newSources.map(async (source) => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/refrigeration-ac`,
            {
              params: {
                ...source,
                totalCO2e,
                totalRefAC,
                totalScope,
              },
            }
          );
  
          const {
            emissions = 0,
            calculatedRefAC,
            calculatedScope1,
            calculatedTotal,
          } = response.data;
  
          totalCO2e = calculatedTotal;
          totalRefAC = calculatedRefAC;
          totalScope = calculatedScope1;
  
          return { ...source, emissions };
        } catch (error) {
          console.error("Error fetching emissions data:", error);
          return { ...source, emissions: 0 };
        }
      })
    );
  
    setSources((prev) => [...prev, ...updatedSources]);
  
    updateFinalReportSection("refrigeration", { co2e: totalRefAC });
  
    updateScope1Summary();
    updateFinalLocationEmissions();
    updateFinalMarketEmissions();
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
        <RefrigerationACFuelForm
          onAdd={handleAddSource}
          gasOptions={gasOptions}
        />
      </div>
    </div>
  );
};

export default RefrigerationACFuelSelection;
