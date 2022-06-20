import {
    Box,
    Center,
    Stack,
    useColorModeValue,
    Button, 
    ButtonGroup,
    Text
  } from "@chakra-ui/react";
  import Chart from "../components/chart/TempChart";
  
  export default function MonitoringPage() {
    return (
      <Center py={6}>
        <Box
          marginTop ='10%'
          maxW={"1000px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
             <Button
                  as={'a'} 
                  href={'/realtime'}
                  bg='#ffc069'
                  fontSize='20px'
                  color='white'
                  fontWeight='bold'
                  w='100%'
                  h='45'
                  mb='24px'
                  _hover={{
                    bg: '#f2af52',
                  }}
                  _active={{
                    bg:'#ffc069',
                  }}>
                  Real-time data
                </Button>

                <Button 
                  as={'a'}
                  href={'/backup'}
                  bg='#ffc069'
                  fontSize='20px'
                  color='white'
                  fontWeight='bold'
                  w='100%'
                  h='45'
                  mb='24px'
                  _hover={{
                    bg: '#f2af52',
                  }}
                  _active={{
                    bg:'#ffc069',
                  }}>
                  Back-up data
                </Button>
                
          </Stack>
        </Box>
      </Center>
    );
  }
  