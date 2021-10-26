import { Flex, Box, Text, Avatar, Link, Icon, Center, Divider, Stack } from '@chakra-ui/react'
import { FaPowerOff } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext'


export function Profile() {
    const { user, signOut } = useAuth();

    return (
        <Stack direction="row" spacing="4" alignItems="center">
            <Link href="/" _hover={{ textDecoration: "none" }}>
                <Text
                    fontSize={["xl", "xxl"]}
                    letterSpacing="tight"
                    _hover={{ color: "whiteAlpha.600" }}
                >
                    Home
                </Text>
            </Link>

            <Center height="8">
                <Divider orientation="vertical" />
            </Center>

            <Link href="/players" _hover={{ textDecoration: "none" }}>
                <Text
                    fontSize={["xl", "xxl"]}
                    letterSpacing="tight"
                    _hover={{ color: "whiteAlpha.600" }}
                >
                    Jogadores
                </Text>
            </Link>

            <Center height="8">
                <Divider orientation="vertical" />
            </Center>

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
        </Stack>
    )
}