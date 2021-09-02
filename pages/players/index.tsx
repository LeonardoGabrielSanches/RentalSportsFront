import type { GetServerSideProps, NextPage } from 'next';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { PlayerCard } from '../../components/PlayerCard';
import { Player } from '../../models/player';
import api from '../../services/api';
import { Header } from '../../components/Header';

type PlayersPageProps = {
    players: Player[],
}

const PlayersPage: NextPage<PlayersPageProps> = ({ players }: PlayersPageProps) => {
    return (
        <Flex direction="column" h="100vh" >
            <Header />
            <Flex w="100%" maxWidth={1480} mx="auto" px="6">
                <SimpleGrid flex="1" gap="2" minChildWidth="400px">
                    {players.map(player => (
                        <PlayerCard key={player.id} player={player} />
                    ))}
                </SimpleGrid>
            </Flex>
        </Flex >
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await api.get<Player[]>('player');

    return {
        props: {
            players: response.data
        }
    }
}

export default PlayersPage;
