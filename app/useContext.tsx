"use client";

import React, { createContext, useState, useContext } from "react";

interface DataContextProps {
  floorContextImage: string;
  setFloorContextImage: (value: string) => void;
  floorContextItems: { name: string; alias: string; price: string }[];
  setFloorContextItems: (value: { name: string; alias: string; price: string }[]) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [floorContextImage, setFloorContextImage] = useState<string>("");
  const [floorContextItems, setFloorContextItems] = useState<{ name: string; alias: string; price: string }[]>([]);

  return (
    <DataContext.Provider value={{ floorContextImage, setFloorContextImage, floorContextItems, setFloorContextItems }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
