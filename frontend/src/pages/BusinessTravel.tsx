import React from "react";
import { useTheme } from "../context/ThemeContext";
import NavBar from "../components/NavBar";
import BusinessTravelSelection from "../components/BusinessTravelSelection";
import { useNavigate } from "react-router-dom";

const BusinessTravel: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleNext = () => {
    navigate("/commuting");
  };

  const handlePrevious = () => {
    navigate("/steam");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <NavBar />

        <main className="pt-20 px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Scope 3 - Business Travel
          </h2>

          <div className="max-w-3xl text-center mb-8 dark:text-white">
            <p>
              Scope 3 business travel emissions are indirect greenhouse gas emissions from employee travel activities that are not owned or directly controlled by the reporting organization.
              This includes transportation modes such as air, rail, and road travel that are paid for by the organization.
            </p>
            <p className="mt-2">
              Please enter all business travel activities categorized by travel type and distance traveled.
            </p>
          </div>

          {/* Section 1: Ground Travel */}
          <BusinessTravelSelection
            title="Ground Travel"
            description="Enter business trips taken by passenger cars, trucks, or motorcycles:"
          />

          {/* Section 2: Public Transit */}
          <BusinessTravelSelection
            title="Public Transit"
            description="Enter business trips taken by rail, subway, or bus:"
          />

          {/* Section 3: Air Travel */}
          <BusinessTravelSelection
            title="Air Travel"
            description="Enter air travel by haul length (short, medium, long):"
          />

          {/* Navigation Buttons */}
          <div className="mt-12 flex gap-4">
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

export default BusinessTravel;
