import React, { useState } from "react";

interface AddSourceFormProps {
  onAdd: (
    sources: {
      description: string;
      fuelType: string;
      quantity: string | number;
      unit: string;
    }[]
  ) => void | Promise<void>;
  fuelOptions: string[];
  unitOptions: string[];
}

// Calculated Final
// CalculatedStationary

const API_BASE = import.meta.env.VITE_API_URL; 

const StationaryFuelForm: React.FC<AddSourceFormProps> = ({
  onAdd,
  fuelOptions,
  unitOptions,
}) => {
  const [rows, setRows] = useState([
    { description: "", fuelType: "", quantity: "", unit: "" },
  ]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedRows = [...rows];
    if (field === "quantity") {
      updatedRows[index][field as keyof (typeof updatedRows)[number]] = value;
    } else {
      updatedRows[index][field as keyof (typeof updatedRows)[number]] = value;
    }
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      { description: "", fuelType: "", quantity: "", unit: "" },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      let totalCO2e = 0;
      let totalStationary = 0;
      const allResults: {
        description: string;
        fuelType: string;
        quantity: string | number;
        unit: string;
        emissions: {
          CO2: number;
          CH4: number;
          N2O: number;
          calculatedTotal: number;
          calculatedStationary: number;
        };
      }[] = [];
  
      for (const row of rows) {
        const response = await fetch(
          `${API_BASE}/stationary-combustion?` +
          `quantity=${row.quantity}` +
          `&fuelType=${encodeURIComponent(row.fuelType)}` +
          `&unit=${encodeURIComponent(row.unit)}` +
          `&totalCO2e=${totalCO2e}` +
          `&totalStationary=${totalStationary}`,
          { mode: "cors" }
        );
  
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Backend ${response.status}: ${text}`);
        }
  
        const result = await response.json() as {
          CO2: number;
          CH4: number;
          N2O: number;
          calculatedTotal: number;
          calculatedStationary: number;
        };
  
        // advance running totals
        totalCO2e       = result.calculatedTotal;
        totalStationary = result.calculatedStationary;
  
        allResults.push({
          description: row.description,
          fuelType:   row.fuelType,
          quantity:   row.quantity,
          unit:       row.unit,
          emissions: {
            CO2:                 result.CO2,
            CH4:                 result.CH4,
            N2O:                 result.N2O,
            calculatedTotal:     result.calculatedTotal,
            calculatedStationary: result.calculatedStationary,
          },
        });
      }
  
      // persist only the final stationary total for the report page
      localStorage.setItem(
        "stationaryFuelCalculations",
        JSON.stringify({ co2e: totalStationary })
      );
  
      // hand the full detailed array up to the parent
      await onAdd(allResults);
    } catch (error) {
      console.error("Error submitting Stationary Fuel form:", error);
    } finally {
      // only clear once everything else is done
      setRows([{ description: "", fuelType: "", quantity: "", unit: "" }]);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-[1100px] mx-auto"
    >
      {rows.map((row, index) => (
        <div key={index} className="flex items-center justify-between w-full">
          {/* Description */}
          <div className="w-[200px]">
            <input
              type="text"
              value={row.description}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
              placeholder="Description"
              className="w-full h-10 p-2 border rounded placeholder-gray-400"
            />
          </div>

          {/* Fuel Type */}
          <div className="w-[200px] relative">
            <select
              value={row.fuelType}
              onChange={(e) =>
                handleInputChange(index, "fuelType", e.target.value)
              }
              className="w-full h-10 p-2 border rounded bg-white"
            >
              <option value="">Select Fuel Type</option>
              {fuelOptions.map((fuel, i) => (
                <option key={i} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="w-[150px]">
            <input
              type="number"
              min="0"
              step="any"
              value={row.quantity}
              onChange={(e) =>
                handleInputChange(index, "quantity", e.target.value)
              }
              placeholder="Quantity"
              className="w-full h-10 p-2 border rounded placeholder-gray-400"
            />
          </div>

          {/* Unit */}
          <div className="w-[150px] relative">
            <select
              value={row.unit}
              onChange={(e) => handleInputChange(index, "unit", e.target.value)}
              className="w-full h-10 p-2 border rounded bg-white"
            >
              <option value="">Select Unit</option>
              {unitOptions.map((unit, i) => (
                <option key={i} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>

          {/* Remove Button (if more than one row) */}
          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => setRows(rows.filter((_, idx) => idx !== index))}
              className="w-[50px] h-10 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              ✕
            </button>
          )}
        </div>
      ))}

      {/* Bottom Buttons */}
      <div className="flex justify-between mt-2">
        <button
          type="button"
          onClick={handleAddRow}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          + Add Row
        </button>
        <button
          type="submit"
          className="w-[100px] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex-shrink-0"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default StationaryFuelForm;
