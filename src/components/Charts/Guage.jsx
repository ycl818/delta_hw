import React from "react";
import Chart from "react-apexcharts";

const Guage = ({ footerLabel, guageValue, guageColor }) => {
  const state = {
    series: [
      {
        name: "elec",
        data: [guageValue],
        color: "#9C27B0",
      },
    ],
    chartOptions: {
      labels: [""],
    },
    labels: ["eke"],
    options: {
      // title: {
      //   text: "Data Quality Index",
      // },

      chart: {
        type: "radialBar",
      },
      tooltip: {
        fillSeriesColor: true,
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: [guageColor],
        },
      },
      fill: {
        colors: [guageColor],
      },
      legend: {
        labels: {
          colors: [guageColor],
        },
        markers: {
          fillColors: [guageColor],
        },
      },
      plotOptions: {
        pie: {
          offsetX: 50,
          offsetY: 25,

          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "30px",
                fontFamily: "Raleway",
                color: "#9C27B0",
              },
              value: {
                show: true,
              },
              total: {
                show: true,
                showAlways: true,
                label: "Currently %",
                color: "black",
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="donut">
      <Chart
        options={state.options}
        series={state.series[0].data}
        labels={state.chartOptions.labels}
        type="donut"
        width="100%"
      />
      <div>{footerLabel}</div>
    </div>
  );
};

export default Guage;
