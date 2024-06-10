import React from "react";
import { useTheme } from "../../contexts/theme-context";
import "../../styles/block.css";
import { Icon, IconName } from "../icon";

interface Props {
  name: IconName;
  w?: string;
  animDuration?: string;
  click?: () => void;
}

export const Block = ({ name, w, animDuration, click }: Props) => {
  const { theme } = useTheme();
  const handleClick = () => {
    if (click) click();
  };

  return (
    <div
      className={`bounce ${
        click ? "border-block" : ""
      } ${theme} rounded-borders `}
      style={{ width: w, animationDuration: animDuration }}
      onClick={handleClick}
    >
      <Icon name={name} additionalClassname="image" />
    </div>
  );
};
