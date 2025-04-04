import React, { useState } from "react";

interface ElectricityFuelFormProps {
  onAdd: (
    sources: {
      description: string;
      egridSubregion: string;
      electricityPurchased: number;
      co2?: number;
      ch4?: number;
      n2o?: number;
    }[]
  ) => void;
  egridOptions: string[];
  useMarketBased: boolean;
}

const ElectricityFuelForm: React.FC<ElectricityFuelFormProps> = ({
  onAdd,
  egridOptions,
  useMarketBased,
}) => {
  const [rows, setRows] = useState([
    {
      description: "",
      egridSubregion: "",
      electricityPurchased: 0,
      co2: undefined,
      ch4: undefined,
      n2o: undefined,
    },
  ]);

  const handleChange = (
    index: number,
    field: keyof (typeof rows)[number],
    value: string
  ) => {
    const updated = [...rows];
    if (
      field === "electricityPurchased" ||
      field === "co2" ||
      field === "ch4" ||
      field === "n2o"
    ) {
      updated[index][field] = Number(value) as never;
    } else {
      updated[index][field] = value as never;
    }
    setRows(updated);
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      {
        description: "",
        egridSubregion: "",
        electricityPurchased: 0,
        co2: undefined,
        ch4: undefined,
        n2o: undefined,
      },
    ]);
  };

  const handleRemoveRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(rows);
    setRows([
      {
        description: "",
        egridSubregion: "",
        electricityPurchased: 0,
        co2: undefined,
        ch4: undefined,
        n2o: undefined,
      },
    ]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-full mx-auto"
    >
      {rows.map((row, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center justify-between gap-2 my-2"
        >
          <input
            type="text"
            placeholder="Description"
            className="w-[200px] h-10 p-2 border rounded"
            value={row.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />

          {!useMarketBased && (
            <select
              value={row.egridSubregion}
              onChange={(e) =>
                handleChange(index, "egridSubregion", e.target.value)
              }
              className="min-w-[180px] h-10 p-2 border rounded bg-white"
            >
              <option value="">Select eGRID Subregion</option>
              {egridOptions.map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>
          )}

          <div className="flex items-center space-x-1">
            <input
              type="number"
              placeholder="Electricity Purchased"
              className="w-[150px] h-10 p-2 border rounded"
              value={row.electricityPurchased || ""}
              onChange={(e) =>
                handleChange(index, "electricityPurchased", e.target.value)
              }
            />
            <span className="text-sm text-gray-500">MWh</span>
          </div>

          {useMarketBased && (
            <>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="CO2 factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.co2 || ""}
                  onChange={(e) => handleChange(index, "co2", e.target.value)}
                />
                <span className="text-sm text-gray-500">lb/MWh</span>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="CH4 factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.ch4 || ""}
                  onChange={(e) => handleChange(index, "ch4", e.target.value)}
                />
                <span className="text-sm text-gray-500">lb/MWh</span>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="N2O factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.n2o || ""}
                  onChange={(e) => handleChange(index, "n2o", e.target.value)}
                />
                <span className="text-sm text-gray-500">lb/MWh</span>
              </div>
            </>
          )}

          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveRow(index)}
              className="w-[50px] h-10 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              ✕
            </button>
          )}
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handleAddRow}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          + Add Row
        </button>
        <button
          type="submit"
          className="w-[100px] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ElectricityFuelForm;
