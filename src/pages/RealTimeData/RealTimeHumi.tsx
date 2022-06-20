import {
  Box,
  Center,
  Stack,
  useColorModeValue,
  Button, 
  ButtonGroup
} from "@chakra-ui/react";
import HumidityChart from "../../components/chart/HumidityChart";

export default function HumidityRealChart() {
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
          <HumidityChart />
        </Stack>
      </Box>
    </Center>
  );
}
