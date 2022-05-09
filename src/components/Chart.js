import React from "react";
import { BarChart, Bar, Tooltip } from "recharts";

const Chart = () => {
  const data = [
    { name: "Facebook", value: 1000 },
    { name: "twitter", value: 400 },
    { name: "instagram", value: 300 },
    { name: "telegram", value: 700 },
    { name: "telegram", value: 400 },
  ];

  return (
    <div className="App">
      <h1>social media</h1>
      <BarChart width={350} height={300} data={data}>
        <Bar dataKey="value" fill="#8884d8" />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Chart;
