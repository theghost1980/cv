import { Theme } from "../enums/theme-context-enum";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
