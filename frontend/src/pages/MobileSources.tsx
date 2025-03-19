import React from "react";
import { useTheme } from "../context/ThemeContext";
import MobileSourcesSelection from "../components/MobileSourcesSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
const MobileSources: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleNext = () => {
    // logic for move to next page
  };

  const handlePrevious = () => {
    navigate("/");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 1 - Mobile Sources
          </h2>
          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
              *mobile sources description goes here*
            </p>
          </div>

          <MobileSourcesSelection
            title="Motor Vehicles"
            description="N/A"
          />
          <MobileSourcesSelection
            title="Equipment Vehicles"
            description="N/A"
          />
          <MobileSourcesSelection
            title="Other Vehicles"
            description="N/A"
          />


          {/* Moved button below ScopeSection components */}
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

export default MobileSources;
