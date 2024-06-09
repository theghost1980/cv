import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import TranslationDataContextProvider from "./context/data-context";
import ThemeContextProvider from "./context/theme-context";
import "./styles/main.css";

ReactDOM.render(
  <TranslationDataContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </TranslationDataContextProvider>,
  document.getElementById("root")
);
