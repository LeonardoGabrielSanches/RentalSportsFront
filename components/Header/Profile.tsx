import { Flex, Box, Text, Avatar, Link } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'


export function Profile() {
    const { user } = useAuth();

    return (
        <Flex align="center">

            <Box mr="4" textAlign="right">
                <Link href="/player/me">
                    <Text>{user?.name}</Text>
                </Link>
                <Text color="gray.300" fontSize="small">
                    {user?.email}
                </Text>
            </Box>

            <Avatar size="md" name={user?.name} src={user?.avatarUrl} />
        </Flex>
    )
}