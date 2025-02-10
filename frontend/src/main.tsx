"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import "./styles/globals.css";

const root = document.getElementById("root") as HTMLElement;
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <App />
        </div>
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
