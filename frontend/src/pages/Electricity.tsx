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
              Electricity purchased from the power grid indirectly contributes to greenhouse gas emissions, primarily from fossil fuel combustion at power plants.
              These indirect emissions, classified as Scope 2, vary based on regional energy sources (coal, natural gas, renewables, nuclear).
              To quantify Scope 2 emissions, organizations use two approaches: <br /><br />
              <ul className="list-disc list-inside ml-8 mt-1">
                <li><strong>Location-Based Method:</strong> Reflects average emissions from the regional electric grid supplying your energy.</li>
                <li><strong>Marked-Based Method:</strong> Reflects emissions based on specific contractual arrangements, such as renewable energy certificates (RECs), power purchase agreements (PPAs), or supplier-specifc emission factors.</li>
              </ul> <br />
              EPA guidelines reccomend calculating and reporting emissions using both methods for transparency and completeness.
            </p>
          </div>

          <ElectricityFuelSelection
            title="Electricity"
            description={
              <>
                <p className="mt-2">To calculate Scope 2 electricity emissions, you will provide the following data:
                  <br /><br /><strong>For both methods: </strong>
                </p>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>Total Electricity Purchased</strong> Report your annual electricity consumption (in kilowatt-hours, kWh) for each facility or site, available from electricity bills or utility invoices.</li>
                </ul>
                <br /><p><strong>For location-based calculations:</strong></p>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>Facility Location (eGRID Subregion):</strong> Identify your facility's eGRID subregion using the calculator's provided map or EPA's <a href="https://www.epa.gov/egrid/power-profiler#/">Power Profiler tool</a>. The calculator applies regional emission factors automatically based on your selection.</li>
                </ul>
                <br /><p><strong>For market-based calculations:</strong></p>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>CO₂, CH₄, and N₂O Factors:</strong> Provide specific emission factors (CO₂, CH₄, N₂O) from your renewable energy contracts, PPAs, or other supplier-specific agreements.</li>
                </ul> <br />
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
