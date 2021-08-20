import type { NextPage } from 'next';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { PlayerCard } from '../../components/PlayerCard';
import { Header } from '../../components/Header';

const Players: NextPage = () => {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SimpleGrid flex="1" gap="2" minChildWidth="400px">
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}

export default Players;
