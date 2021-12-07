import React from 'react';
import {Box, Flex, Image, Text, Button} from "@chakra-ui/react";
import {useHistory, useLocation} from "react-router-dom";


export const Navbar = () => {

    const history = useHistory();
    const location = useLocation();
    const token = "";

    return (
        <div style={{width: "100%", height: "65px"}}>
            <Flex
                width={"100%"}
                height={"70px"}
                alignItems={"center"}
                backgroundColor={"#1f2333"}
            >
                <Image src = {"https://s2.qwant.com/thumbr/0x380/4/f/747c10a6bdeb1ca13540152e81aabb4aad4cc68bf85be8fcb033fe8ee1c23f/q_letter_logo.png?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2068059%2Fscreenshots%2F4235024%2Fq_letter_logo.png&q=0&b=1&p=0&a=0"} radius="full" height='95px' width='122px'/>
                <Box marginX={"auto"} display={"flex"}>
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        fontWeight={500}
                        lineHeight={"65px"}
                        height={"65px"}
                        borderBottom={location.pathname.includes("/home") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/home');
                        }}
                    >
                        Home
                    </Text>
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        fontWeight={500}
                        lineHeight={"65px"}
                        height={"65px"}
                        borderBottom={location.pathname.includes("/booking") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/booking');
                        }}
                    >
                        Booking
                    </Text>
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        marginLeft={"12px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        lineHeight={"65px"}
                        height={"65px"}
                        fontWeight={500}
                        borderBottom={location.pathname.includes("/history") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/history');
                        }}
                    >
                        History
                    </Text>
                    <Text
                        color={"#59c2b8"}
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        marginLeft={"12px"}
                        _hover={{color: "#ffffff"}}
                        fontSize={"16px"}
                        lineHeight={"65px"}
                        height={"65px"}
                        fontWeight={500}
                        borderBottom={location.pathname.includes("/settings") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/settings');
                        }}
                    >
                        Settings
                    </Text>
                </Box>
                <Box marginLeft={"auto"} marginRight={"20px"}>
                    {
                        token === "" ?
                            <Box
                                display={"flex"}
                                flexDirection={"row"}
                                alignItems={"center"}
                            >
                                <Button
                                    width={"auto"}
                                    marginRight={"9px"}
                                    h="35px"
                                    marginLeft="auto"
                                    background="#4267B2"
                                    borderRadius="8px"
                                    color="#FFFFFF"
                                    border={"1px solid #4267B2"}
                                    _hover={{ background: "#080e2c", color:"#59c2b8" }}
                                    _active={{ background: "#080e2c "}}
                                    onClick={() => {
                                    }}
                                >
                                    Log in
                                </Button>
                                <Text>
                                    or
                                </Text>
                                <Button
                                    width={"auto"}
                                    h="35px"
                                    marginX="auto"
                                    marginLeft={"9px"}
                                    background="#4267B2"
                                    borderRadius="8px"
                                    color="#FFFFFF"
                                    border={"1px solid #4267B2"}
                                    _hover={{ background: "#080e2c", color:"#59c2b8" }}
                                    _active={{ background: "#080e2c"}}
                                    onClick={() => {
                                    }}
                                >
                                    Register
                                </Button>
                            </Box>
                            :
                            <Button
                                width={"auto"}
                                h="35px"
                                marginX="auto"
                                background="#4267B2"
                                borderRadius="8px"
                                color="#3C7376"
                                border={"1px solid #4267B2"}
                                _hover={{ background: "#080e2c" }}
                                _active={{ background: "#080e2c" }}
                                onClick={() => {
                                }}
                            >
                                Log out
                            </Button>
                    }
                </Box>
            </Flex>
            {/*<Divider height={"1px"} backgroundColor={"#B2BEC3"}/>*/}
        </div>
    )
}