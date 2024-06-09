import { Language } from "../interfaces/api-translation.interface";
import { PageTextContent } from "../reference-data/page-text-content";

const getTranslationIfAny = (
  key: string,
  defaultText: string,
  data: PageTextContent[],
  language: Language
) => {
  return data ? data.find((d) => d.key === key).value[language] : defaultText;
};

export const TranslationUtils = {
  getTranslationIfAny,
};
