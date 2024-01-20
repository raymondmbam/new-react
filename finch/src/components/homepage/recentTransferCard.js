import React from "react";
import classes from "./recentTransferCard.module.css";
import wiseImage from "../../assets/wise.jpg";
import zelleImage from "../../assets/zelle.jpg";
import finchImage from "../../assets/finch.jpg";
import revolutImage from "../../assets/revolut.jpg";

const RecentTransferCard = () => {
  return (
    <div className={classes["recent-transfer-card"]}>
      <div className={classes.wise}>
        <img className={classes.img} alt="Wise" src={wiseImage} />
        <div className={classes["text-wrapper"]}>James</div>
        <div className={classes.div}>$200</div>
      </div>
      <div className={classes.zelle}>
        <img className={classes.img} alt="Zelle" src={zelleImage} />
        <div className={classes["text-wrapper-2"]}>Josephine</div>
        <div className={classes.div}>$200</div>
      </div>
      <div className={classes.finch}>
        <img className={classes.img} alt="Finch" src={finchImage} />
        <div className={classes["text-wrapper-3"]}>Elvis</div>
        <div className={classes.div}>$200</div>
      </div>
      <div className={classes.revolut}>
        <img className={classes.img} alt="Revolut" src={revolutImage} />
        <div className={classes["text-wrapper-2"]}>Josephine</div>
        <div className={classes.div}>$200</div>
      </div>
      <div className={classes["text-wrapper-4"]}>Recent Transfers</div>
    </div>
  );
};

export default RecentTransferCard;
