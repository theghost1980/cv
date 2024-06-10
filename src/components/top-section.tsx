import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/top-section.css";
import { Icon } from "./icon";
import { ThemeSwitcher } from "./theme-switcher";

interface Props {
  setCard: (name: string) => void;
}

export const TopSection = ({ setCard }: Props) => {
  const { t, i18n } = useTranslation();
  const [showContactsContainer, setShowContactsContainer] = useState(false);
  const [showInfoContainer, setShowInfoContainer] = useState(false);

  const handleSetlanguage = () => {
    const langToSet = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(langToSet);
    if (localStorage) localStorage.setItem("cv_lang", langToSet);
  };

  return (
    <div className="top-container">
      <div
        className="contact-section"
        onMouseEnter={() => setShowContactsContainer(true)}
      >
        <Icon name="contact" onClick={() => setShowContactsContainer(true)} />
      </div>
      <div
        className="info_section"
        onMouseEnter={() => setShowInfoContainer(true)}
        onClick={() => setShowInfoContainer(true)}
      >
        <Icon name="info" />
      </div>
      {showContactsContainer && (
        <div
          className={"contact-container"}
          onMouseLeave={() => setShowContactsContainer(false)}
        >
          <ul>
            <li>
              <Icon
                name="mail"
                title={t("top_section_mail_icon_title")}
                onClick={() => open("mailto:saturnob612@gmail.com")}
              />
            </li>
            <li>
              <Icon
                name="github"
                title={t("top_section_github_icon_title")}
                onClick={() =>
                  open("https://github.com/theghost1980", "__blank")
                }
              />
            </li>
            <li>
              <Icon
                name="linkedin"
                title={t("top_section_linkedin_icon_title")}
                additionalClassname="small-by-default"
                onClick={() =>
                  open(
                    "https://www.linkedin.com/in/saturno-mangieri/",
                    "__blank"
                  )
                }
              />
            </li>
            <li>
              <Icon
                name="close"
                title={t("top_section_close_icon_title")}
                onClick={() => setShowContactsContainer(false)}
              />
            </li>
          </ul>
        </div>
      )}
      {showInfoContainer && (
        <div
          className="info-container right-side"
          onMouseLeave={() => setShowInfoContainer(false)}
        >
          <ul>
            <li>
              <Icon
                name="education"
                title={t("top_section_education_icon_title")}
                onClick={() => setCard("education")}
              />
            </li>
            <li>
              <Icon
                name="anatomy"
                title={t("top_section_anatomy_icon_title")}
                onClick={() => setCard("anatomy")}
              />
            </li>
            <li>
              <Icon
                name="translate"
                title={t("top_section_translate_icon_title")}
                onClick={handleSetlanguage}
              />
            </li>
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              <Icon
                name="close"
                title={t("top_section_close_icon_title")}
                onClick={() => setShowInfoContainer(false)}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
