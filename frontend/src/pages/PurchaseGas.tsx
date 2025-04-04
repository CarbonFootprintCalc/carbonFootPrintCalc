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
  const handleNext = () => {
    navigate("/electricity");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 1 - Purchased Gas
          </h2>

          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
              Industrial gases like CO₂, CH₄, N₂O, HFCs, PFCs, SF₆, and NF₃ are commonly used in manufacturing, lab testing, or other operational processes, and are typically released after use.
              Any purchase and release of these greenhouse gases must be included.
              <br /><br />If you made a bulk purchase intended for use over multiple years, divide the total by the expected number of years and report only the annual portion. If your records are in volume (not mass), convert to kilograms using the gas's density.
              It is assumed that the entire quantity purchased is used and released within that year.

            </p>
          </div>

          <PurchaseGasFuelSelection
            title="Purchased Gas"
            description={
              <>
                <p className="mt-1">
                  To calculate emissions from purchased gases, report the total amount of each gas purchased during the reporting period in kilograms:</p>
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

export default PurchaseGas;
