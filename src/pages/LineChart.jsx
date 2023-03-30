import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales in Millions"],
  [2010, 37.8],
  [2011, 30.9],
  [2012, 25.4],
  [2013, 11.7],
  [2014, 11.9],
  [2015, 8.8],
  [2016, 7.6],
  [2017, 12.3],
  [2018, 16.9],
  [2019, 12.8],
  [2020, 5.3],
  
];

export const options = {
  chart: {
    title: "Sales",
    subtitle: "in millions of dollars (USD)",
  },
};
const LineChart = () => {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />)
};
export default LineChart;
