import React, { useState } from "react";
import { Arrow } from "./components/arrow";
import { Block } from "./components/block/block";
import "./styles/app.css";
const BLOCKCHAINSVG: string = require("./images/svg/blockchain.svg");
const REACTSVG: string = require("./images/svg/react.svg");
const HTML5SVG: string = require("./images/svg/html5.svg");
const JSSVG: string = require("./images/svg/javascript.svg");
const TSSVG: string = require("./images/svg/typescript.svg");
const WEBPACKSVG: string = require("./images/svg/webpack.svg");
const MOBILESVG: string = require("./images/svg/mobile.svg");

function App() {
  const [cardExperience, setCardExperience] = useState<number>();

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
        <Block
          source={BLOCKCHAINSVG}
          animDuration="0.5s"
          click={() => setCardExperience(1)}
        />
        <Block source={REACTSVG} animDuration="0.8s" />
        <Block source={HTML5SVG} animDuration="1s" />
        <Block source={JSSVG} animDuration="1.5s" />
        <Block source={TSSVG} animDuration="2s" />
        <Block source={WEBPACKSVG} animDuration="3s" />
        <Block source={MOBILESVG} />
      </div>
      {cardExperience && (
        <div
          className="overlay-container"
          onClick={() => setCardExperience(undefined)}
        >
          <div className="card-container">
            <div className="close" onClick={() => setCardExperience(undefined)}>
              close[x]
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
