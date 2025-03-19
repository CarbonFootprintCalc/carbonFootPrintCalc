"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; 
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import "./styles/globals.css";
import App from "./app";

const root = document.getElementById("root") as HTMLElement;
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router> 
        <Layout className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <div>
            <App />
          </div>
        </Layout>
      </Router> 
    </ThemeProvider>
  </React.StrictMode>
);
