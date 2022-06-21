import {
    Box,
    Center,
    Stack,
    useColorModeValue,
    Button, 
    ButtonGroup,
    Text
  } from "@chakra-ui/react";
  
  export default function AdminAcceuilPage() {
    return (
      <Center py={6}>
        <Box
          marginTop="10%"
          maxW={"1000px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          rounded={"md"}
          overflow={"hidden"}
        >
    
             <Button
                  as={'a'} 
                  href={'/admin'}
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
                  Admin
                </Button>
                <Button 
                  as={'a'}
                  href={'/monitoring'}
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
                  Monitoring
                </Button>
                <Button 
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
                  Actuall conditions
                </Button>
                <Button 
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
                  Statistics
                </Button>
          
        </Box>
      </Center>
    );
  }
  