import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Block } from "./components/block/block";
import { Card } from "./components/card";
import { HeroSection } from "./components/hero-section";
import { TopSection } from "./components/top-section";
import { useTheme } from "./contexts/theme-context";
import { Theme } from "./enums/theme-context-enum";
import "./styles/app.css";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const [cardDataName, setCardDataName] = useState<string>();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (localStorage) {
      const prevLanguageStored = localStorage.getItem("cv_lang");
      if (
        prevLanguageStored &&
        (prevLanguageStored === "es" || prevLanguageStored === "en")
      ) {
        i18n.changeLanguage(prevLanguageStored);
      }
      const prevThemeStored = localStorage.getItem("cv_theme");
      if (
        prevThemeStored &&
        (prevThemeStored === Theme.DARK || prevLanguageStored === Theme.LIGHT)
      ) {
        if (theme !== prevThemeStored) {
          toggleTheme();
        }
      }
    }
  };

  return (
    <div className={`app-container ${theme}`}>
      <TopSection setCard={setCardDataName} />
      <HeroSection />
      <ul className="block-list">
        <li className="item">
          <Block
            name="number_one"
            animDuration="4.8s"
            click={() => setCardDataName("numbers")}
          />
        </li>
        <li className="item">
          <Block
            name="blockchain"
            animDuration="8.5s"
            click={() => setCardDataName("blockchain")}
          />
        </li>
        <li className="item">
          <Block
            name="react"
            animDuration="4s"
            click={() => setCardDataName("react")}
          />
        </li>
        <li className="item">
          <Block
            name="js"
            animDuration="5.5s"
            click={() => setCardDataName("javascript")}
          />
        </li>
        <li className="item">
          <Block name="ts" animDuration="8s" />
        </li>
        <li className="item">
          <Block name="webpack" animDuration="7s" />
        </li>
        <li className="item">
          <Block
            name="mobile"
            animDuration="7.4s"
            click={() => setCardDataName("mobile")}
          />
        </li>
      </ul>
      {cardDataName && (
        <Card
          close={() => setCardDataName(undefined)}
          cardDataName={cardDataName}
        />
      )}
    </div>
  );
}
export default App;
