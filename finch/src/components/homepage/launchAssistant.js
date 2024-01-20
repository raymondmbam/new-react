import React from "react";
import classes from "./launchAssistant.module.css";
import LaunchImage from "../../assets/launchIcon.svg";

export const LaunchAssistant = () => {
  return (
    <div className={classes.frame}>
      <img className={classes.launchIcon} alt="Launch" src={LaunchImage} />
      <div className={classes["text-wrapper"]}>Launch</div>
    </div>
  );
};

export default LaunchAssistant;
