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
                backgroundColor={"#0b7fab"}
            >
                <Box marginX={"auto"} display={"flex"}>
                    <Text
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        _hover={{color: "#1e517b"}}
                        fontSize={"16px"}
                        fontWeight={500}
                        lineHeight={"65px"}
                        height={"65px"}
                        borderBottom={location.pathname.includes("/home") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/home');
                        }}
                    >
                        home
                    </Text>
                    <Text
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        _hover={{color: "#1e517b"}}
                        fontSize={"16px"}
                        fontWeight={500}
                        lineHeight={"65px"}
                        height={"65px"}
                        borderBottom={location.pathname.includes("/booking") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/booking');
                        }}
                    >
                        booking
                    </Text>
                    <Text
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        marginLeft={"12px"}
                        _hover={{color: "#1e517b"}}
                        fontSize={"16px"}
                        lineHeight={"65px"}
                        height={"65px"}
                        fontWeight={500}
                        borderBottom={location.pathname.includes("/history") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/history');
                        }}
                    >
                        history
                    </Text>
                    <Text
                        paddingLeft={"7px"}
                        paddingRight={"7px"}
                        marginLeft={"12px"}
                        _hover={{color: "#1e517b"}}
                        fontSize={"16px"}
                        lineHeight={"65px"}
                        height={"65px"}
                        fontWeight={500}
                        borderBottom={location.pathname.includes("/settings") ? "2.5px solid #2F2F2F" : ""}
                        onClick={() => {
                            history.push('/settings');
                        }}
                    >
                        settings
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
                                    _hover={{ background: "#080e2c" }}
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
                                    _hover={{ background: "#080e2c" }}
                                    _active={{ background: "#080e2c "}}
                                    onClick={() => {
                                    }}
                                >
                                    Registration
                                </Button>
                            </Box>
                            :
                            <Button
                                width={"auto"}
                                h="35px"
                                marginX="auto"
                                background="#4267B2"
                                borderRadius="8px"
                                color="#FFFFFF"
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