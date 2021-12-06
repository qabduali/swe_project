import React from "react";
import {Box, Text} from "@chakra-ui/react";


const testData = [
    {
        room_id: 4,
        room_type_id: 34,
        room_number: "324",
        floor: 3,
        cleaned: true,
        occupancy: false
    },
    {
        room_id: 43,
        room_type_id: 3234,
        room_number: "324",
        floor: 3,
        cleaned: true,
        occupancy: false
    },
    {
        room_id: 45,
        room_type_id: 34,
        room_number: "324",
        floor: 3,
        cleaned: true,
        occupancy: false
    },
    {
        room_id: 43,
        room_type_id: 344,
        room_number: "3424",
        floor: 33,
        cleaned: true,
        occupancy: false
    }
]

export const RoomsList = () => {

    return (
        <Box
            backgroundColor={"#dfe6e9"}
            height={"100%"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            <Box
                marginTop={"34px"}
                height={"70px"}
                width={"calc(100% - 25px)"}
                backgroundColor={"#b2bec3"}
                borderRadius={"10px"}
            >

            </Box>
            <Box
                marginTop={"14px"}
                width={"calc(100% - 25px)"}
            >
                <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    paddingLeft={"10px"}
                    paddingRight={"10px"}
                    paddingTop={"5px"}
                    paddingBottom={"5px"}
                    backgroundColor={"#636E72"}
                    borderRadius={"7px"}
                >
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"#336e7b"}
                        >
                            Room id
                        </Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"#336e7b"}
                        >Floor</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"#336e7b"}
                        >Number</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"#336e7b"}
                        >Status</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"#336e7b"}
                        >Occupancy</Text>
                    </Box>
                </Box>
                {
                    testData.map((room) => {
                        return (
                            <Box
                                display={"flex"}
                                flexDirection={"row"}
                                borderRadius={"7px"}
                                paddingLeft={"10px"}
                                paddingRight={"10px"}
                            >
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.room_id}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.floor}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.room_number}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.cleaned ? "Cleaned" : "Not cleaned"}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{room.occupancy ? "Occupied" : "Free"}</Text>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}