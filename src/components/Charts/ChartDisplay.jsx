import React from "react";
import { Chart } from "react-google-charts";
import Guage from "./Guage";
import ComposeChart from "./ComposeChart";

const ChartDisplay = ({
  chartType,
  height,
  data,
  options,
  chartEvents,
  footerLabel,
  guageValue,
  guageColor,
}) => {
  console.log("🚀 ~ chartType:", chartType);
  if (chartType === "composeChart") return <ComposeChart data={data} />;
  if (chartType === "guageCircle")
    return (
      <Guage
        footerLabel={footerLabel}
        guageValue={guageValue}
        guageColor={guageColor}
      />
    );
  if (chartType === "GeoChart")
    return (
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height={height}
        data={data}
      />
    );

  return (
    <Chart
      chartEvents={chartEvents}
      chartType={chartType}
      width="100%"
      height={height}
      data={data}
      options={options}
    />
  );
};

export default ChartDisplay;
