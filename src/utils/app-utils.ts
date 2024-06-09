import { Config } from "../config";
import { TranslationData } from "../interfaces/api-translation.interface";
import { CardData, Project } from "../interfaces/card-data.interface";
import { PageTextContent } from "../reference-data/page-text-content";
import { CardUtils } from "./card-utils";

export const EXCLUDE_FETCHING_LIST = ["numbers"];

const getCardDataList = async (cardData: CardData[]) => {
  try {
    let cardDataAdditions: Project[] = [];
    for (const card of cardData) {
      if (EXCLUDE_FETCHING_LIST.includes(card.name)) break;
      for (const rp of card.relatedProjects) {
        let repoData = await CardUtils.getJsonFromRepository(
          rp.otherRepo ?? Config.github_base_url,
          rp.repositoryName
        );

        if (repoData) {
          if (rp.repositoryName.toLowerCase().includes("keychain-extension")) {
            repoData = {
              ...repoData,
              homepage: "https://hive-keychain.com/",
              topics: [
                "blockchain",
                "hive-engine",
                "hive-crypto",
                "typescript",
                "webpack",
                "jest",
                "testing",
              ],
            };
          }
          if (rp.repositoryName.toLowerCase().includes("keychain-mobile")) {
            repoData = {
              ...repoData,
              homepage: "https://hive-keychain.com/",
              topics: [
                "blockchain",
                "react-native",
                "android",
                "ios",
                "java",
                "jest",
                "reactjs",
                "typescript",
              ],
            };
          }
          cardDataAdditions.push({
            repositoryName: rp.repositoryName,
            imageUrl: rp.imageUrl,
            description: repoData.description,
            topics: repoData.topics,
            homepage: repoData.homepage,
          });
        }
      }
    }
    if (cardDataAdditions.length > 0) return cardDataAdditions;
  } catch (error) {
    console.log("getCardDataList - Error fecthing related projects data!", {
      error,
    });
    throw new Error("Error fecthing from github!");
  }
};

const getTranslatedData = async (
  dataText: PageTextContent[],
  cardDescriptionList: Project[]
) => {
  const cardDataList = cardDescriptionList.map((c) => {
    return {
      key: `card-description-${c.repositoryName}`,
      value: c.description,
    };
  });
  const toTranslateArray = dataText.map((d) => {
    return { key: d.key, value: d.value.en };
  });
  const data = new URLSearchParams();
  data.append("from", "en");
  data.append("to", "es");
  data.append("array", JSON.stringify([...toTranslateArray, ...cardDataList]));

  try {
    const response: any = await fetch(Config.g_script, {
      redirect: "follow",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "cors",
      body: data,
    });
    if (response.status === 200) {
      const data: TranslationData = await response.json();
      if (data.status === "success") {
        return data;
      } else {
        console.log("getTranslatedData - Error Translation API", { data });
        throw new Error("Error Translation API");
      }
    } else {
      console.log("getTranslatedData - Error Fetching", { response });
      throw new Error("Error Fetching");
    }
  } catch (error) {
    console.log("getTranslatedData", { error });
    throw error;
  }
};

export const AppUtils = {
  getCardDataList,
  getTranslatedData,
};
