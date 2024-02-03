import React from "react";
import Select from "react-select";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import "./Card.scss";
import ChartDisplay from "../Charts/ChartDisplay";

const Card = ({
  width,
  height,
  cardTitle,
  icon,
  chartType,
  chartHeight,
  options,
  data,
}) => {
  // const RenderChart = () => {
  //   switch (chartType) {
  //     case "Sankey":
  //       return <Sankey width={chartWidth} height={chartHeight} />;
  //     default:
  //       return null;
  //   }
  // };
  const selctOptions = [
    { value: 30, label: "月" },
    { value: 1, label: "日" },
    { value: 365, label: "年" },
  ];

  return (
    <div
      className="card__wrapper"
      style={{
        width,
        height,
        minWidth: 350,
      }}
    >
      <div className="card__header">
        <div className="card__title">
          <p>{cardTitle}</p>
          <IoIosInformationCircleOutline />
        </div>

        {icon ? (
          <BsThreeDots />
        ) : (
          <Select options={selctOptions} placeholder={selctOptions[0].label} />
        )}
      </div>

      <div className="card__chart">
        {/* <RenderChart /> */}
        <ChartDisplay
          chartType={chartType}
          height={chartHeight}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Card;
