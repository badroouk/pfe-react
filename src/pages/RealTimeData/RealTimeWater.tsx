import {
  Box,
  Center,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import WaterChart from "../../components/chart/RealTimeChart/WaterChart";


export default function WaterRealChart() {
  return (
    <Center py={6}>
      <Box
        maxW={"1000px"}
        marginTop='10%'
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
          <WaterChart />
        </Stack>
      </Box>
    </Center>
  );
}
