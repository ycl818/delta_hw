import React from "react";
import Chart from "react-apexcharts";

const Guage = () => {
  const state = {
    series: [55, 20],
    chartOptions: {
      labels: [],
    },

    options: {
      // title: {
      //   text: "Data Quality Index",
      // },
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
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
              },
              value: {
                show: true,
              },
              total: {
                show: true,
                showAlways: true,
                label: "Currently",
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
        series={state.series}
        labels={state.chartOptions.labels}
        type="donut"
        width="100%"
      />
    </div>
  );
};

export default Guage;
