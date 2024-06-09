import React, { useEffect, useState } from "react";
import { Block } from "./components/block/block";
import { Card } from "./components/card";
import { HeroSection } from "./components/hero-section";
import { TopSection } from "./components/top-section";
import { useTranslationContext } from "./context/data-context";
import { useTheme } from "./context/theme-context";
import { Project } from "./interfaces/card-data.interface";
import { CardDataList } from "./reference-data/card-data";
import {
  PAGE_TEXT_CONTENT,
  PageTextContent,
} from "./reference-data/page-text-content";
import "./styles/app.css";
import { AppUtils } from "./utils/app-utils";
//TODO add media rules for big screens > 1200 px only one rule.
function App() {
  const { theme } = useTheme();
  const { setTranslationData } = useTranslationContext();
  const [cardDataName, setCardDataName] = useState<string>();
  const [fetchedCardDataList, setFetchedCardDataList] = useState<Project[]>();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const tempCardDataList = await AppUtils.getCardDataList(CardDataList);
      if (tempCardDataList.length) {
        setFetchedCardDataList(tempCardDataList);
        const tempDataTranslation = await AppUtils.getTranslatedData(
          PAGE_TEXT_CONTENT,
          tempCardDataList
        );
        if (tempDataTranslation.status === "success") {
          //TODO bellow maybe move to a util
          const rempapedCardDataList: PageTextContent[] = tempCardDataList.map(
            (c) => {
              return {
                key: `card-description-${c.repositoryName}`,
                value: {
                  en: c.description,
                  es: "",
                },
              };
            }
          );
          const copyPageTextContent = [
            ...PAGE_TEXT_CONTENT,
            ...rempapedCardDataList,
          ];
          const finalTranslationData: PageTextContent[] = [];
          copyPageTextContent.map((c) => {
            const found = tempDataTranslation.translation.find(
              (t) => t.key === c.key
            );
            if (found) {
              finalTranslationData.push({
                key: found.key,
                value: {
                  en: c.value.en,
                  es: found.translation,
                },
              } as PageTextContent);
            }
          });
          console.log({ finalTranslationData }); //TODO remove line
          setTranslationData(finalTranslationData);
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className={`app-container ${theme}`}>
      <TopSection />
      <HeroSection />
      <div className="cv-container">
        <Block
          name="number_one"
          animDuration="4.8s"
          click={() => setCardDataName("numbers")}
        />
        <Block
          name="blockchain"
          animDuration="8.5s"
          click={() => setCardDataName("blockchain")}
        />
        <Block
          name="react"
          animDuration="4s"
          click={() => setCardDataName("react")}
        />
        <Block
          name="js"
          animDuration="5.5s"
          click={() => setCardDataName("javascript")}
        />
        <Block name="ts" animDuration="8s" />
        <Block name="webpack" animDuration="7s" />
        <Block
          name="mobile"
          animDuration="7.4s"
          click={() => setCardDataName("mobile")}
        />
      </div>
      {cardDataName && (
        <Card
          close={() => setCardDataName(undefined)}
          cardDataName={cardDataName}
          fetchedCardList={fetchedCardDataList}
        />
      )}
    </div>
  );
}
export default App;
