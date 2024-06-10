import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import DataContextProvider from "./contexts/data-context";
import ThemeContextProvider from "./contexts/theme-context";
import "./i18n/config";
import "./styles/main.css";

ReactDOM.render(
  <DataContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </DataContextProvider>,
  document.getElementById("root")
);
