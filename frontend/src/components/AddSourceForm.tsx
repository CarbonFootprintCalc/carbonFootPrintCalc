import React, { useState } from "react";

interface AddSourceFormProps {
  onAdd: (sources: {description: string; fuelType: string; quantity: string; unit: string }) => void;
  fuelOptions: string[];
  unitOptions: string[];
}

const AddSourceForm: React.FC<AddSourceFormProps> = ({ onAdd, fuelOptions, unitOptions }) => {
  
  const [rows, setRows] = useState([{ description: "", fuelType: "", quantity: "", units: ""}]);

  
  // handles updates to individual input fields
  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedRows = [...rows];
    updatedRows[index][field as keyof typeof updatedRows[number]] = value;
    setRows(updatedRows);
  };

  // adds a new empty row when "add" button is clicked
  const handleAddRow = () => {
    setRows([...rows, {description: "", fuelType: "", quantity: "", unit: "" }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(rows);
    setRows([{description: "", fuelType: "", quantity: "", unit: "" }]) //resets the form
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-[1100px] mx-auto">
      {rows.map((row, index) => (
        <div className="flex items-center justify-between w-full">

          {/* Description Input */}
          <div className="w-[200px]">
            <input
            type="text"
            value={row.description}
            placeholder="Description"
            className="w-full h-10 p-2 border rounded placeholder-gray-400"
            />
          </div>

          {/* Fuel Type Dropdown */}
          <div className="w-[200px] relative">
            <select
              value={row.fuelType}
              onChange={(e) => handleInputChange(index, "fuelType", e.target.value)}
              className="w-full h-10 p-2 border rounded bg-white"
            >
            <option value="">Select Fuel Type</option>
            {fuelOptions.map((fuel, i) => (
                <option key={i} value={fuel}>{fuel}</option>
            ))}
            </select>
          </div>
          

          {/* Quantity Input */}
          <div className="w-[150px]">
            <input
              type="text"
              value={row.quantity}
              onChange={(e) => handleInputChange(index, "quantity", e.target.value)}
              placeholder="Quantity"
              className="w-full h-10 p-2 border rounded placeholder-gray-400"
            />
          </div>

          {/* Unit Dropdown */}
          <div className="w-[150px] relative">
            <select
              value={row.unit}
              onChange={(e) => handleInputChange(index, "unit", e.target.value)}  
              className="w-full h-10 p-2 border rounded bg-white"
            >
              <option value="">Select Unit</option>
              {unitOptions.map((unit, i) => (
                <option key={index} value={i}>{unit}</option>
              ))}
            </select>
          </div>

          {/* Remove Button (shows when >1 rows)} */}
          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => setRows(rows.filter((_, i) => i !== index))}
              className= "w-[50px] h-10 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              ✕
            </button>
          )}

        </div>
      ))}

      
      {/* Add/Submit Button */}
      <div className="flex justify-between mt-2">

        {/* adds another row */}
        <button
          type="button"
          onClick={handleAddRow}
          className = "px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
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

export default AddSourceForm;
