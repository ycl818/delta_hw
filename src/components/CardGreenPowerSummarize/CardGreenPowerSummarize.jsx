import React from "react";
import "./CardGreenPowerSummarize.scss";
import { TbSunElectricity } from "react-icons/tb";
import { MdOutlineRestore } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import BasicLine from "../Charts/BasicLine";

const CardGreenPowerSummarize = () => {
  return (
    <>
      <p className="CardGreenPowerSummarize__bigTitle">綠能總結</p>
      <div className="CardGreenPowerSummarize__group1">
        <div className="box1">
          <div className="box1__icon">
            <TbSunElectricity />
          </div>
          <div className="box1__name">餘電率</div>
          <div className="box1__value">5%</div>
        </div>
        <div className="box2">
          <div className="box2__icon">
            <MdOutlineRestore />
          </div>
          <div className="box2__name">RE</div>
          <div className="box2__value">79.6%</div>
        </div>
        <div className="box3">
          <div className="box3__icon">
            <BsLightningCharge />
          </div>
          <div className="box3__name">灰電率</div>
          <div className="box3__value">20.4%</div>
        </div>
      </div>
      <div className="CardGreenPowerSummarize__group2">
        <div className="eletricfee">
          <p className="eletricfee__title">綠能電費比</p>
          <div className="flex__wrapper">
            <p className="eletricfee__value">83.7%</p>
            <div className={"eletricfee__value-judge"}>
              <div className="eletricfee__value-judge__icon">
                <GoPlus />
              </div>
              <div className="eletricfee__value-judge__value">2.5%</div>
            </div>
          </div>
        </div>
        <div className="CardGreenPowerSummarize__group2-lineChart">
          <BasicLine />
        </div>
      </div>
    </>
  );
};

export default CardGreenPowerSummarize;
