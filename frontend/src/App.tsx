import React from "react";
import { useTheme } from "./context/ThemeContext";
import SignInButton from "./components/SignInButton";
import SignUpButton from "./components/SignUpButton";
import ThemeToggleButton from "./components/ThemeToggleButton";
import ScopeSection from "./components/ScopeSelection";

const App: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              EmissioTrack
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <SignInButton />
            <SignUpButton />
            <ThemeToggleButton />
          </div>
        </header>

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 1 - Stationary Combustion
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
          <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg">
            Calculate Carbon Footprint
          </button>
        </main>
      </div>
    </div>
  );
};

export default App;
