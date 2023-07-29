"use client"
import { Flex,Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex fontSize={"lg"} flexDir={"row-reverse"} padding={"1rem 2rem"} bgColor={"black"}  color={"white"}>
            <Flex gap={'5rem'}>

            <Text>Home</Text>
            <Text>About</Text>
            <Text>Projects</Text>
            </Flex>
        </Flex>
    );
}
 
export default Navbar;