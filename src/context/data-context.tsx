import React, { createContext, useContext, useState } from "react";
import {
  Language,
  TranslationDataContextType,
} from "../interfaces/api-translation.interface";
import { PageTextContent } from "../reference-data/page-text-content";

export const TranslationDataContext =
  createContext<TranslationDataContextType | null>(null);

const TranslationDataContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [data, setData] = useState<PageTextContent[]>();
  const [language, setLanguage] = useState<Language>("en");

  const toogleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };
  const setTranslationData = (data: PageTextContent[]) => {
    console.log("About to set Translation Data"); //TODO remove line
    setData(data);
    console.log("Translation Data Set!"); //TODO remove line
  };
  const value = {
    data,
    language,
    toogleLanguage,
    setTranslationData,
  };
  return (
    <TranslationDataContext.Provider value={value}>
      {children}
    </TranslationDataContext.Provider>
  );
};

export default TranslationDataContextProvider;

export const useTranslationContext = () => {
  const context = useContext(TranslationDataContext);
  if (context === null) {
    throw new Error("Context Data must be used within a context provider");
  }
  return context;
};
