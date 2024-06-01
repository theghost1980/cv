import React from "react";
import "../styles/card-badge.css";

interface Props {
  name: string;
}

export const CardBadge = ({ name }: Props) => {
  return <div className="card-badge">{name}</div>;
};
