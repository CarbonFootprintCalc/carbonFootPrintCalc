import React, { useState } from "react";

interface AddTravelFormProps {
  onAdd: (
    sources: {
      description: string;
      vehicleType: string;
      miles: string;
    }[]
  ) => void | Promise<void>;
  vehicleOptions: string[];
  unitLabel: string;      // e.g., "Vehicle-Miles (miles)" or "Passenger-Miles (miles)"
  vehicleLabel: string;   // e.g., "Vehicle Type" or "Flight Length"
}

const BusinessTravelForm: React.FC<AddTravelFormProps> = ({
  onAdd,
  vehicleOptions,
  unitLabel,
  vehicleLabel,
}) => {
  const [rows, setRows] = useState([
    { description: "", vehicleType: "", miles: "" },
  ]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedRows = [...rows];
    updatedRows[index][field as keyof (typeof updatedRows)[number]] =
      field === "miles" ? Number(value) || 0 : value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows((prev) => [...prev, { description: "", vehicleType: "", miles: "" }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(rows);
    setRows([{ description: "", vehicleType: "", miles: "" }]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-[900px] mx-auto"
    >
      {rows.map((row, index) => (
        <div key={index} className="flex items-center justify-between w-full mb-2">
          {/* Description */}
          <div className="w-[250px]">
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

          {/* Vehicle Type or Flight Length */}
          <div className="w-[250px] relative">
            <select
              value={row.vehicleType}
              onChange={(e) =>
                handleInputChange(index, "vehicleType", e.target.value)
              }
              className="w-full h-10 p-2 border rounded bg-white"
            >
              <option value="">{`Select ${vehicleLabel}`}</option>
              {vehicleOptions.map((vehicle, i) => (
                <option key={i} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>
          </div>

          {/* Miles */}
          <div className="w-[200px]">
            <input
              type="number"
              min="0"
              step="any"
              value={row.miles}
              onChange={(e) =>
                handleInputChange(index, "miles", e.target.value)
              }
              placeholder={unitLabel}
              className="w-full h-10 p-2 border rounded placeholder-gray-400"
            />
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

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handleAddRow}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          + Add Row
        </button>
        <button
          type="submit"
          className="w-[100px] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BusinessTravelForm;
