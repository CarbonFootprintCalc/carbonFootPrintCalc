// src/components/NavBar.tsx
import React from "react";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import ThemeToggleButton from "./ThemeToggleButton";

const NavBar: React.FC = () => {
  return (
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
  );
};

export default NavBar;
