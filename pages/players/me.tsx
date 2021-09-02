import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Header } from "../../components/Header";

const Me: NextPage = () => {
    return (
        <Flex direction="column" h="100vh" >
            <Header />
            <Flex w="100%" maxWidth={1400} mx="auto" >
                <p>Sim</p>
            </Flex>
        </Flex>
    );
}

export default Me;