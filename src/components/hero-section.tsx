import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero-section.css";
import { Arrow } from "./arrow";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className={"hero-section-container"}>
      <div className="main-title">{t("hero_prof_title")} Saturno Mangieri</div>
      <div className="sub-title">{t("hero_subtitle")}</div>
      <a href="https://www.codewars.com/users/theghost1980" target="__blank">
        <img
          src="https://www.codewars.com/users/theghost1980/badges/small"
          alt="codewars-level-badge"
          className="codewars-badge"
          title={t("hero_codewars_icon_title")}
        />
      </a>
      <div className="text">{t("hero_arrow_text")}</div>
      <Arrow />
    </div>
  );
};
