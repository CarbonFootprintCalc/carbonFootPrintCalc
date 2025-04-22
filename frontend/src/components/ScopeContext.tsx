import React, { createContext, useContext, useState } from "react";

interface Scope1State {
  totalCO2e: number;
  totalScope1: number;
  totalStationary: number;
  totalMobile: number;
  totalRefAC: number;
  totalFireSupp: number;
  totalPurchGas: number;
  // 添加更多模块 totals 如需
  updateTotals: (updates: Partial<Omit<Scope1State, "updateTotals">>) => void;
}

const Scope1Context = createContext<Scope1State | undefined>(undefined);

export const Scope1Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totals, setTotals] = useState({
    totalCO2e: 0,
    totalScope1: 0,
    totalStationary: 0,
    totalMobile: 0,
    totalRefAC: 0,
    totalFireSupp: 0,
    totalPurchGas: 0,
  });

  const updateTotals = (updates: Partial<Omit<Scope1State, "updateTotals">>) => {
    setTotals((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <Scope1Context.Provider value={{ ...totals, updateTotals }}>
      {children}
    </Scope1Context.Provider>
  );
};

export const useScope1 = () => {
  const context = useContext(Scope1Context);
  if (!context) {
    throw new Error("useScope1 must be used within a Scope1Provider");
  }
  return context;
};
