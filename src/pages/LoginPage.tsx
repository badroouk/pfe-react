import React, { SyntheticEvent, useState } from "react";
import { Link as RouteLink, useNavigate} from 'react-router-dom';
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
  FormErrorMessage,
} from "@chakra-ui/react";
// Assets
import hello from "../assets/svg/hello.svg";
import {Navigate} from "react-router-dom";


const Login = (props:{setName: (name: string) =>void}) => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('2');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const isError = email === '';
    const isError2 = password === '';

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        props.setName(content.email);
       if (content.message !== 'invalid user') {
        console.log(content.role)
        setRedirect(true);
       }else
       {
           console.log(content.message)
       }
        
    }

    if (redirect ) {
        return <Navigate replace to="/admin"/>;
    }
    const titleColor = useColorModeValue("#ffc069", "#ffc069");
    const textColor = useColorModeValue("gray.400", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    return (
        <body background-color="#FAF5E4">
        <Flex position='relative' mb='40px'>
        <Flex
            h={{ sm: "initial", md: "75vh", lg: "85vh" }}
            w='100%'
            maxW='1044px'
            mx='auto'
            justifyContent='space-between'
            mb='30px'
            pt={{ sm: "100px", md: "0px" }}>
            <Flex
                alignItems='center'
                justifyContent='start'
                style={{ userSelect: "none" }}
                w={{ base: "100%", md: "50%", lg: "42%" }}>
                <Flex
                    //   direction='column'
                    //   w='445px'
                    //   background='transparent'
                    //   borderRadius='15px'
                    //   p='40px'
                    //   mx={{ base: "100px" }}
                    //   bg={bgColor}
                    //   boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
                    direction='column'
                    w='100%'
                    background='transparent'
                    bg={bgColor}
                    borderRadius='15px'
                    p='48px'
                    mt={{ md: "150px", lg: "80px" }}
                    boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
                    <Heading color={titleColor} fontSize='32px' mb='10px'>
                        Welcome Back
                    </Heading>
                    <Text
                        mb='36px'
                        ms='4px'
                        color={textColor}
                        fontWeight='bold'
                        fontSize='14px'>
                        Enter your email and password to sign in
                    </Text>
                    <form onSubmit={submit}>
                        <FormControl isInvalid={isError || isError2} >
                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                Email
                            </FormLabel>
                            <Input isInvalid={isError}
                                borderRadius='15px'
                               
                                fontSize='sm'
                                type='text'
                                placeholder='Your email adress'
                                size='lg'
                                onChange={e => setEmail(e.target.value)}
                            />   {isError ? (
                                <FormErrorMessage  mb='24px'>Email is required.</FormErrorMessage>
                              ) : (
                                null
                              )}

                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                Password
                            </FormLabel>
                            <Input isInvalid={isError2}
                                borderRadius='15px'
                                fontSize='sm'
                                type='password'
                                placeholder='Your password'
                                size='lg'
                                onChange={e => setPassword(e.target.value)}
                            />
                            {isError2 ? (
                                 <FormErrorMessage mb='36px'>Password is required.</FormErrorMessage>
                                
                            ) : (
                                    null
                            )}
                            <Button
                                fontSize='10px'
                                type='submit'
                                bg='#ffc069'
                                w='100%'
                                h='45'
                                mb='20px'
                                color='white'
                                mt='20px'
                                _hover={{
                                    bg: "#ffc069",
                                }}
                                _active={{
                                    bg: "#ffc069",
                                }}>
                                SIGN IN
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
                            Don't have an account?
                            <Link as = {RouteLink} color={titleColor}  to="/register" ms='5px' fontWeight='bold'  >
                                Sign Up
                            </Link>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box
                display={{ base: "none", md: "block" }}
                overflowX='hidden'
                h='100%'
                w='40vw'
                position='absolute'
                right='0px'>
                <Box
                    bgColor = "#FAF5E4"
                    bgImage={hello}
                    w='100%'
                    h='100%'
                    bgSize='cover'
                    bgPosition='50%'
                    position='absolute'
                    borderBottomLeftRadius='20px'></Box>
            </Box>
        </Flex>
    </Flex>
    </body>
    );
};

export default Login;