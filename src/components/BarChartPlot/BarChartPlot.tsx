import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import React from "react";

export const BarChartPlot = () => {


  const data = [
    {
      name: "Jan",
      2024: 4000,
    },
    {
      name: "Feb",
      2024: 5000,
    },
    {
      name: "Mar",
      2024: 6000,
    },
    {
      name: "Apr",
      2024: 6500,
    },
    {
      name: "May",
      2024: 7000,
    },
    {
      name: "Jun",
      2024: 8000,
    },
    {
      name: "Jul",
      2024: 7400,
    },
    {
      name: "Aug",
      2024: 8000,
    },
    {
      name: "Sep",
      2024: 5000,
    },
    {
      name: "Oct",
      2024: 6200,
    },
    {
      name: "Nov",
      2024: 4800,
    },
    {
      name: "Des",
      2024: 6500,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="150%" height="100%">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="2024" fill="#4623E9" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
