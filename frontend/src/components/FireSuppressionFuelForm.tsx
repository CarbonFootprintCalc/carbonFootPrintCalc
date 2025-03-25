import React, { useState } from "react";

interface FireSuppressionFuelFormProps {
  onAdd: (
    sources: {
      description: string;
      gas: string;
      inventoryChange: number;
      transferredAmount: number;
      capacityChange: number;
    }[]
  ) => void;
  gasOptions: string[];
}

const FireSuppressionFuelForm: React.FC<FireSuppressionFuelFormProps> = ({ onAdd, gasOptions }) => {
  const [rows, setRows] = useState([
    {
      description: "",
      gas: "",
      inventoryChange: 0,
      transferredAmount: 0,
      capacityChange: 0,
    },
  ]);

  const handleChange = (
    index: number,
    field: keyof typeof rows[number],
    value: string
  ) => {
    const updatedRows = [...rows];
    if (
      field === "inventoryChange" ||
      field === "transferredAmount" ||
      field === "capacityChange"
    ) {
      updatedRows[index][field] = Number(value) as never;
    } else {
      updatedRows[index][field] = value as never;
    }
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      {
        description: "",
        gas: "",
        inventoryChange: 0,
        transferredAmount: 0,
        capacityChange: 0,
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
        gas: "",
        inventoryChange: 0,
        transferredAmount: 0,
        capacityChange: 0,
      },
    ]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-[1100px] mx-auto"
    >
      {rows.map((row, index) => (
        <div key={index} className="flex items-center justify-between gap-2 my-2">
          <input
            type="text"
            placeholder="Description"
            className="w-[200px] h-10 p-2 border rounded"
            value={row.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />

          <select
            value={row.gas}
            onChange={(e) => handleChange(index, "gas", e.target.value)}
            className="w-[150px] h-10 p-2 border rounded bg-white"
          >
            <option value="">Select Gas</option>
            {gasOptions.map((gas, i) => (
              <option key={i} value={gas}>
                {gas}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Inventory Change (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.inventoryChange || ""}
            onChange={(e) => handleChange(index, "inventoryChange", e.target.value)}
          />

          <input
            type="number"
            placeholder="Transferred Amount (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.transferredAmount || ""}
            onChange={(e) => handleChange(index, "transferredAmount", e.target.value)}
          />

          <input
            type="number"
            placeholder="Capacity Change (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.capacityChange || ""}
            onChange={(e) => handleChange(index, "capacityChange", e.target.value)}
          />

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

export default FireSuppressionFuelForm;
