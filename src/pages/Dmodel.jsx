import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Industrial Sector", "Sum of Profit in Millions", { role: "style" }],
  ["Aerospace& Defence", 8.94, "#b87333"],
  ["Alternative Energy", 10.49, "silver"], 
  ["Banks", 19.3, "gold"],
  ["Beverages", 21.45, "color: #8f6c26"],
  ["BioTechnology", 20, "color: #21a549"], 
  ["Chemicals", 18, "color: #4c6db4"],
  ["Comercial Vehicles", 22, "color: #ca4b3a"],
  ["Commercial Hardware", 26, "color: #94197f"],
  ["Computer hardware", 18, "color: #25b9ad"],
  ["Electricity", 24, "color: #0fbd91"],
  ["Electronic equipment", 13, "color: #e22a2a"],
];


const Dmodel = () => {
  return (
    <>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />;
    </>
  );
};

export default Dmodel;