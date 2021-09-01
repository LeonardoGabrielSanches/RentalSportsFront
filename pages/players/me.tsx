import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Header } from "../../components/Header";

const Me: NextPage = () => {
    return (
        <Flex direction="column" h="100vh" >
            <Header />
            <p>Sim</p>
        </Flex>
    );
}

export default Me;