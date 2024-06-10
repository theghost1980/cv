import React, { createContext, useContext, useState } from "react";
import { AppData, DataContextType } from "../interfaces/data-context.interface";

export const DataContext = createContext<DataContextType | null>(null);

const DataContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [data, setData] = useState<AppData>({ user: "not_used_yet" });

  const setContextData = (data: AppData) => {
    setData(data);
  };
  const value = {
    data,
    setContextData,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContextProvider;

export const useTranslationContext = () => {
  const context = useContext(DataContext);
  if (context === null) {
    throw new Error("Context Data must be used within a context provider");
  }
  return context;
};
