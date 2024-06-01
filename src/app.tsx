import React, { useState } from "react";
import { Arrow } from "./components/arrow";
import { Block } from "./components/block/block";
import { Card } from "./components/card";
import "./styles/app.css";
const BLOCKCHAINSVG: string = require("./images/svg/blockchain.svg");
const REACTSVG: string = require("./images/svg/react.svg");
const HTML5SVG: string = require("./images/svg/html5.svg");
const JSSVG: string = require("./images/svg/javascript.svg");
const TSSVG: string = require("./images/svg/typescript.svg");
const WEBPACKSVG: string = require("./images/svg/webpack.svg");
const MOBILESVG: string = require("./images/svg/mobile.svg");
const NUMBERSVG: string = require("./images/svg/number1.svg");

function App() {
  const [cardExperience, setCardExperience] = useState<string>();

  return (
    <div>
      <div className="hero-section-container">
        <div className="main-title">{"Eng. Saturno Mangieri"}</div>
        <div className="sub-title">
          {"Professional Frontend Developer with +4y experience."}
        </div>
        <div className="text">click on any icon for details</div>
        <Arrow />
      </div>
      <div className="cv-container">
        {/* //TODO specifically for the number icon: */}
        {/* - data title: So you are a number person? Like number huh?
         - make a nice animations about:
          -> amount of time coding: (calculate aprox)
          -> tasks solved & delivers: (to calculate)
          -> websites built from scratch: (to calculate)
          -> hours of learning: (to calculate)
          -: //TODO find a way to use .env
          */}
        <Block source={NUMBERSVG} animDuration="4.8s" />
        <Block source={BLOCKCHAINSVG} animDuration="8.5s" />
        <Block
          source={REACTSVG}
          animDuration="4s"
          click={() => setCardExperience("react")}
        />
        <Block source={HTML5SVG} animDuration="4.6s" />
        <Block source={JSSVG} animDuration="5.5s" />
        <Block source={TSSVG} animDuration="8s" />
        <Block source={WEBPACKSVG} animDuration="7s" />
        <Block source={MOBILESVG} animDuration="7.4s" />
      </div>
      {cardExperience && (
        <Card
          close={() => setCardExperience(undefined)}
          cardDataName={cardExperience}
        />
      )}
    </div>
  );
}
export default App;
