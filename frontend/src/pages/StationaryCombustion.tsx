import React from "react";
import { useTheme } from "../context/ThemeContext";
import ScopeSection from "../components/StationaryFuelSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
const StationaryCombustion: React.FC = () => {
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
            Scope 1 - Stationary Combustion
          </h2>
          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
              Stationary Combustion refers to fuels burned on-site in fixed
              equipment such as boilers, furnaces, generators and heaters. These
              activites directly generate greenhouse gas emissions (Scope 1
              Emissions).
              <br />
              <br />
              Use this calculator to enter your company's fuel consumption for
              stationary combustion only--do not include mobile combustion
              sources (like vehicles), electicity consumption, or emissions from
              purchased heating/cooling.
              <br />
              <br />
              For each relevant fuel category, select the fuel type, enter the
              quantity used, and choose the appropriate measurement unit
              provided. After entering all applicable fuels, submit your data to
              calculate your company's stationary combustion carbon footprint.
            </p>
          </div>

          <ScopeSection
            title="Natural Gas"
            description="Natural Gas is used by companies primarily for heating, industrial processes, and power generation. Report your usage in units such as cubic meters, MCF, or MMBtu."
          />
          <ScopeSection
            title="Coal and Coke"
             description="Coal and coke fuels are primarily burned in industrial boilers, furnaces, and power generation. Report your usage in metric tons, short tons, kilograms, or MMBtu."
          />
          <ScopeSection
           title="Miscellaneous Solid Fuels"
            description="Other solid fuels include biomass-based materials and waste products like wood, plastics, agricultural residues, and materials used specifically in industrial processes (e.g. biomass used in pulping). Report these fuels in metric tons, short tons, kilograms, or MMBtu."
          />
          <ScopeSection
            title="Petroleum Products"
            description="Petroleum Products include fuels such as distillate fuel oil, residual fuel oil, kerosene, and liquefied petroleum gases (LPG). They are typically used for heating, power generation, and industrial applications. Report your usage in gallons, liters, barrels, kilograms, or MMBtu."          />
          <ScopeSection
            title="Miscellaneous Liquid Fuels"
            description="Other liquid fuels include biodiesel, ethanol, rendered animal fat, and vegetable oils. Companies often use these renewable fuels for heating, power generation, or industrial processes. Report your usage in gallons, liters, barrels, kilograms, or MMBtu."          />
          <ScopeSection
            title="Miscellaneous Gaseous Fuels"
            description="Other gaseous fuels include propane gas, blast furnace gas, coke oven gas, fuel gas, landfill gas, and other biomass-derived gases. Companies commonly use these fuels for heating, power generation, and industrial processes. Report your usage in cubic meters, MCF, MMBtu."          />

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

export default StationaryCombustion;
