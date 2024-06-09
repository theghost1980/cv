import React from "react";
import { useTheme } from "../context/theme-context";
import { Icon } from "./icon";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Icon
      name="theme_switcher"
      title="Click to switch Theme"
      onClick={() => toggleTheme()}
    />
  );
};
