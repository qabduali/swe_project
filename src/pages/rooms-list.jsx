import React, {useEffect, useState} from "react";
import {Box, Button, Input, Text} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

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

    const { isOpen, onOpen, onClose } = useDisclosure();


    const [filteredRooms, setFilteredRooms] = useState([]);
    const [roomIdFilter, setRoomIdFilter] = useState("");
    const [floorFilter, setFloorFilter] = useState("");
    const [occupancyFilter, setOccupancyFilter] = useState("");

    useEffect(() => {
        const newFilteredRooms = testData.filter((room) => {

        })
    }, [roomIdFilter, floorFilter, occupancyFilter])

    return (
        <Box
            backgroundColor={"#dfe6e9"}
            height={"calc(100vh - 60px)"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Booking</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box
                            marginBottom={"10px"}
                        >
                            <Text>From</Text>
                            <Input placeholder="select date"/>
                        </Box>
                        <Box>
                            <Text>To</Text>
                            <Input placeholder="select date"/>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Book</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Box
                marginTop={"34px"}
                height={"70px"}
                width={"calc(100% - 25px)"}
                backgroundColor={"#b2bec3"}
                borderRadius={"10px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
            >
                <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    paddingLeft={"10px"}
                    paddingRight={"10px"}
                    paddingTop={"5px"}
                    paddingBottom={"5px"}
                    marginBottom={"10px"}
                    borderRadius={"7px"}
                    alignItems={"center"}
                >
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Input
                            placeholder={"filter by id"}
                            width={"90%"}
                            color={"black"}
                            borderColor={"black"}
                            value = {roomIdFilter}
                            onChange = {(e) => setRoomIdFilter(e.target.value)}
                        />
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Input
                            placeholder={"filter by floor"}
                            width={"90%"}
                            color={"black"}
                            borderColor={"black"}
                        />
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Input
                            placeholder={"filter by room #"}
                            width={"90%"}
                            color={"black"}
                            borderColor={"black"}
                        />
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Input
                            placeholder={"filter b"}
                            width={"90%"}
                            color={"black"}
                            borderColor={"black"}
                        />
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Select
                            placeholder='Filter by status'
                            width={"90%"}
                        >
                            <option value='ALL'>all</option>
                            <option value='CLEANED'>cleaned</option>
                            <option value='NOT_CLEANED'>not cleaned</option>
                        </Select>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Select
                            placeholder='Filter by occupancy'
                            width={"90%"}
                        >
                            <option value='ALL'>all</option>
                            <option value='OCCUPIED'>occupied</option>
                            <option value='FREE'>free</option>
                        </Select>
                    </Box>
                </Box>
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
                            Room id
                        </Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Floor</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Number</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Status</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Occupancy</Text>
                    </Box>
                    <Box
                        flex={"1 1 0px"}
                    >
                        <Text
                            color={"black"}
                        >Book</Text>
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
                                marginBottom={"5px"}
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
                                <Box
                                    flex={"1 1 0px"}
                                >
                                    <Button
                                        backgroundColor={"green"}
                                        height={"32px"}
                                        width={"100%"}
                                        onClick={() => {
                                            onOpen();
                                        }}
                                    >
                                        Book
                                    </Button>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}