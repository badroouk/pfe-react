import React, { SyntheticEvent, useState } from "react";
import { Link as RouteLink, Navigate} from 'react-router-dom';
// Chakra imports
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
    FormHelperText,
    FormErrorMessage,
    HStack,
    Icon,
} from "@chakra-ui/react";
// Assets
import hello from "../assets/svg/hello.svg";


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
    
        const response  = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();
        if (content.email !== '') {
            setRedirect(true);
        }
      
    }
    if (redirect) {
        return <Navigate replace to="/login"/>;
    }

    const titleColor = useColorModeValue("#ffc069", "#ffc069");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
    return (
        <Flex
          direction='column'
          alignSelf='center'
          justifySelf='center'
          overflow='hidden'>
          <Box
            position='absolute'
            minH={{ base: "70vh", md: "50vh" }}
            w={{ md: "calc(100vw - 50px)" }}
            borderRadius={{ md: "15px" }}
            left='0'
            right='0'
            bgRepeat='no-repeat'
            overflow='hidden'
            zIndex='-1'
            top='0' 
            bgColor = "#FAF5E4"
            bgImage={hello}
            bgSize='cover'
            mx={{ md: "auto" }}
            mt={{ md: "14px" }}></Box>
          <Flex
            direction='column'
            textAlign='center'
            justifyContent='center'
            align='center'
            mt='6.5rem'
            mb='30px'>
            <Text fontSize='4xl' color='black' fontWeight='bold'>
              Welcome!
            </Text>
          
          </Flex>
          <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
            <Flex
              direction='column'
              w='445px'
              background='transparent'
              borderRadius='15px'
              p='40px'
              mx={{ base: "100px" }}
              bg={bgColor}
              boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
              <Text
                fontSize='xl'
                color={textColor}
                fontWeight='bold'
                textAlign='center'
                mb='22px'>
                Register With
              </Text>
            <form onSubmit={submit}>
              <FormControl >
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Email
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  placeholder='Your email address'
                  mb='24px'
                  size='lg'
                  onChange={e => setEmail(e.target.value)}
                />
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Password
                </FormLabel>
                <Input
                  fontSize='sm'
                  ms='4px'
                  borderRadius='15px'
                  type='password'
                  placeholder='Your password'
                  mb='24px'
                  size='lg'
                  onChange={e => setPassword(e.target.value)}
                />
                <Button 
                  type='submit'
                  bg='#ffc069'
                  fontSize='10px'
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
                  SIGN UP
                </Button>
              </FormControl>
              </form>
              <Flex
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                maxW='100%'
                mt='0px'>
                <Text color={textColor} fontWeight='medium'>
                  Already have an account?
                  <Link
                    color={titleColor}
                    as='span'
                    ms='5px'
                    href='#'
                    fontWeight='bold'>
                    Sign In
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      );
}

export default SignUp;
