import { useEffect, useState } from "react";
import {
  LineChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line
} from "recharts";
import { axiosInstance } from "../../utils/axios";

const defaultData = [
  {
    time: "",
    value: 0,
  },
];

type chartProp =  {
  time: string;
  value: number
}
export default function LightChart() {
  const [chartData, setChartData] = useState<chartProp[]>(defaultData);

  const fetchData = async () => {
    const res: any = await  axiosInstance.get('http://127.0.0.1:8000/api/data')
    const data = res.data[0]
    const  a1 : chartProp = {
      time:data.created_at,
      value: data.luminosity,
    }
    function containsObject(obj: chartProp , list: string | any[]) {
      var i;
      for (i = 0; i < list.length; i++) {
          if (list[i].time === obj.time) {
              return true;
          }
      }
      return false;
  }  
    if(!containsObject(a1, chartData)) {
      chartData.push(a1)
      setChartData([
        ...chartData,
      ]);
      if (chartData.length > 10) {
        chartData.shift()
      }
    }
   
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
    <LineChart
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
      <Line dataKey="value" fill="#82ca9d" />
    </LineChart>
  );
}
