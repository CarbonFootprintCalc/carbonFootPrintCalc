import React, { useState } from "react";

interface AddSourceFormProps {
  onAdd: (source: {
    description: string;
    fuelType: string;
    quantity: string;
  }) => void;
}

const AddSourceForm: React.FC<AddSourceFormProps> = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {
    if (description && fuelType && quantity) {
      onAdd({ description, fuelType, quantity });
      setDescription("");
      setFuelType("");
      setQuantity("");
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <input
        type="text"
        placeholder="Source Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 w-full"
      />
      <select
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      >
        <option value="">Select Fuel Type</option>
        <option value="coal">Coal</option>
        <option value="coke">Coke</option>
        <option value="solidWaste">Solid Waste</option>
      </select>
      <input
        type="text"
        placeholder="Quantity Combusted"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddSourceForm;
