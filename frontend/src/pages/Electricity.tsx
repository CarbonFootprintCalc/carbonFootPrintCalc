import React from "react";
import { useTheme } from "../context/ThemeContext";
import ElectricityFuelSelection from "../components/ElectricityFuelSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Electricity: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleNext = () => {
    navigate("/steam");
  };

  const handlePrevious = () => {
    navigate("/purchase-gas");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 2 - Electricity
          </h2>

          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
              Scope 2 electricity emissions are indirect greenhouse gas emissions from the consumption of purchased electricity, heat, or steam.
              These emissions occur at the facility where the electricity is generated, not where it is consumed.
              Reporting includes location-based and market-based emission factors depending on data availability and methodology.
            </p>
          </div>

          <ElectricityFuelSelection
            title="Electricity"
            description={
              <>
                <p className="mt-2">Please enter your electricity data for the reporting period below:</p>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>eGRID Subregion:</strong> The regional power grid your facility draws electricity from. Refer to your electricity provider if unsure.</li>
                  <li><strong>Electricity Purchased:</strong> Total electricity purchased (in MWh) during the reporting period.</li>
                  <li><strong>CO₂, CH₄, and N₂O Factors:</strong> Required only if you choose to report using market-based emission factors (in lb/MWh).</li>
                </ul>
                <p className="mt-1">You may use location-based defaults or provide specific market-based data if available.</p>
              </>
            }
            
          />

          <div className="mt-8 flex gap-4">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 shadow-lg"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Electricity;
