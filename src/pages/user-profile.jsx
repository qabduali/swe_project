import React, {useEffect, useState} from 'react';
import {Box, Image, Text} from "@chakra-ui/react";

const userInfo = {
    guest_id: 3234,
    guest_name: "sdfsdf",
    guest_surname: "dsfsdfsdf",
    id_type: "324234",
    guest_mobile_number: "848345345",
    booking_id: 234,
}

const bookings = [
    {
        booking_id: 12,
        guests_num: 22,
        from_date: "18.20.21",
        to_date: "30.40.30",
        room_id: "123",
        bill: 123,
    },
    {
        booking_id: 12,
        guests_num: 22,
        from_date: "18.20.21",
        to_date: "30.40.30",
        room_id: "123",
        bill: 123,
    },
    {
        booking_id: 12,
        guests_num: 22,
        from_date: "18.20.21",
        to_date: "30.40.30",
        room_id: "123",
        bill: 123,
    }
]

export const UserProfile = () => {

    const [user, setUser] = useState(userInfo);


    useEffect(() => {
        //CALL API AND SET USER
    }, [])

    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            height={"calc(100vh - 70px)"}
        >
            <Box
                marginLeft={"20px"}
                marginTop={"20px"}
                backgroundColor={"gray"}
                padding={"10px"}
                borderRadius={"9px"}
                // height={"100%"}
                marginBottom={"20px"}
                width={"320px"}
            >
                <Text fontSize={25} fontWeight={800} marginBottom={"15px"}>User information</Text>
                <Image
                    src={"https://html5css.ru/howto/img_avatar.png"}
                    borderRadius={"8px"}
                    marginBottom={"15px"}
                />
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    marginBottom={"7px"}
                    fontSize={18}
                >
                    <Text>ID:</Text>
                    <Text fontWeight={700}>{userInfo.id_type}</Text>
                </Box>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    marginBottom={"7px"}
                    fontSize={15}
                >
                    <Text>Name:</Text>
                    <Text fontWeight={700}>{userInfo.guest_name}</Text>
                </Box>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    marginBottom={"7px"}
                    fontSize={18}
                >
                    <Text>Surname:</Text>
                    <Text fontWeight={700}>{userInfo.guest_surname}</Text>
                </Box>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    fontSize={18}
                >
                    <Text>Phone number:</Text>
                    <Text fontWeight={700}>{userInfo.guest_mobile_number}</Text>
                </Box>
            </Box>
            <Box
                margin={"20px"}
                backgroundColor={"gray"}
                borderRadius={"9px"}
                padding={"10px"}
                flexGrow={1}
            >
                <Text fontSize={25} marginBottom={"15px"} fontWeight={800}>History</Text>
                <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    paddingLeft={"10px"}
                    paddingRight={"10px"}
                    paddingTop={"5px"}
                    paddingBottom={"5px"}
                    marginBottom={"10px"}
                    backgroundColor={"#636E72"}
                    borderRadius={"7px"}
                >
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >
                            Booking id
                        </Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >From date</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >To date</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Guest num</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Room id</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Bill</Text>
                    </Box>
                </Box>

                {
                    bookings.map((booking) => {
                        return (
                            <Box
                                w={"100%"}
                                display={"flex"}
                                flexDirection={"row"}
                                alignItems={"center"}
                                paddingLeft={"10px"}
                                paddingRight={"10px"}
                                borderRadius={"7px"}
                                marginBottom={"10px"}
                            >
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{booking.booking_id}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{booking.from_date}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{booking.to_date}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{booking.guests_num}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{booking.room_id}</Text>
                                </Box>
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Text
                                        color={"#336e7b"}
                                    >{booking.bill}</Text>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}