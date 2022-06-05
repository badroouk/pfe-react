import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    time: "Page A",
    value: 4000,
  },
  {
    time: "Page B",
    value: 3000,
  },
  {
    time: "Page C",
    value: 2000,
  },
  {
    time: "Page D",
    value: 2780,
  },
  {
    time: "Page E",
    value: 1890,
  },
  {
    time: "Page F",
    value: 2390,
  },
  {
    time: "Page G",
    value: 3490,
  },
];

export default function Chart() {
  const [chartData, setChartData] = useState<any>();

  const fetchData = async () => {
    const res = await fetch("backend url");
    const data = await res.json();
    // take response and add to stat
    setChartData([
      ...chartData,
      {
        time: data.time,
        value: data.value,
      },
    ]);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    // set interval to update data every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }
    , 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
}
