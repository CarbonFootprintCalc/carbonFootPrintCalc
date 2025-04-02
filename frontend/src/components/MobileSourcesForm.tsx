import React, { useState } from "react";

// Define the input type for mobile sources; vehicleYear can be a number or an empty string initially.
interface MobileSourceInput {
  description: string;
  vehicleType: string;
  fuelType: string;
  vehicleYear: number | "";
  fuelUsage: number | "";
  unit: string;
  onRoad: boolean;
}

interface AddSourceFormProps {
  onAdd: (
    sources: {
      description: string;
      vehicleType: string;
      fuelType: string;
      vehicleYear: number;
      fuelUsage: number;
      unit: string;
      onRoad: boolean;
    }[]
  ) => void | Promise<void>;
  vehicleOptions: string[];
  fuelOptions: string[];
  unitOptions: string[];
  disableYear?: boolean;
  isOnRoad: boolean;
}

const MobileSourcesForm: React.FC<AddSourceFormProps> = ({
  onAdd,
  vehicleOptions,
  fuelOptions,
  unitOptions,
  disableYear,
  isOnRoad,
}) => {
  const [rows, setRows] = useState<MobileSourceInput[]>([
    { description: "", vehicleType: "", fuelType: "", vehicleYear: "", fuelUsage: "", unit: "", onRoad: isOnRoad },
  ]);

  // Generic change handler with explicit typing.
  const handleInputChange = <T extends keyof MobileSourceInput>(
    index: number,
    field: T,
    value: MobileSourceInput[T]
  ) => {
    const updatedRows = [...rows];
    if (field === "vehicleYear") {
      // For vehicleYear, if the value is an empty string, keep it as "", else convert to number.
      updatedRows[index][field] = (value === "" ? "" : Number(value)) as any;
    } else if (field === "fuelUsage") {
      updatedRows[index][field] = Number(value) as any;
    } else {
      updatedRows[index][field] = value;
    }
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      { description: "", vehicleType: "", fuelType: "", vehicleYear: "", fuelUsage: "", unit: "", onRoad: isOnRoad },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate each row's vehicleYear: must not be empty and within [1972, 2025].
    for (const row of rows) {
      if (row.vehicleType === "On-Road Vehicles") {
        const yearNumber = row.vehicleYear === "" ? NaN : Number(row.vehicleYear);
        if (isNaN(yearNumber) || yearNumber < 1972 || yearNumber > 2025) {
          alert("Please enter a valid vehicle year between 1972 and 2025.");
          return;
        }
      }
    }

    // Convert rows so that vehicleYear is guaranteed to be a number.
    const validatedRows = rows.map(row => ({
      ...row,
      vehicleYear: Number(row.vehicleYear),
      fuelUsage: Number(row.fuelUsage),
      onRoad: row.onRoad
    }));

    onAdd(validatedRows);
    // Reset the form.
    setRows([{ description: "", vehicleType: "", fuelType: "", vehicleYear: "", fuelUsage: "", unit: "", onRoad: isOnRoad}]);
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-[1100px] mx-auto"
    >
      {rows.map((row, index) => (

        <div key={index} className="mb-4 border p-4 rounded">
            <div className="grid grid-cols-3 gap-4">
            {/* first row */}

                {/* Description */}
                <div className="col-span-1">
                    <input
                    type="text"
                    value={row.description}
                    onChange={(e) => handleInputChange(index, "description", e.target.value)}
                    placeholder="Description"
                    className="w-full h-10 p-2 border rounded placeholder-gray-400"
                    />
                </div>

                {/* Vehicle Type */}
                <div className="col-span-1">
                    <select
                    value={row.vehicleType}
                    onChange={(e) => handleInputChange(index, "vehicleType", e.target.value)}
                    className="w-full h-10 p-2 border rounded bg-white"
                    >
                    <option value="">Select Vehicle Type</option>
                    {vehicleOptions.map((vehicle, i) => (
                        <option key={i} value={vehicle}>
                        {vehicle}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Fuel Type */}
                <div className="col-span-1">
                    <select
                    value={row.fuelType}
                    onChange={(e) => handleInputChange(index, "fuelType", e.target.value)}
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

            {/* second row */}
                {/* Vehicle Year as a number input with placeholder */}
                <div className="col-span-1">
                    <input
                    type="number"
                    min="1972"
                    max="2025"
                    step="1"
                    value={row.vehicleYear}
                    onChange={(e) =>
                        handleInputChange(
                        index,
                        "vehicleYear",
                        e.target.value === "" ? "" : Number(e.target.value)
                        )
                    }
                    placeholder="Year"
                    disabled={disableYear}
                    className="w-full h-10 p-2 border rounded placeholder-gray-400"
                    />
                </div>

                {/* Fuel Usage */}
                <div className="col-span-1">
                    <input
                    type="number"
                    min="0"
                    step="any"
                    value={row.fuelUsage}
                    onChange={(e) =>
                        handleInputChange(index, "fuelUsage", e.target.value === "" ? 0 : Number(e.target.value))
                    }
                    placeholder="Fuel Usage"
                    className="w-full h-10 p-2 border rounded placeholder-gray-400"
                    />
                </div>

                {/* Unit */}
                <div className="col-span-1">
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
            </div>

            {/* Remove Button */}
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

export default MobileSourcesForm;
