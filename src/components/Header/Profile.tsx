import { Flex, Box, Text, Avatar, Link, Icon } from '@chakra-ui/react'
import { FaPowerOff } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext'


export function Profile() {
    const { user, signOut } = useAuth();

    return (
        <Flex align="center">

            <Box mr="4" textAlign="right">
                <Link href="/players/me" _hover={{ color: "whiteAlpha.600" }}>
                    <Text>{user?.name}</Text>
                </Link>
                <Text fontSize="small">
                    {user?.email}
                </Text>
            </Box>

            <Avatar size="md" name={user?.name} src={user?.avatar} />

            <Icon
                as={FaPowerOff}
                ml="4"
                h="10"
                w="8"
                _hover={{ color: "whiteAlpha.600" }}
                onClick={signOut}
            />
        </Flex>
    )
}

//Rever o icone e o melhor local para deixar isso PORQUE TA HORRIVEL