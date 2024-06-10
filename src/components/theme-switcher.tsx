import React, { useEffect } from "react";
import { useTheme } from "../contexts/theme-context";
import { Icon } from "./icon";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (localStorage) localStorage.setItem("cv_theme", theme);
  }, [theme]);
  return (
    <Icon
      name="theme_switcher"
      title="Click to switch Theme"
      onClick={() => toggleTheme()}
    />
  );
};
