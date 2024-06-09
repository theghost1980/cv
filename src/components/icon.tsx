import React from "react";
import Info from "../assets/svg/Info.svg";
import Anatomy from "../assets/svg/anatomy.svg";
import Blockchain from "../assets/svg/blockchain.svg";
import Close from "../assets/svg/close.svg";
import Contact from "../assets/svg/contacts.svg";
import Education from "../assets/svg/education.svg";
import ExternalLink from "../assets/svg/external-link.svg";
import GithubDark from "../assets/svg/github-mark-dark.png";
import GithubLight from "../assets/svg/github-mark.png";
import JsSvg from "../assets/svg/javaScript.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import Mail from "../assets/svg/mail.svg";
import Mobile from "../assets/svg/mobile.svg";
import NumberOne from "../assets/svg/number1.svg";
import ReactSvg from "../assets/svg/react.svg";
import ThemeDark from "../assets/svg/theme-dark.svg";
import ThemeLight from "../assets/svg/theme-light.svg";
import Translate from "../assets/svg/translate.svg";
import TsSvg from "../assets/svg/typescript.svg";
import WebpackSvg from "../assets/svg/webpack.svg";
import { useTheme } from "../context/theme-context";
import { Theme } from "../enums/theme-context-enum";
import "../styles/icon.css";

export type IconName =
  | "info"
  | "anatomy"
  | "close"
  | "contact"
  | "education"
  | "github"
  | "linkedin"
  | "mail"
  | "translate"
  | "theme_switcher"
  | "number_one"
  | "blockchain"
  | "react"
  | "js"
  | "ts"
  | "webpack"
  | "mobile"
  | "external_link";

interface Props {
  name: IconName;
  title?: string;
  onClick?: () => void;
  additionalClassname?: string;
}

export const Icon = ({ name, title, onClick, additionalClassname }: Props) => {
  const { theme } = useTheme();

  const renderIcon = () => {
    switch (name) {
      case "info":
        return <Info />;
      case "anatomy":
        return <Anatomy />;
      case "close":
        return <Close />;
      case "contact":
        return <Contact />;
      case "education":
        return <Education />;
      case "github":
        if (theme === Theme.LIGHT)
          return (
            <img
              src={GithubLight}
              alt="github-png"
              className={`icon ${theme}`}
            />
          );
        return (
          <img src={GithubDark} alt="github-png" className={`icon ${theme}`} />
        );
      case "linkedin":
        return <Linkedin />;
      case "mail":
        return <Mail />;
      case "translate":
        return <Translate />;
      case "theme_switcher":
        if (theme === Theme.LIGHT) return <ThemeLight />;
        return <ThemeDark />;
      case "number_one":
        return <NumberOne />;
      case "blockchain":
        return <Blockchain />;
      case "react":
        return <ReactSvg />;
      case "js":
        return <JsSvg />;
      case "ts":
        return <TsSvg />;
      case "webpack":
        return <WebpackSvg />;
      case "mobile":
        return <Mobile />;
      case "external_link":
        return <ExternalLink />;
      default:
        console.log("Icon not found!!", { name });
        return null;
    }
  };
  return (
    <div
      className={`icon ${theme} ${additionalClassname}`}
      title={title}
      onClick={onClick}
    >
      {renderIcon()}
    </div>
  );
};
