import React from "react";
import classes from "./orderCard.module.css";
import OrderCardImage from "../../assets/orderCard.svg";

export const OrderCard = () => {
  return (
    <div className={classes.image}>
      <img
        className={classes.orderCard}
        alt="Order card"
        src={OrderCardImage}
      />
    </div>
  );
};

export default OrderCard;
