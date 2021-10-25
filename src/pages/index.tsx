import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { Testimony } from "../components/Testimony";

const Home: NextPage = () => {
    return (
        <Flex maxW={1400} mx="auto" flexDir="column">
            <Box as="section" w="container.lg" p="10">
                <Text as="h1" fontSize="xxx-large">Sabe aquela hora que falta só um pra completar seu time na pelada e não consegue encontrar?</Text>
                <Text mt="4" as="p" fontSize="xl">O <b>Alugol</b><Text as="b" color="green.500">. </Text>
                    é a solução perfeita para você!
                    Aqui você irá encontrar os jogadores para completar seu time naquela pelada do fim de semana😀!</Text>
                <Button
                    mt="8"
                    p="4"
                    colorScheme="green"
                >
                    Ver Jogadores
                </Button>
            </Box>

            <Box as="section" w="container.lg" p="10" mt="16">
                <Text as="h1" fontSize="xxx-large" textAlign="center" mb="8">DEPOIMENTOS</Text>

                <Flex justifyContent="space-around">
                    <Testimony
                        name="André Marfil"
                        avatar="https://i.ibb.co/rkHTw7g/dede.jpg"
                        depoiment="Esse aplicativo ajudou meu grupo de amigos muitas vezes, precisavamos de um goleiro e através da plataforma foi muito fácil encontrar um."
                    />
                    <Testimony
                        name="Gabriel Gurris"
                        avatar="https://i.ibb.co/gtCN8WS/biel.jpg"
                        depoiment="A plataforma me possibilita jogar muitas vezes durante a semana e com pessoas diferentes."
                    />
                </Flex>
            </Box>
        </Flex >
    )
};

export default Home;