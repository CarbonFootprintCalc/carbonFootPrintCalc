import React from "react";
import { useTheme } from "./context/ThemeContext";
import SignInButton from "./components/SignInButton";
import SignUpButton from "./components/SignUpButton";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    // Add dark class to handle Tailwind dark mode
    <div className={isDarkMode ? "dark" : ""}>
      {/* Main container with dark mode styles */}
      <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        {/* Header with responsive layout */}
        <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              EmissioTrack
            </h1>
          </div>

          {/* Navigation buttons with responsive spacing */}
          <div className="flex items-center gap-4">
            <SignInButton />
            <SignUpButton />
            <ThemeToggleButton />
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
