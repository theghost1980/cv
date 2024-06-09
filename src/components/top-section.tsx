import React, { useState } from "react";
import { useTranslationContext } from "../context/data-context";
import { useTheme } from "../context/theme-context";
import "../styles/top-section.css";
import { TranslationUtils } from "../utils/translation-utils";
import { Icon } from "./icon";
import { ThemeSwitcher } from "./theme-switcher";

//TODO code a util function that does not repeat so much code = capitalize first letter

export const TopSection = () => {
  const { theme } = useTheme();
  const { data, toogleLanguage, language } = useTranslationContext();
  const [showContactsContainer, setShowContactsContainer] = useState(false);
  const [showInfoContainer, setShowInfoContainer] = useState(false);

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
                title={TranslationUtils.getTranslationIfAny(
                  "top_section_mail_icon_title",
                  "Send me a mail",
                  data,
                  language
                )}
                onClick={() => open("mailto:saturnob612@gmail.com")}
              />
            </li>
            <li>
              <Icon
                name="github"
                title={TranslationUtils.getTranslationIfAny(
                  "top_section_github_icon_title",
                  "My GitHub profile",
                  data,
                  language
                )}
                onClick={() =>
                  open("https://github.com/theghost1980", "__blank")
                }
              />
            </li>
            <li>
              <Icon
                name="linkedin"
                title={TranslationUtils.getTranslationIfAny(
                  "top_section_linkedin_icon_title",
                  "My Linkedin profile",
                  data,
                  language
                )}
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
                title={TranslationUtils.getTranslationIfAny(
                  "top_section_close_icon_title",
                  "Close this section",
                  data,
                  language
                )}
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
                title={TranslationUtils.getTranslationIfAny(
                  "top_section_education_icon_title",
                  "My professional education",
                  data,
                  language
                )}
              />
            </li>
            <li>
              <Icon
                name="anatomy"
                title={TranslationUtils.getTranslationIfAny(
                  "top_section_anatomy_icon_title",
                  "Anatomy of this page",
                  data,
                  language
                )}
              />
            </li>
            {data && (
              <li>
                <Icon
                  name="translate"
                  title={TranslationUtils.getTranslationIfAny(
                    "top_section_translate_icon_title",
                    "Translate Page",
                    data,
                    language
                  )}
                  onClick={toogleLanguage}
                />
              </li>
            )}
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              <Icon
                name="close"
                title={TranslationUtils.getTranslationIfAny(
                  "top_section_close_icon_title",
                  "Close this section",
                  data,
                  language
                )}
                onClick={() => setShowInfoContainer(false)}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
