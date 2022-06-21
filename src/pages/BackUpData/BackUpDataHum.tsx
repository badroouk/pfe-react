import { Center, Box, useColorModeValue, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  LineChart,
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
    time: [],
    value: [0],
  },
];

type chartProp =  {
  time: string[];
  value: number[]
}
export default function BackUpHum() {
    const location = useLocation();
    const data = location.state;
    const end = data[0].endDate;
    const start = data[0].startDate;
    const [chartData, setChartData] = useState<chartProp[]>(defaultData);
    const  Data: chartProp[] = []
    const fetchData = async () => {
    const res: any = await  axiosInstance.get(`http://127.0.0.1:8000/api/backup/${start}/${end}`)
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
        const  prop : chartProp = {
            time:data[i].created_at,
            value:data[i].humidity,
          } 
          Data.push(prop);
        
        setChartData(Data)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Center py={6}>
    <Box
      marginTop='5%'
      maxW={"1000px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Stack
        textAlign={"center"}
        p={6}
        color={useColorModeValue("gray.800", "white")}
        align={"center"}
      >
    <LineChart
      width={1000}
      height={700}
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
    </Stack>
        </Box>
      </Center>
  );
}
