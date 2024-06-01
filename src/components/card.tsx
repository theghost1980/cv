import React, { useEffect, useState } from "react";
import { Project } from "../interfaces/card-data.interface";
import { CardDataList } from "../reference-data/card-data";
import "../styles/card.css";
import { CardUtils } from "../utils/card-utils";
import { CardBadge } from "./card-badge";
import { Loader } from "./loader";

interface Props {
  cardDataName: string;
  close: () => void;
}

const GITHUB_BASE_URL = "https://api.github.com/repos/theghost1980/";

export const Card = ({ cardDataName, close }: Props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [cardData, setCardData] = useState(
    CardDataList.find((c) => c.name === cardDataName)!
  );
  const [cardRelatedProjectList, setCardRelatedProjectList] = useState<
    Project[]
  >([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (cardData) {
      console.log({ cardData });
      setCardRelatedProjectList(cardData.relatedProjects);
      try {
        let cardDataAdditions: Project[] = [];
        for (const rp of cardData.relatedProjects) {
          const repoData = await CardUtils.getJsonFromRepository(
            GITHUB_BASE_URL,
            rp.repositoryName
          );

          if (repoData) {
            cardDataAdditions.push({
              repositoryName: rp.repositoryName,
              imageUrl: rp.imageUrl,
              description: repoData.description,
              topics: repoData.topics,
              homepage: repoData.homepage,
            });
          }
        }
        console.log({ cardDataAdditions });
        if (cardDataAdditions.length > 0)
          setCardRelatedProjectList(cardDataAdditions);
      } catch (error) {
        console.log("Error fecthing related projects data!", { error });
      } finally {
        setTimeout(() => {
          setLoadingData(false);
        }, 800);
      }
    }
  };

  return (
    <div className="overlay-container" onClick={close}>
      <div className="card-container">
        <div className="close" onClick={close}>
          close[x]
        </div>
        <div className="card-title">{cardData.title}</div>
        {cardData.subtitle && (
          <div className="card-subtitle">{cardData.subtitle}</div>
        )}
        <div className="card-description">{cardData.description}</div>
        {loadingData && <Loader />}
        <div className="card-projects-container">
          {cardRelatedProjectList.map((p, index) => {
            return (
              <div
                className="card-project-container"
                key={`${p.repositoryName}-${index}`}
              >
                <div className="card-project-description-container">
                  <div className="title">Title: {p.repositoryName}</div>
                  {p.description && (
                    <div className="description">
                      Description: {p.description}
                    </div>
                  )}
                  {p.topics && (
                    <div className="topics">
                      Skills/Tech Stack:{" "}
                      {p.topics.map((pt, index) => {
                        return <CardBadge key={`${pt}-${index}`} name={pt} />;
                      })}
                    </div>
                  )}
                  {p.homepage && <div className="url">URL:{p.homepage}</div>}
                </div>
                <img
                  src={p.imageUrl}
                  alt={`${p.repositoryName}-alt-img`}
                  className="card-project-image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
