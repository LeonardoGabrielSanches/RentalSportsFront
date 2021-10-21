import { Flex, Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Flex maxW={1400} mx="auto">
            <Box w="container.lg" p="10">
                <Text as="h1" fontSize="xxx-large">Sabe aquela hora que falta só um pra completar seu time na pelada e não consegue encontrar?</Text>
                <Text mt="4" as="p" fontSize="xl">O <b>Alugol</b><Text as="b" color="green.500">. </Text>
                    é a solução perfeita para você!
                    Aqui você irá encontrar os jogadores para completar seu time naquela pelada do fim de semana😀!</Text>
            </Box>
        </Flex>
    )
};

export default Home;