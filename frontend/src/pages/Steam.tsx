import React from "react";
import { useTheme } from "../context/ThemeContext";
import SteamSelection from "../components/SteamSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Steam: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleNext = () => {
    navigate("/business-travel");
  };

  const handlePrevious = () => {
    navigate("/electricity");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 2 - Steam
          </h2>

          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
                Steam purchased from external suppliers indirectly contributes to greenhouse gas emissions, primarily due to fossil fuel combustion used in boilers to produce steam.
                These emissions are classified as Scope 2 indirect emissions. To quantify these emissions accurately, organizations should use one of two methods: <br /> <br />
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>Preferred Method:</strong> Uses supplier-specific emissions factors (CO₂, CH₄, N₂O) provided directly by your steam supplier.
                  These emission factors typically apply to both market-based and location-based reporting methods.</li>
                  <li><strong>Alternative Method:</strong> If supplier-specific emission factors are unavailable, use boiler efficiency (defaulting to 80% if unknown) and the fuel type used by your steam provider to estimate emissions.</li>
                </ul> <br />
                Organizations should select the appropriate method based on data availability to ensure accurate and comprehensive emissions reporting.
            </p>
            
          </div>

          <SteamSelection
            title="Steam"
            description={
              <>
                <p className="mt-2">To calculate Scope 2 steam emissions, provide the following:</p>
                <br /><strong>Required inputs for both methods:</strong>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>Total Steam Purchased (mmBtu):</strong> Annual steam usage per facility or site. Convert steam data into mmBtu.</li>
                  <li><strong>Fuel Type:</strong> Select the type of fuel used by your steam supplier to generate steam. If unknown, select <strong>"Natural Gas"</strong> as the default option.
                  If multiple fuel types are used, enter each fuel seperately, apportioning usage by percentage.</li>
                  <li><strong>Boiler Efficiency:</strong> Enter your supplier's boiler effciency. If unknown, use the default value of 80%.</li>
                </ul> <br />
                <strong>If supplier-specific emission factors are available (preferred method):</strong>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>Supplier Emission Factors:</strong> Enter CO₂, CH₄, and N₂O emission factors (in kg/mmBtu of steam), provided by your steam supplier. These typically apply to both location-based and market-based methods. If your market-based factors differ from the supplier’s default factors, enter them separately.</li>
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

export default Steam;