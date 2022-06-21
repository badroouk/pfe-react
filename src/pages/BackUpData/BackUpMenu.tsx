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
import { DatePicker } from 'chakra-ui-date-input'
import { Link } from "react-router-dom";
export default function Backup() {

  const [startDate, setStrtDate] = useState('')
  const [endDate, setEndDate] = useState('')

  var data = [
    {
      startDate: startDate,
      endDate: endDate
    }
  ]
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
            dateFormat="YYYY-MM-DD"
          />
          <DatePicker
            placeholder='Date picker placeholder'
            name='date'
            onChange={(date: string) => setEndDate(date)}
            dateFormat="YYYY-MM-DD"
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
              bg: '#ffc069',
            }}>
            <Link to="/backup/temp" state={ data }>Temperature</Link>
          </Button>

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
              bg: '#ffc069',
            }}>
            <Link to="/backup/hum" state={ data }>Humidity</Link>
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
              bg: '#ffc069',
            }}>
              <Link to="/backup/water" state={ data }>Precipitation</Link>
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
              bg: '#ffc069',
            }}>
            <Link to="/backup/uv" state={ data }>Ultraviolet</Link>
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
              bg: '#ffc069',
            }}>
            <Link to="/backup/light" state={ data }>Luminosity</Link>
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
              bg: '#ffc069',
            }}>
             <Link to="/backup/co" state={ data }>Carbonmonoxide</Link>
          </Button>


        </Stack>
      </Box>
    </Center>
  );
}
