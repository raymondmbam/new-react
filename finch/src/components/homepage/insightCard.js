import React from "react";
import classes from "./insightCard.module.css";
import insightCardImage from "../../assets/insightCard.svg";

export const InsightCard = () => {
  return (
    <div className={classes.image}>
      <img className={classes.insight} alt="Insight" src={insightCardImage} />
    </div>
  );
};

export default InsightCard;
