import React, { createContext, useCallback, useContext, useState } from "react";
import { Theme } from "../enums/theme-context-enum";
import { ThemeContextType } from "../interfaces/theme-context.interface";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  }, [theme]);
  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("Context theme must be used within a context provider");
  }
  return context;
};
