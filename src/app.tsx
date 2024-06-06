import React, { useEffect, useState } from "react";
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

//Important //TODO
// - check if possible to run your own https://github.com/LibreTranslate/LibreTranslate
//    -> possibly in heroku

function App() {
  const [cardExperience, setCardExperience] = useState<string>();
  const [showContactsContainer, setShowContactsContainer] = useState(false);
  const [heroSubtitle, setHeroSubtitle] = useState(
    "Professional Frontend Developer with deep experience in Blockchain."
  );

  useEffect(() => {
    init();
  }, []);

  //TODO continue checking to see if possible work with trans. https://www.youtube.com/watch?v=pu4ris7FCtQ
  const init = async () => {
    const data = new URLSearchParams();
    data.append("from", "en");
    data.append("to", "es");
    data.append("text", heroSubtitle);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbww7O9lFqEf5BDftTXUG2Kww1vyVt_b4U9e0V4kiA8hhiuLIujdXEIdyvBsIJdTbIAxqA/exec",
      {
        redirect: "follow",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "cors",
        body: data,
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log({ data });
      if (data.status === "success") {
        setHeroSubtitle(data.translation);
      }
    }
    console.log({ response });
  };

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
        <div className="sub-title">{heroSubtitle}</div>
        <a href="https://www.codewars.com/users/theghost1980" target="__blank">
          <img
            src="https://www.codewars.com/users/theghost1980/badges/small"
            alt="codewars-level-badge"
            className="codewars-badge"
          />
        </a>
        <div className="text">click on any bordered icon for details</div>
        <Arrow />
      </div>
      {/* //testing appScripts */}
      {/* <form
        method="post"
        action="https://script.google.com/macros/s/AKfycbxROjlMfdblQixIQhETLEIz84FsMdWp_ZM6VpQMfrNYZHNokGlYZ7y6lsjq14gEik0PDw/exec"
      >
        <button type="submit">test</button>
      </form> */}
      {/* //end testing */}
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
