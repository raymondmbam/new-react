import React from "react";
import classes from "./balanceOverview.module.css";
import EyeOpenImage from "../../assets/eyeOpen.svg";
import caretImage from "../../assets/caret.svg";

// export const BalanceOverview = () => {
//   return (
//     <div className={classes["balance-overview"]}>
//       <div className={classes["account-dropdown"]}>
//         <div className={classes["text-wrapper"]}>Savings - 778</div>
//         <img
//           className={classes["caretup-icon"]}
//           alt="Caretup icon"
//           src="caretup-icon.svg"
//         />
//       </div>
//       <div className={classes["div"]}>ACCOUNT BALANCE</div>
//       <p className={classes["account-balance"]}>
//         <span className={classes["span"]}>$</span>
//         <span className={classes["text-wrapper-2"]}>15,400.</span>
//         <span className={classes["text-wrapper-3"]}>86</span>
//       </p>
//       <img className={classes.eyeOpen} alt="Eye open" src={EyeOpenImage} />
//       <div className={classes["book-balance"]}>Book balance $15,403.00</div>
//     </div>
//   );
// };

export const BalanceOverview = () => {
  return (
    <div className={classes["balance-overview"]}>
      <div className={classes.accountDropdown}>
        <div className={classes.textWrapper}>Savings - 778</div>
        <img
          className={classes.caretupIcon}
          alt="Caretup icon"
          src={caretImage}
        />
      </div>
      <div className={classes.div}>ACCOUNT BALANCE</div>
      <div className={classes.accountBalance}>
        <img className={classes.eyeOpen} alt="Eye open" src={EyeOpenImage} />
        <div className={classes.cents}>
          <sup>86</sup>
        </div>
        <div className={classes.dollars}>15,400.</div>
        <div className={classes.dollarSign}>
          <sup>$</sup>
        </div>
      </div>
      <div className={classes.bookBalance}>Book balance $15,403.00</div>
    </div>
  );
};

export default BalanceOverview;
