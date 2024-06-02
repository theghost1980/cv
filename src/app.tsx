import React, { useState } from "react";
import { Arrow } from "./components/arrow";
import { Block } from "./components/block/block";
import { Card } from "./components/card";
import "./styles/app.css";
const BLOCKCHAINSVG: string = require("./images/svg/blockchain.svg");
const REACTSVG: string = require("./images/svg/react.svg");
// const HTML5SVG: string = require("./images/svg/html5.svg");
const JSSVG: string = require("./images/svg/javascript.svg");
const TSSVG: string = require("./images/svg/typescript.svg");
const WEBPACKSVG: string = require("./images/svg/webpack.svg");
const MOBILESVG: string = require("./images/svg/mobile.svg");
const NUMBERSVG: string = require("./images/svg/number1.svg");
const CONTACTSVG: string = require("./images/svg/contacts.svg");
//TODO enable commented code when needed in the future!
function App() {
  const [cardExperience, setCardExperience] = useState<string>();
  const [showContactsContainer, setShowContactsContainer] = useState(false);

  return (
    <div>
      <div
        className="contact-section"
        onMouseEnter={() => setShowContactsContainer(true)}
      >
        <img src={CONTACTSVG} alt="contact-svg" />
      </div>
      {showContactsContainer && (
        <div
          className={"contact-container"}
          onMouseLeave={() => setShowContactsContainer(false)}
        >
          <ul>
            <li>
              <a href="mailto:saturnob612@gmail.com">Mail me</a>
            </li>
            <li>
              <a href="https://github.com/theghost1980" target="__blank">
                Github
              </a>
            </li>
            <li
              className="close-icon"
              onClick={() => setShowContactsContainer(false)}
            >
              close
            </li>
          </ul>
        </div>
      )}
      <div className="hero-section-container">
        <div className="main-title">{"Eng. Saturno Mangieri"}</div>
        <div className="sub-title">
          {"Professional Frontend Developer with +4y experience."}
        </div>
        <div className="text">click on any bordered icon for details</div>
        <Arrow />
      </div>
      <div className="cv-container">
        <Block
          source={NUMBERSVG}
          animDuration="4.8s"
          click={() => setCardExperience("numbers")}
        />
        <Block
          source={BLOCKCHAINSVG}
          animDuration="8.5s"
          click={() => setCardExperience("blockchain")}
        />
        <Block
          source={REACTSVG}
          animDuration="4s"
          click={() => setCardExperience("react")}
        />
        {/* <Block source={HTML5SVG} animDuration="4.6s" /> */}
        <Block
          source={JSSVG}
          animDuration="5.5s"
          click={() => setCardExperience("javascript")}
        />
        <Block source={TSSVG} animDuration="8s" />
        <Block source={WEBPACKSVG} animDuration="7s" />
        <Block
          source={MOBILESVG}
          animDuration="7.4s"
          click={() => setCardExperience("mobile")}
        />
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
