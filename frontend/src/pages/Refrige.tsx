import React from "react";
import { useTheme } from "../context/ThemeContext";
import ScopeSection from "../components/ScopeSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
const Refrige: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();


  const handlePrevious = () => {
    navigate('/stationary-combustion'); 
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Refrige
          </h2>

          <ScopeSection
            title="Coal and Coke"
            description="These are fuels like coal, oil, and natural gas. Enter the amount your company burns (in units like ***) from the specific fossil fuel type you use."
          />

          <ScopeSection
            title="Other Fuels - Solid"
            description="This group covers fuels derived from living things, such as wood, agricultural leftovers, ethanol, and biodiesel. Report the *** of these fuels if your operations include them."
          />

          <ScopeSection
            title="Biomass Fuels - Solid"
            description="These are solid materials not considered traditional fossil fuels, such as municipal solid waste, plastics, tires, or solid petroleum coke. Provide the amount burned in your process in ***"
          />
          <ScopeSection
            title="Natural Gas"
            description="These gases are byproducts or specialzed fuels like blast furnace gas, coke oven gas, fuel gas, and propane gas. Input the *** consumed in your operations."
          />
          <ScopeSection
            title="Other Fuels - Gaseous"
            description="These gases are byproducts or specialzed fuels like blast furnace gas, coke oven gas, fuel gas, and propane gas. Input the *** consumed in your operations."
          />
          <ScopeSection
            title="Biomass Fuels - Gaseous"
            description="These gases are byproducts or specialzed fuels like blast furnace gas, coke oven gas, fuel gas, and propane gas. Input the *** consumed in your operations."
          />
          <ScopeSection
            title="Petroleum Products"
            description="These gases are byproducts or specialzed fuels like blast furnace gas, coke oven gas, fuel gas, and propane gas. Input the *** consumed in your operations."
          />
          <ScopeSection
            title="Biomass Fuels - Liquid"
            description="These gases are byproducts or specialzed fuels like blast furnace gas, coke oven gas, fuel gas, and propane gas. Input the *** consumed in your operations."
          />
          <ScopeSection
            title="Biomass Fuels - Liquid"
            description="These gases are byproducts or specialzed fuels like blast furnace gas, coke oven gas, fuel gas, and propane gas. Input the *** consumed in your operations."
          />
          <ScopeSection
            title="Biomass Fuels - 
          Kraft Pulping Liquor, by Wood 
          Furnish"
            description="These gases are byproducts or specialzed fuels like blast furnace gas, coke oven gas, fuel gas, and propane gas. Input the *** consumed in your operations."
          />

          {/* Moved button below ScopeSection components */}
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

export default Refrige;
