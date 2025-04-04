import React, { useState } from "react";

interface MobileSourcesFormProps {
  onAdd: (
    sources: {
      description: string;
      vehicleType: string;
      fuelType: string;
      modelYear: number;
      fuelUsage: number;
      unit: string;
      mileage: number;
    }[]
  ) => void;
  vehicleOptions: string[];
  fuelOptions: string[];
  unitOptions: string[];
  disableYear?: boolean;
}

const MobileSourcesForm: React.FC<MobileSourcesFormProps> = ({
  onAdd,
  vehicleOptions,
  fuelOptions,
  unitOptions,
  disableYear,
}) => {

  // DATABASE CHANGES:
  // Gasoline Passenger Cars -> Passenger Cars
  // Gasoline x-car -> x-car
  // Light-Duty Cars -> Passenger Cars
  // Medium- and Heavy-Duty Vehicles -> Medium-Duty Vehicles, Heavy-Duty Vehicles
  //
 


  // mapping from vehicle type to allowed fuel types
  const vehicleFuelMapping: { [key: string]: string[] } = {
    "Passenger Cars": ["Gasoline", "Diesel", "Methanol", "Ethanol", "CNG", "LPG", "Biodiesel"],
    "Light-Duty Trucks": ["Gasoline", "Diesel", "Ethanol", "CNG", "LPG", "LNG", "Biodiiesel"],
    "Medium-Duty Trucks": ["Gasoline", "Diesel", "CNG", "LPG", "LNG", "Biodiesel"],
    "Heavy-Duty Trucks": ["Gasoline", "Diesel", "Methanol", "Ethanol", "CNG", "LPG", "LNG", "Biodiesel"],
    "Buses": ["Methanol", "Ethanol", "CNG", "LPG", "LNG", "Biodiesel"],
    "Ships and Boats": ["Residual Fuel Oil", "Gasoline (2 stroke)", "Gasoline (4 stroke)", "Diesel"],
    "Locomotives": ["Diesel"],
    "Aircraft": ["Jet Fuel", "Aviation Gasoline"],
    "Agricultural Equipment": ["Gasoline (2 stroke)", "Gasoline (4 stroke)", "Gasoline Off-Road Trucks", "Diesel Equipment", "Diesel Off-Road Trucks", "LPG"],
    "Construction/Mining Equipment": ["Gasoline (2 stroke)", "Gasoline (4 stroke)", "Gasoline Off-Road Trucks", "Diesel Equipment", "Diesel Off-Road Trucks", "LPG"],
    "Lawn and Garden Equipment": ["Gasoline (2 stroke)", "Gasoline (4 stroke)", "Diesel", "LPG"],
    "Airport Equipment": ["Gasoline", "Diesel", "LPG"],
    "Industrial/Commercial Equipment": ["Gasoline (2 stroke)", "Gasoline (4 stroke)", "Diesel", "LPG"],
    "Logging Equipment": ["Gasoline (2 stroke)", "Gasoline (4 stroke)", "Diesel"],
    "Railroad Equipment": ["Gasoline", "Diesel", "LPG"],
    "Recreational Equipment": ["Gasoline (2 stroke)", "Gasoline (4 stroke)", "Diesel", "LPG"]
  };

  const [rows, setRows] = useState([
    {
      description: "",
      vehicleType: "",
      fuelType: "",
      modelYear: "",
      fuelUsage: "",
      unit: "",
      mileage: "",
    },
  ]);

  const handleChange = (
    index: number,
    field: keyof typeof rows[number],
    value: string
  ) => {
    const updatedRows = [...rows];
    if (["modelYear", "fuelUsage", "mileage"].includes(field)) {
      updatedRows[index][field] = Number(value) || "";
    } else {
      updatedRows[index][field] = value;

      if(field === "vehicleType") {
        const allowedFuels = vehicleFuelMapping[value];
        if (!allowedFuels || !allowedFuels.includes(updatedRows[index].fuelType)) {
          updatedRows[index].fuelType = "";
        }
      }
    }
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      {
        description: "",
        vehicleType: "",
        fuelType: "",
        modelYear: "",
        fuelUsage: "",
        unit: "",
        mileage: "",
      },
    ]);
  };

  const handleRemoveRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    for (const row of rows) {
      const year = Number(row.modelYear);
      if (!disableYear && (isNaN(year) || year < 1960 || year > 2025)) {
        alert("Please enter a valid model year between 1960 and 2025.");
        return;
      }
    }

    const validated = rows.map((r) => ({
      ...r,
      modelYear: Number(r.modelYear),
      fuelUsage: Number(r.fuelUsage),
      mileage: Number(r.mileage),
    }));

    onAdd(validated);
    setRows([
      {
        description: "",
        vehicleType: "",
        fuelType: "",
        modelYear: "",
        fuelUsage: "",
        unit: "",
        mileage: "",
      },
    ]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-[1100px] mx-auto"
    >
      {rows.map((row, index) => {

        const validFuelOptions = 
          row.vehicleType && vehicleFuelMapping[row.vehicleType]
            ? vehicleFuelMapping[row.vehicleType]
            : fuelOptions;

        return ( 
        <div key={index} className="flex flex-wrap items-center gap-2 my-2">
          <input
            type="text"
            placeholder="Description"
            className="w-[180px] h-10 p-2 border rounded"
            value={row.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />

          <select
            value={row.vehicleType}
            onChange={(e) => handleChange(index, "vehicleType", e.target.value)}
            className="w-[160px] h-10 p-2 border rounded bg-white"
          >
            <option value="">Vehicle Type</option>
            {vehicleOptions.map((v, i) => (
              <option key={i} value={v}>
                {v}
              </option>
            ))}
          </select>

          <select
            value={row.fuelType}
            onChange={(e) => handleChange(index, "fuelType", e.target.value)}
            className="w-[160px] h-10 p-2 border rounded bg-white"
          >
            <option value="">Fuel Type</option>
            {validFuelOptions.map((f, i) => (
              <option key={i} value={f}>
                {f}
              </option>
            ))}
          </select>

          <input
            type="number"
            min="1972"
            max="2025"
            placeholder="Model Year"
            disabled={disableYear}
            className="w-[130px] h-10 p-2 border rounded"
            value={row.modelYear}
            onChange={(e) => handleChange(index, "modelYear", e.target.value)}
          />

          <input
            type="number"
            placeholder="Fuel Usage"
            className="w-[130px] h-10 p-2 border rounded"
            value={row.fuelUsage}
            onChange={(e) => handleChange(index, "fuelUsage", e.target.value)}
          />

          <select
            value={row.unit}
            onChange={(e) => handleChange(index, "unit", e.target.value)}
            className="w-[120px] h-10 p-2 border rounded bg-white"
          >
            <option value="">Unit</option>
            {unitOptions.map((u, i) => (
              <option key={i} value={u}>
                {u}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Mileage"
            className="w-[120px] h-10 p-2 border rounded"
            value={row.mileage}
            onChange={(e) => handleChange(index, "mileage", e.target.value)}
          />

          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveRow(index)}
              className="w-[40px] h-10 bg-red-500 text-white rounded hover:bg-red-600"
            >
              ✕
            </button>
          )}
        </div>
        );
          })}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handleAddRow}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Add Row
        </button>
        <button
          type="submit"
          className="w-[100px] h-10 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default MobileSourcesForm;
