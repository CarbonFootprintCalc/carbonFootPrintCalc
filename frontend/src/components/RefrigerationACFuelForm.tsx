import React, { useState } from "react";

interface RefrigerationACFuelFormProps {
  onAdd: (
    sources: {
      gasType: string;
      newCharge: number;
      newCapacity: number;
      recharge: number;
      disposedCapacity: number;
      disposedRecovered: number;
    }[]
  ) => void;
  gasOptions: string[];
}

const RefrigerationACFuelForm: React.FC<RefrigerationACFuelFormProps> = ({
  onAdd,
  gasOptions,
}) => {
  const [rows, setRows] = useState([
    { gasType: "", newCharge: 0, newCapacity: 0, recharge: 0, disposedCapacity: 0, disposedRecovered: 0 },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof typeof rows[number],
    value: string
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = Number(value) || 0;
    setRows(updatedRows);
  };

  const handleGasChange = (index: number, value: string) => {
    const updatedRows = [...rows];
    updatedRows[index].gasType = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      { gasType: "", newCharge: 0, newCapacity: 0, recharge: 0, disposedCapacity: 0, disposedRecovered: 0 },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(rows);
    setRows([{ gasType: "", newCharge: 0, newCapacity: 0, recharge: 0, disposedCapacity: 0, disposedRecovered: 0 }]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 w-[1100px] mx-auto"
    >
      {rows.map((row, index) => (
        <div key={index} className="flex items-center justify-between w-full gap-2 my-2">
          <select
            value={row.gasType}
            onChange={(e) => handleGasChange(index, e.target.value)}
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
            placeholder="Charge (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.newCharge || ""}
            onChange={(e) => handleInputChange(index, "newCharge", e.target.value)}
          />

          <input
            type="number"
            placeholder="Capacity (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.newCapacity || ""}
            onChange={(e) => handleInputChange(index, "newCapacity", e.target.value)}
          />

          <input
            type="number"
            placeholder="Recharge (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.recharge || ""}
            onChange={(e) => handleInputChange(index, "recharge", e.target.value)}
          />

          <input
            type="number"
            placeholder="Total Capacity (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.disposedCapacity || ""}
            onChange={(e) => handleInputChange(index, "disposedCapacity", e.target.value)}
          />

          <input
            type="number"
            placeholder="Recovered (kg)"
            className="w-[150px] h-10 p-2 border rounded"
            value={row.disposedRecovered || ""}
            onChange={(e) => handleInputChange(index, "disposedRecovered", e.target.value)}
          />

          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => setRows(rows.filter((_, idx) => idx !== index))}
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

export default RefrigerationACFuelForm;
