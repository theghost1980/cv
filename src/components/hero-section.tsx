import React from "react";
import { useTranslationContext } from "../context/data-context";
import "../styles/hero-section.css";
import { TranslationUtils } from "../utils/translation-utils";
import { Arrow } from "./arrow";

export const HeroSection = () => {
  const { language, data } = useTranslationContext();

  return (
    <div className={"hero-section-container"}>
      <div className="main-title">
        {TranslationUtils.getTranslationIfAny(
          "hero_prof_title",
          "Engineer",
          data,
          language
        )}{" "}
        Saturno Mangieri
      </div>
      <div className="sub-title">
        {TranslationUtils.getTranslationIfAny(
          "hero_subtitle",
          "Professional Frontend Developer with deep experience in Blockchain.",
          data,
          language
        )}
      </div>
      <a href="https://www.codewars.com/users/theghost1980" target="__blank">
        <img
          src="https://www.codewars.com/users/theghost1980/badges/small"
          alt="codewars-level-badge"
          className="codewars-badge"
          title={TranslationUtils.getTranslationIfAny(
            "hero_codewars_icon_title",
            "Codewars profile",
            data,
            language
          )}
        />
      </a>
      <div className="text">
        {TranslationUtils.getTranslationIfAny(
          "hero_arrow_text",
          "click on any bordered icon for details",
          data,
          language
        )}
      </div>
      <Arrow />
    </div>
  );
};
