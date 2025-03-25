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
  };
  const handlePrevious = () => {
    navigate("/refrigeration-AC");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Fire Suppression Systems
          </h2>

          <FireSuppressionFuelSelection
            title="Scope 1 Emissions from Fire Suppression"
            description="Report emissions from fire suppression systems using gases such as HFC-23, HFC-125, HFC-134a, HFC-227ea, HFC-236fa, PFC-14, PFC-31-10, and Carbon dioxide."
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
