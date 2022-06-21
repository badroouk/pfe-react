import {
  Box,
  Center,
  Stack,
  useColorModeValue,
  Button, 
  ButtonGroup
} from "@chakra-ui/react";
import CoChart from "../../components/chart/RealTimeChart/CoChart";


export default function CarbRealChart() {
  return (
    <Center py={6}>
      <Box
        marginTop='10%'
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
          <CoChart />
        </Stack>
      </Box>
    </Center>
  );
}
