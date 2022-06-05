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
import { axiosInstance } from "../../utils/axios";

const defaultData = [
  {
    time: "start",
    value: 0,
  },
];

type chartProp =  {
  time: string;
  value: number
}
export default function Chart() {
  const [chartData, setChartData] = useState<chartProp[]>(defaultData);

  const fetchData = async () => {
    const res: any = await  axiosInstance.get('http://127.0.0.1:8000/api/data')
    setChartData([
      ...chartData,
      {
        time: res.data[0].created_at,
        value: res.data[0].temperature,
      },
    ]);
    // console.log( data[0][time]);
  };

  console.log(chartData)

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
      data={chartData}
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
