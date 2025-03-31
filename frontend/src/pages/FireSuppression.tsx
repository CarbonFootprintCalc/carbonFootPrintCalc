import React from "react";
import { useTheme } from "../context/ThemeContext";
import FireSuppressionFuelSelection from "../components/FireSuppressionFuelSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const FireSuppression: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const handleNext = () => {
    navigate("/purchase-gas");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePrevious = () => {
    navigate("/refrigeration-ac");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 1 - Fire Suppression Systems
          </h2>

          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
              Emissions from fire suppression systems arise from the release of specific chemicals, primarily HFCs, PFCs, and CO₂, from fire suppression devices during use, maintenance or disposal.
              These sources range from small portable extinguishers to large-scale systems in office buildings or warehouses. Note that other agents (such as Halon compounds, HCFCs, aqueous solutions or inert gases) are typically excluded from the GHG inventory.
            </p>
          </div>


          <FireSuppressionFuelSelection
            title="Fire Suppression"
            description={
              <>
                <p className="mt-2">Enter your organization's total fire suppressant data as follows:</p>
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li><strong>Inventory Change: </strong>The difference in refrigerant stored on-site (in pounds) from the beginning to the end of the reporting period</li>
                    <li><strong>Transferred Amount: </strong>The net amount calculated by subtracting gas sold or disposed (including returns, sales, disposals, and off-site recycling) from gas purchased (including inventory purchases, service-related charges and returned gas).</li>
                    <li><strong>Capacity Change: </strong>The difference in total equipment capacity between the start and the end of the reporting period (or, equivalently, the capcity of retired units minus that of new units).</li>
                  </ul>
                <p className="mt-1">Data are typicaly available from maintenance records, inspection logs, work orders or contractor invoices.</p>

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

export default FireSuppression;
