import React from "react";
import "./CardWithIcon.scss";

const CardWithIcon = ({
  cardIcon,
  bodyTitle,
  bodyBigValue,
  isRaise,
  bodyValue,
  bodyIcon,
  iconColor,
  iconFontColor,
}) => {
  return (
    <div className="cardWithIcon__wrapper">
      <div
        className="cardWithIcon__icon"
        style={{ backgroundColor: iconColor, color: iconFontColor }}
      >
        {cardIcon}
      </div>
      <div className="cardWithIcon__body">
        <div className="cardWithIcon__body-title">{bodyTitle}</div>
        <div className="flex__wrapper">
          <div className="cardWithIcon__body-value">{bodyBigValue}</div>
          <div
            className={`cardWithIcon__body-judge  ${isRaise ? "green" : "red"}`}
          >
            <div className="cardWithIcon__body-judge__icon">{bodyIcon}</div>
            <div className="cardWithIcon__body-judge__value">{bodyValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithIcon;
