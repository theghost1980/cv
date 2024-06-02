import React, { useState } from "react";
import BlockchainSVGUrl from "./assets/svg/blockchain.svg";
import CloseSvgUrl from "./assets/svg/close.svg";
import ContactSvgUrl from "./assets/svg/contacts.svg";
import GithubSvgUrl from "./assets/svg/github-mark.png";
import JsSvgUrl from "./assets/svg/javaScript.svg";
import LinkedinSvgUrl from "./assets/svg/linkedin.svg";
import MailSvgUrl from "./assets/svg/mail.svg";
import MobileSvgUrl from "./assets/svg/mobile.svg";
import NumberSvgUrl from "./assets/svg/number1.svg";
import ReactSvgUrl from "./assets/svg/react.svg";
import TsSvgUrl from "./assets/svg/typescript.svg";
import WebpackSvgUrl from "./assets/svg/webpack.svg";
import { Arrow } from "./components/arrow";
import { Block } from "./components/block/block";
import { Card } from "./components/card";
import "./styles/app.css";

//TODO possible: https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/
//  -> https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/#back-end-proxy-server

function App() {
  const [cardExperience, setCardExperience] = useState<string>();
  const [showContactsContainer, setShowContactsContainer] = useState(false);

  return (
    <div>
      <div
        className="contact-section"
        onMouseEnter={() => setShowContactsContainer(true)}
      >
        <img src={ContactSvgUrl} alt="contact-svg" />
      </div>
      {showContactsContainer && (
        <div
          className={"contact-container"}
          onMouseLeave={() => setShowContactsContainer(false)}
        >
          <ul>
            <li>
              <a href="mailto:saturnob612@gmail.com">
                <img src={MailSvgUrl} alt="mail-svg" />
              </a>
            </li>
            <li>
              <a href="https://github.com/theghost1980" target="__blank">
                <img src={GithubSvgUrl} alt="github-svg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/saturno-mangieri/"
                target="__blank"
              >
                <img src={LinkedinSvgUrl} alt="linkedin-svg" />
              </a>
            </li>
            <li
              className="close-icon"
              onClick={() => setShowContactsContainer(false)}
            >
              <img src={CloseSvgUrl} alt="close-svg" />
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
          source={NumberSvgUrl}
          animDuration="4.8s"
          click={() => setCardExperience("numbers")}
        />
        <Block
          source={BlockchainSVGUrl}
          animDuration="8.5s"
          click={() => setCardExperience("blockchain")}
        />
        <Block
          source={ReactSvgUrl}
          animDuration="4s"
          click={() => setCardExperience("react")}
        />
        <Block
          source={JsSvgUrl}
          animDuration="5.5s"
          click={() => setCardExperience("javascript")}
        />
        <Block source={TsSvgUrl} animDuration="8s" />
        <Block source={WebpackSvgUrl} animDuration="7s" />
        <Block
          source={MobileSvgUrl}
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
