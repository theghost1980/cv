import React, { useEffect, useState } from "react";
import { useTranslationContext } from "../context/data-context";
import { useTheme } from "../context/theme-context";
import { Project } from "../interfaces/card-data.interface";
import { CardDataList } from "../reference-data/card-data";
import "../styles/card.css";
import { EXCLUDE_FETCHING_LIST } from "../utils/app-utils";
import { CardBadge } from "./card-badge";
import { Icon } from "./icon";
import { Loader } from "./loader";

//TODO finish translation of cards!

interface Props {
  cardDataName: string;
  close: () => void;
  fetchedCardList: Project[] | undefined;
}

export const Card = ({ cardDataName, close, fetchedCardList }: Props) => {
  const { theme } = useTheme();
  const { data, language } = useTranslationContext();
  const [loadingData, setLoadingData] = useState(false);
  const [cardData, setCardData] = useState(
    CardDataList.find((c) => c.name === cardDataName)!
  );

  //TODO remove or use testing hook
  useEffect(() => {
    console.log({ data, language });
  }, [data]);

  useEffect(() => {
    if (
      fetchedCardList.length > 0 &&
      !EXCLUDE_FETCHING_LIST.includes(cardDataName)
    ) {
      const tempRelatedProjects = [...cardData.relatedProjects];
      let updatedProjects = tempRelatedProjects.map((t) => {
        const found = fetchedCardList.find(
          (f) => f.repositoryName === t.repositoryName
        );
        if (found) {
          return {
            ...t,
            ...found,
          };
        }
      });
      setCardData((prev) => {
        return { ...prev, relatedProjects: updatedProjects };
      });
    }
  }, [fetchedCardList]);

  return (
    <div className="back-card-container">
      <div className={`card-container ${theme}`}>
        <Icon name="close" onClick={close} />
        <div className="card-title">{cardData.title}</div>
        {cardData.subtitle && (
          <div className="card-subtitle">{cardData.subtitle}</div>
        )}
        <div className="card-description">{cardData.description}</div>
        {loadingData && <Loader />}
        <div className="card-projects-container">
          {cardData.relatedProjects.map((p, index) => {
            return (
              <div
                className="card-project-container"
                key={`${p.repositoryName}-${index}`}
              >
                <div className="card-project-description-container">
                  <div className="title">{p.repositoryName}</div>
                  {p.description && (
                    <div className="description">
                      Description: {p.description}
                    </div>
                  )}
                  {p.homepage && (
                    <div
                      className="url"
                      onClick={() => open(p.homepage, "__blank")}
                    >
                      Visit url <Icon name="external_link" />
                    </div>
                  )}
                  {p.topics && p.topics.length > 0 && (
                    <div className="topics">
                      <div className="sub-title">Skills/Tech Stack: </div>
                      <div>
                        {p.topics.map((pt, index) => {
                          return <CardBadge key={`${pt}-${index}`} name={pt} />;
                        })}
                      </div>
                    </div>
                  )}
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
      <div className="overlay" onClick={close} />
    </div>
  );
};
