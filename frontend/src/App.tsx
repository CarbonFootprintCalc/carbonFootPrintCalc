import React from "react";
import { useTheme } from "./context/ThemeContext";
import SignInButton from "./components/SignInButton";
import SignUpButton from "./components/SignUpButton";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`w-full min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Brand Logo */}
      <div className="fixed top-0 left-0 p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            EmissioTrack
          </h1>
        </div>
      </div>

      {/* Buttons Container */}
      <p className="text-red-500">Tailwind is working!</p>
      <div className="fixed top-4 right-4 flex items-center gap-4">
        <SignInButton />
        <SignUpButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default App;
