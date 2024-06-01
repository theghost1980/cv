import React from "react";
import "../styles/loader.css";

interface Props {
  animate?: boolean;
  source?: string;
  w?: string | number;
  h?: string | number;
}

export const Loader = ({ animate, source, w, h }: Props) => {
  return source ? (
    <img src={source} width={w} height={h} />
  ) : (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
};
