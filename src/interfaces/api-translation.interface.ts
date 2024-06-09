import { PageTextContent } from "../reference-data/page-text-content";

export interface TranslationData {
  status: "success" | "error";
  translation: {
    key: string;
    translation: string;
  }[];
}

export type Language = "en" | "es";

export interface TranslationDataContextType {
  data: PageTextContent[];
  language: Language;
  toogleLanguage: () => void;
  setTranslationData: (data: PageTextContent[]) => void;
}
