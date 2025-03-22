import React from "react";
import { useTheme } from "../context/ThemeContext";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import PurchaseGasFuelSelection from "../components/PurchaseGasFuelSelection"; // 替换为你刚才创建的组件

const PurchaseGas: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handlePrevious = () => {
    navigate("/fire-suppression");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Purchased Gas
          </h2>

          <PurchaseGasFuelSelection
            title="Scope 1 Emissions from Purchased Gases"
            description="Report gases such as HFCs, PFCs, CO₂, and SF₆ that were purchased for use in refrigeration, AC, or other applications. Enter the gas type, amount purchased, and a brief description of use."
          />

          <div className="mt-8 flex gap-4">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 shadow-lg"
            >
              Previous
            </button>
            {/* <button
              onClick={handleNext}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg"
            >
              Next
            </button> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PurchaseGas;
