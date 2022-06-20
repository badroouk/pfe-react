import {
    Box,
    Center,
    Stack,
    useColorModeValue,
    Button, 
    ButtonGroup,
    Text
  } from "@chakra-ui/react";
  
  export default function RealTimeMenu() {
    return (
      <Center py={6}>
        <Box
          marginTop='10%'
          maxW={"1000px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          rounded={"md"}
          overflow={"hidden"}
        >
     
             <Button
                  as={'a'} 
                  href={'/realtime/temp'}
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
                  Temperature
                </Button>

                <Button 
                  as={'a'}
                  href={'/realtime/humi'}
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
                  Humidity
                </Button>
                <Button 
                  as={'a'}
                  href={'/realtime/water'}
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
                  Precipitation
                </Button>
                <Button 
                  as={'a'}
                  href={'/realtime/uv'}
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
                  Ultraviolet
                </Button>
                <Button 
                  as={'a'}
                  href={'/realtime/lum'}
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
                  Luminosity
                </Button>
                <Button 
                  as={'a'}
                  href={'/realtime/carb'}
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
                  Carbonmonoxide
                </Button>
        </Box>
      </Center>
    );
  }
  