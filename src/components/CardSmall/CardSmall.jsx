import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import "./CardSmall.scss";

const CardSmall = ({
  cardTitle,
  value,
  bodyIcon,
  bodyValue,
  footerText,
  footerValue,
  isRaise,
}) => {
  return (
    <div className="cardSmall__wrapper">
      <div className="cardSmall__header">
        <div className="cardSmall__title">
          <p>{cardTitle}</p>
        </div>
        <BsArrowsAngleExpand />
      </div>
      <div className="cardSmall__body">
        <div className="cardSmall__body-value">{value}</div>
        <div className={`cardSmall__body-judge  ${isRaise ? "green" : "red"}`}>
          <div className="cardSmall__body-judge__icon">{bodyIcon}</div>
          <div className="cardSmall__body-judge__value">{bodyValue}</div>
        </div>
      </div>
      <div className="cardSmall__footer">
        <div className="cardSmall__footer-text">{footerText}</div>
        <div className="cardSmall__footer-value">{footerValue}</div>
      </div>
    </div>
  );
};

export default CardSmall;
