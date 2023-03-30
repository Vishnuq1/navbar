import React from "react";
import '../App.css';
  
// Example of a data array that
// you might receive from an API
const data = [
  {
    Year: "2010",
    sum_of_sales: 13927,
    sum_of_profit: -4541645,
    sum_of_market: "1400",
  },
  {
    Year: "2011",
    sum_of_sales: 13657,
    sum_of_profit: -4515645,
    sum_of_market: "5655",
  },
  {
    Year: "2012",
    sum_of_sales: 139656,
    sum_of_profit: -4661645,
    sum_of_market: "1654",
  },
  {
    Year: "2013",
    sum_of_sales: 54627,
    sum_of_profit: -454255,
    sum_of_market: "1445",
  },
  {
    Year: "2014",
    sum_of_sales: 16227,
    sum_of_profit: -4562365,
    sum_of_market: "1455",
  },
  {
    Year: "2011",
    sum_of_sales: 13444,
    sum_of_profit: -455555,
    sum_of_market: "14550",
  },
  {
    Year: "2013",
    sum_of_sales: 15527,
    sum_of_profit: -426645,
    sum_of_market: "1166",
  },
  {
    Year: "2014",
    sum_of_sales: 13917,
    sum_of_profit: -455545,
    sum_of_market: "1415",
  }
];

const Tables = () => {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Year</th>
          <th>sum_of_sales</th>
          <th>sum_of_profit</th>
          <th>sum_of_market</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Year}</td>
              <td>{val.sum_of_sales}</td>
              <td>{val.sum_of_profit}</td>
              <td>{val.sum_of_market}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
  
export default Tables;
