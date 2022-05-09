import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../components/Calender.scss";
import "react-calendar/dist/Calendar.css";
import {
  BarChart,
  Bar,
  /*Cell, XAxis, YAxis, CartesianGrid,*/ Tooltip,
} from "recharts";

const Calender = () => {
  const data = [
    { name: "Facebook", value: 1000 },
    { name: "twitter", value: 400 },
    { name: "instagram", value: 300 },
    { name: "telegram", value: 700 },
    { name: "linkedin", value: 900 },
    { name: "git", value: 500 },
  ];

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="container">
      <h2>Daily Attendance Summary Report</h2>
      <div className="flex">
        <div className="rect">
          <BarChart width={350} height={230} data={data}>
            <Bar dataKey="value" fill="rgb(192, 219, 245)" />
            <Tooltip />
          </BarChart>
        </div>
        <Calendar className="react-calendar" onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default Calender;
