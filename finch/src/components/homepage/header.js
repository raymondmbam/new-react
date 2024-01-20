import React from "react";
import classes from "./header.module.css";
import profileImage from "../../assets/profilePicture.svg";

export const Header = () => {
  return (
    <div className={classes.frame}>
      <div className={classes.greeting}>
        <div className={classes["text-wrapper"]}>Hello Isabella 👋🏽</div>
      </div>
      <img
        className={classes["profile-picture"]}
        alt="Profile picture"
        src={profileImage}
      />
    </div>
  );
};

export default Header;