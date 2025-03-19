import React, { useState } from "react";

interface AddSourceFormProps {
    onAdd: (
        sources: {
            description: string;
            vehicleType: string;
            fuelType: string;
            vehicleYear: number;
            fuelUsage: number;
            unit: string;
        }[]
        ) => void | Promise<void>;

    vehicleOptions: string[];
    fuelOptions: string[];
    yearOptions: string[];
    unitOptions: string[];
}

const MobileSourcesForm: React.FC<AddSourceFormProps> = ({
  onAdd,
  vehicleOptions,
  fuelOptions,
  yearOptions,
  unitOptions
}) => {
  const [rows, setRows] = useState([
    { description: "", vehicleType: "", fuelType: "", vehicleYear: 2025, fuelUsage: 0, unit: "" },
  ]);

  const handleInputChange = <T extends keyof (typeof rows)[number]>(
    index: number,
    field: T,
    value: (typeof rows)[number][T]
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      { description: "", vehicleType: "", fuelType: "", vehicleYear: 2024, fuelUsage: 0, unit: "" },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(rows);
    setRows([{ description: "", vehicleType: "", fuelType: "", vehicleYear: 2024, fuelUsage: 0, unit: "" }]);
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

        {/* Vehicle Type */}
        <div className="w-[200px] relative">
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
          <div className="w-[200px] relative">
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

          {/* Vehicle Year */}
          <div className="w-[150px] relative">
            <input
              type="number"
              min="1972"
              max="2025"
              step="1"
              value={row.vehicleYear}
              onChange={(e) => handleInputChange(index, "vehicleYear", Number(e.target.value))}
              placeholder="Year"
              className="w-full h-10 p-2 border rounded placeholder-gray-400"
            />
          </div>

          {/* Fuel Usage */}
          <div className="w-[150px]">
            <input
              type="number"
              min="0"
              step="any"
              value={row.fuelUsage}
              onChange={(e) => handleInputChange(index, "fuelUsage", Number(e.target.value))}
              placeholder="Fuel Usage"
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

export default MobileSourcesForm;
