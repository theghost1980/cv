import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./trans/en.json";
import ES from "./trans/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN,
    },
    es: {
      translation: ES,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
