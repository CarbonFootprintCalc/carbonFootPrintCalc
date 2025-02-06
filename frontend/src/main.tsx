"use client";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import './styles/globals.css';

const root = document.getElementById('root') as HTMLElement;
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <App />
        </div>
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);