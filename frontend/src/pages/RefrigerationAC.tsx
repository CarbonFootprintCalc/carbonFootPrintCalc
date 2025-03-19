import React from "react";
import { useTheme } from "../context/ThemeContext";
import RefrigerationACFuelSelection from "../components/RefrigerationACFuelSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const RefrigerationAC: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handlePrevious = () => {
    navigate("/stationary-combustion");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Refrigeration and Air Conditioning Equipment
          </h2>

          <RefrigerationACFuelSelection
            title="Scope 1 Emissions from Refrigeration and AC"
            description="Report refrigerant gases such as HFC, PFC, CO2, and SF6 used in refrigeration and air conditioning equipment at your facilities."
          />

          <div className="mt-8 flex gap-4">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 shadow-lg"
            >
              Previous
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RefrigerationAC;