import React, { useState } from "react";
import AddSourceForm from "./AddSourceForm";

interface ScopeSectionProps {
  title: string;
  description: string;
}

const ScopeSection: React.FC<ScopeSectionProps> = ({ title, description }) => {
  const [sources, setSources] = useState<
    { description: string; fuelType: string; quantity: string }[]
  >([]);

  const handleAddSource = (source: {
    description: string;
    fuelType: string;
    quantity: string;
  }) => {
    setSources((prev) => [...prev, source]);
  };

  return (
    <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {sources.length > 0 && (
        <ul className="mt-4 space-y-2">
          {sources.map((source, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded p-2 bg-gray-50"
            >
              <strong>{source.description}</strong> - {source.fuelType} -{" "}
              {source.quantity}
            </li>
          ))}
        </ul>
      )}

      <AddSourceForm onAdd={handleAddSource} />
    </div>
  );
};

export default ScopeSection;
