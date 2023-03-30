
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Sales"],
  ["Argentina", 1000],
  ["Australia", 1170],
  ["Austria", 660],
  ["Belgium", 1031],
  ["Bermuda", 1044],
  ["Brazil", 148],
  ["Canada", 1551],
  ["Cyman Island", 1182],
  ["China", 105],
  ["Chez", 126],
  ["Denmark", 1031],
  ["Finland", 1048],
];

export const options = {
  chart: {
    title: "Country",
    subtitle: "Sales",
  },
};


function BarChart({ chartData }) {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default BarChart;
// export function BarChart() {
//   return (
//     <Chart
//       chartType="Bar"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }