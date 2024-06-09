import React from "react";
import "../styles/card-badge.css";

interface Props {
  name: string;
}

export const CardBadge = ({ name }: Props) => {
  return (
    <div
      className="card-badge"
      title="Click to google it!"
      onClick={() => open(`https://www.google.com/search?q=${name}`, "__blank")}
    >
      {name}
    </div>
  );
};
