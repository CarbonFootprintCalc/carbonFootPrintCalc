import React from "react";
import { useTheme } from "../context/ThemeContext";
import MobileSourcesSelection from "../components/MobileSourcesSelection";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
const MobileSources: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleNext = () => {
    navigate("/refrigeration-ac")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    navigate("/stationary-combustion");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              Mobile sources refer to greenhouse gas emissions from fuel burned in company-operated vehicles or equipment used for transportation or industrial activites.
              This includes: </p><br />
            <ul>
                
                <li><strong>On-Road Vehicles:</strong> Cars, trucks, vans, buses, or other road licensed vehicles owned or leased by your company. </li>
                <li><strong>Equipment Vehicles: </strong>Industrial equipment such as forklifts, bulldozers, backhoes, or other heavy-duty mobile machinery. </li>
                <li><strong>Other Vehicles: </strong> Miscellaneous vehicles such as ships, boats, locomotives, and airplanes. </li>
            </ul> <br />
            <p>
                Please enter the fuel type, fuel usage, vehicle type, vehicle year (only on-road vehicles), and the appropriate units (e.g. gallons, liters, MMBtu) for each
                vehicle or piece of equipment your organization operated during the reporting period.
            </p>
          </div>

        <MobileSourcesSelection
            title="On-Road Vehicles"
            description={
                <>
                    Include company-owned or operated vehicles. Choose the category that best matches your vehcile type:"
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li><strong>Passenger Cars</strong> (sedans, coupes, hatchbacks) primarily transport passengers.</li>
                        <li><strong>Light-Duty Trucks</strong> (pickups, SUVs, vans) transport passengers or carry smaller loads, typically weighing under 8,500 lbs. </li>
                        <li><strong>Medium-Duty Trucks</strong> are larger commercial vehicles designed for heavier cargo, generally weighing between 8,500 lbs and 26,000 lbs.</li>
                        <li><strong>Heavy-Duty Trucks</strong> include large freight or tractor-trailer vehicles exceeding 26,000 lbs.</li>
                    </ul>
                </>
            }
        />
          <MobileSourcesSelection
            title="Equipment Vehicles"
            description="Equipment vehicles refer to specialized off-road machinery used in industries such as agriculture, construction, mining, landscaping and more. "
          />
          <MobileSourcesSelection
            title="Other Vehicles"
            description="Other vehicles that don't fall under typical on-road or equipment categories, This group encompasses ships, boats, locomotives, and aircrafts."
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
