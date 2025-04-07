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
          className="flex flex-wrap items-center justify-between gap-2 my-2"
        >
        {/* description, steamPurchased found in both methods */}
          <input
            type="text"
            placeholder="Description"
            className="w-[200px] h-10 p-2 border rounded"
            value={row.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />

        <div className="flex items-center space-x-1">
            <input
              type="number"
              placeholder="Steam Purchased"
              className="w-[150px] h-10 p-2 border rounded"
              value={row.steamPurchased || ""}
              onChange={(e) =>
                handleChange(index, "steamPurchased", e.target.value)
              }
            />
            <span className="text-sm text-gray-500">mmBtu</span>
        </div>

        {/* fuelType, boilerEfficiency only found in alternative method */}
        {useAlternateMethod && (
        <select
            value={row.fuelType}
            onChange={(e) =>
            handleChange(index, "fuelType", e.target.value)
            }
            className="min-w-[180px] h-10 p-2 border rounded bg-white"
        >
            <option value="">Select fuel type:</option>
            {fuelTypeOptions.map((fuelType, i) => (
            <option key={i} value={fuelType}>
                {fuelType}
            </option>
            ))}
        </select>
        )}

        {useAlternateMethod && (
            <div className="flex items-center space-x-1">
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
        )}

          {!useAlternateMethod && (
            <>
                {/* Location-Based Emission Factors */}
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="Location CO2 Factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.Lco2 || ""}
                  onChange={(e) => handleChange(index, "Lco2", e.target.value)}
                />
                <span className="text-sm text-gray-500">kg/mmBtu</span>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="Location CH4 Factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.Lch4 || ""}
                  onChange={(e) => handleChange(index, "Lch4", e.target.value)}
                />
                <span className="text-sm text-gray-500">g/mmBtu</span>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="Location N2O Factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.Ln2o || ""}
                  onChange={(e) => handleChange(index, "Ln2o", e.target.value)}
                />
                <span className="text-sm text-gray-500">g/mmBtu</span>
              </div>

                {/* Market-Based Emission Factors */}
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="Market CO2 Factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.Mco2 || ""}
                  onChange={(e) => handleChange(index, "Mco2", e.target.value)}
                />
                <span className="text-sm text-gray-500">kg/mmBtu</span>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="Market CH4 Factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.Mch4 || ""}
                  onChange={(e) => handleChange(index, "Mch4", e.target.value)}
                />
                <span className="text-sm text-gray-500">g/mmBtu</span>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  placeholder="Market N2O Factor"
                  className="w-[150px] h-10 p-2 border rounded"
                  value={row.Mn2o || ""}
                  onChange={(e) => handleChange(index, "Mn2o", e.target.value)}
                />
                <span className="text-sm text-gray-500">g/mmBtu</span>
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

export default SteamForm;
