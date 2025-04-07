import React, { useState } from "react";

interface SteamFormProps {
  onAdd: (
    sources: {
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
    }[]
  ) => void;
  useAlternateMethod: boolean;
  fuelTypeOptions: string[];
}

const SteamForm: React.FC<SteamFormProps> = ({
  onAdd,
  useAlternateMethod,
  fuelTypeOptions,
}) => {
  const [rows, setRows] = useState([
    {
        description: "",
        steamPurchased: 0,
        fuelType: "",
        boilerEfficiency: 0,
        Lco2: undefined,
        Lch4: undefined,
        Ln2o: undefined,
        Mco2: undefined,
        Mch4: undefined,
        Mn2o: undefined,
    },
  ]);

  const handleChange = (
    index: number,
    field: keyof (typeof rows)[number],
    value: string
  ) => {
    const updated = [...rows];
    if (
      field === "steamPurchased" ||
      field === "boilerEfficiency" ||
      field === "Lco2" ||
      field === "Lch4" ||
      field === "Ln2o" ||
      field === "Mco2" ||
      field === "Mch4" ||
      field === "Mn2o"
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
        steamPurchased: 0,
        fuelType: "",
        boilerEfficiency: 0,
        Lco2: undefined,
        Lch4: undefined,
        Ln2o: undefined,
        Mco2: undefined,
        Mch4: undefined,
        Mn2o: undefined,
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
        steamPurchased: 0,
        fuelType: "",
        boilerEfficiency: 0,
        Lco2: undefined,
        Lch4: undefined,
        Ln2o: undefined,
        Mco2: undefined,
        Mch4: undefined,
        Mn2o: undefined,
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
          className="flex flex-wrap items-center justify-between gap-4 my-2"
        >
          {/* <div className="grid grid-cols-9 gap-4 w-full items-start"> */}

            {/* Description */}
            <input
              type="text"
              placeholder="Description"
              className="h-10 p-2 border rounded w-[200px]"
              value={row.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
  
            {/* Steam Purchased */}
            <div className="flex items-center space-x-1">
              <input
                type="number"
                placeholder="Steam Purchased"
                className="h-10 p-2 border rounded w-[150px]"
                value={row.steamPurchased || ""}
                onChange={(e) =>
                  handleChange(index, "steamPurchased", e.target.value)
                }
              />
              <span className="text-sm text-gray-500">mmBtu</span>
            </div>
  
            {/* Location/Market Emission Factors (preferred method only) */}
            {!useAlternateMethod && (
              <>
                {/* Location/Market CO₂ */}
                <div className="flex flex-col space-y-2 w-[150px]">
                  <input
                    type="number"
                    placeholder="Location CO₂ Factor"
                    className="h-10 p-2 border rounded w-full"
                    value={row.Lco2 || ""}
                    onChange={(e) =>
                      handleChange(index, "Lco2", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Market CO₂ Factor"
                    className="h-10 p-2 border rounded w-full"
                    value={row.Mco2 || ""}
                    onChange={(e) =>
                      handleChange(index, "Mco2", e.target.value)
                    }
                  />
                </div>
  
                {/* Location/Market CH₄ */}
                <div className="flex flex-col space-y-2 w-[150px]">
                  <input
                    type="number"
                    placeholder="Location CH₄ Factor"
                    className="w-full h-10 p-2 border rounded"
                    value={row.Lch4 || ""}
                    onChange={(e) =>
                      handleChange(index, "Lch4", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Market CH₄ Factor"
                    className="w-full h-10 p-2 border rounded"
                    value={row.Mch4 || ""}
                    onChange={(e) =>
                      handleChange(index, "Mch4", e.target.value)
                    }
                  />
                </div>
  
                {/* Location/Market N₂O */}
                <div className="flex flex-col space-y-2 w-[150px]">
                  <input
                    type="number"
                    placeholder="Location N₂O Factor"
                    className="w-full h-10 p-2 border rounded"
                    value={row.Ln2o || ""}
                    onChange={(e) =>
                      handleChange(index, "Ln2o", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Market N₂O Factor"
                    className="w-full h-10 p-2 border rounded"
                    value={row.Mn2o || ""}
                    onChange={(e) =>
                      handleChange(index, "Mn2o", e.target.value)
                    }
                  />
                </div>
              </>
            )}
  
            {/* Alternate method fields */}
            {useAlternateMethod && (
              <>
                <select
                  value={row.fuelType}
                  onChange={(e) =>
                    handleChange(index, "fuelType", e.target.value)
                  }
                  className="w-[200px] h-10 p-2 border rounded bg-white"
                >
                  <option value="">Select fuel type:</option>
                  {fuelTypeOptions.map((fuelType, i) => (
                    <option key={i} value={fuelType}>
                      {fuelType}
                    </option>
                  ))}
                </select>
  
                <div className="flex items-center space-x-1 col-span-2">
                  <input
                    type="number"
                    placeholder="Boiler Efficiency"
                    className="w-[150px] h-10 p-2 border rounded"
                    value={row.boilerEfficiency || ""}
                    onChange={(e) =>
                      handleChange(index, "boilerEfficiency", e.target.value)
                    }
                  />
                  <span className="text-sm text-gray-500">%</span>
                </div>
              </>
            )}
          {/*</div>*/}
  
          {/* Remove Row Button */}
          {rows.length > 1 && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => handleRemoveRow(index)}
                className="w-[50px] h-10 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      ))}
  
      {/* Add + Submit Buttons */}
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
  
export default SteamForm;