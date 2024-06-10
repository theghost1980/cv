import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/theme-context";
import { CardData } from "../interfaces/card-data.interface";
import "../styles/card.css";
import { CardBadge } from "./card-badge";
import { Icon } from "./icon";
import { Loader } from "./loader";

interface Props {
  cardDataName: string;
  close: () => void;
}

export const Card = ({ cardDataName, close }: Props) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [loadingData, setLoadingData] = useState(true);
  const [cardData, setCardData] = useState<CardData>();
  const [widthPage, setWidthPage] = useState(window.innerWidth);

  useEffect(() => {
    initDataCard();
  }, []);

  const initDataCard = () => {
    const cardList: CardData[] = t("card_content", { returnObjects: true });
    const found = cardList.find((c) => c.name === cardDataName);
    setCardData(found!);
  };

  useEffect(() => {
    const handleResize = () => setWidthPage(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBgStyle = (imageUrl: string) => {
    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backgroundBlendMode: "hue",
    };
  };

  return (
    <div className="back-card-container">
      <div className={`card-container ${theme}`}>
        {loadingData && !cardData ? (
          <Loader />
        ) : cardData ? (
          <>
            <Icon name="close" onClick={close} />
            <div className="card-title">{cardData.title}</div>
            <div className="card-description">{cardData.description}</div>
            <div className={"card-projects-container"}>
              {cardData.project_list.map((p, index) => {
                return (
                  <div
                    className="card-project-container"
                    key={`${p.name}-${index}`}
                    style={
                      widthPage <= 540 ? getBgStyle(p.imageUrl) : undefined
                    }
                  >
                    <div className="card-project-description-container">
                      <div className="title">{p.name}</div>
                      {p.description && (
                        <div className="description">{p.description}</div>
                      )}
                      <div className="urls-container">
                        {p.url && (
                          <div
                            className="url"
                            onClick={() => open(p.url, "__blank")}
                          >
                            {t("card_project_visit_url_label")}{" "}
                            <Icon name="external_link" />
                          </div>
                        )}
                        {p.code_url && (
                          <div
                            className="url"
                            onClick={() => open(p.code_url, "__blank")}
                          >
                            {t("card_project_visit_code_url_label")}{" "}
                            <Icon name="external_link" />
                          </div>
                        )}
                      </div>
                      {p.topics && p.topics.length > 0 && (
                        <div className="topics">
                          <div className="sub-title">
                            {t("card_project_skills_label")}:{" "}
                          </div>
                          <div>
                            {p.topics.map((pt, index) => {
                              return (
                                <CardBadge key={`${pt}-${index}`} name={pt} />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                    {p.imageUrl.trim().length > 0 && (
                      <img
                        src={p.imageUrl}
                        alt={`${p.name}-alt-img`}
                        className="card-project-image"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
      <div className="overlay" onClick={close} />
    </div>
  );
};
