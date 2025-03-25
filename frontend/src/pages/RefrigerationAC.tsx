import React from "react";
import { useTheme } from "../context/ThemeContext";
import RefrigerationACFuelSelection from "../components/RefrigerationACFuelSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const RefrigerationAC: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const handleNext = () => {
    navigate("/fire-suppression");
  };
  const handlePrevious = () => {
    navigate("/stationary-combustion");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 1 - Refrigeration and Air Conditioning
          </h2>

          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
              Emissions fom refrigeration and air conditioning (AC) result from leaks of refrigerant gases during equipment use, maintenance, or disposal.
              Include emissions of greenhouse gases such as HFCs, PFCs, CO2, and SF6. Do not include ozone-depleting substances like CFCs or HCFCs.
              <br /><br />If you are unsure specific refrigerant type, select HFC-134a, as it is commonly used in AC systems.
              If certain details are unavailable, you may skip those inputs, as refrigeant emissions typically account for less than 2% of total emissions in office-based organizations.
            </p>
          </div>

          <RefrigerationACFuelSelection
            title="Refrigeration and AC"
            description={ 
              <>
                  <p className="mt-4">Enter refrigerant usage data according to the type of equipment activity:</p>
                  <p className="mt-2"><strong>New Units:</strong></p>
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li><strong>Charge: </strong>Refrigerant added to brand new units during installation (do not include refrigerant already pre-charged by the manufacturer).</li>
                    <li><strong>Capacity: </strong>Total refrigerant capacity of these newly installed units.</li>
                  </ul>
                  <p className="mt-2"><strong>Existing Units:</strong></p>
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li ><strong>Recharge: </strong>Refrigerant added to existing untis during maintenance or servicing.</li>
                  </ul>
                  <p className="mt-2"><strong>Disposed Units:</strong></p>
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li><strong>Capacity: </strong>Total refrigerant capacity of units removed from service</li>
                    <li><strong>Recovered: </strong>Amount of refrigerant recovered from disposed or retired units.</li>
                  </ul>
                  <p className="mt-2">You can typically find this information in refrigerant inventory logs, service and maintenance records, purchase documentation, or reports from contractors who handle HVAC systems.</p>
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

export default RefrigerationAC;