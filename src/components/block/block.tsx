import React from "react";
import "../../styles/block.css";

interface Props {
  source: string;
  w?: string;
  animDuration?: string;
  click?: () => void;
}

export const Block = ({ source, w, animDuration, click }: Props) => {
  const handleClick = () => {
    if (click) click();
  };

  return (
    <div
      className={`bounce ${click ? "border-block" : ""}`}
      style={{ width: w, animationDuration: animDuration }}
      onClick={handleClick}
    >
      <img
        src={source}
        width={w}
        height={100}
        className={`image ${click ? "rounded-borders" : ""}`}
      />
    </div>
  );
};
