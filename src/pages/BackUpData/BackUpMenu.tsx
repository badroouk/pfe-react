import {
    Box,
    Center,
    Stack,
    useColorModeValue,
    Button, 
    ButtonGroup,
    Text
  } from "@chakra-ui/react";
import { useState } from "react";
import { axiosInstance } from "../../utils/axios";
import {DatePicker} from 'chakra-ui-date-input'
  export default function Backup() {
    
    const [startDate,setStrtDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const fetchData = async () => {
      const res: any = await  axiosInstance.get(`http://127.0.0.1:8000/api/backup/${startDate}/${endDate}`)
      const data = res.data;
      console.log(data)
    }
    function fun(){
      fetchData();
   }
    return (
      <Center py={6}>
        <Box
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
           <DatePicker
              placeholder='Date picker placeholder'
              name='date'
              onChange={(Date: string) => setStrtDate(Date)}
              dateFormat = "YYYY-MM-DD"
            />
            <DatePicker
              placeholder='Date picker placeholder'
              name='date'
              onChange={(date: string) => setEndDate(date)}
              dateFormat = "YYYY-MM-DD"
            />
             <Button
                  as={'a'} 
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
                  onClick={fun}
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
                  href={'/backup/water'}
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
                  href={'/backup/uv'}
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
                  href={'/backup/lum'}
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
                  href={'/backup/carb'}
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

                
          </Stack>
        </Box>
      </Center>
    );
  }
  