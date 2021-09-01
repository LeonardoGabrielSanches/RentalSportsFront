import { Flex, Box, Text, Avatar, Link } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'


export function Profile() {
    const { user } = useAuth();

    return (
        <Flex align="center">

            <Box mr="4" textAlign="right">
                <Link href="/">
                    <Text>{user?.name}</Text>
                </Link>
                <Text color="gray.300" fontSize="small">
                    {user?.email}
                </Text>
            </Box>

            <Avatar size="md" name="Leonardo Sanches" src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.6435-9/49126961_2159796720739184_7013716289113817088_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=k9XDiZHYY8kAX-G7N7j&_nc_ht=scontent.fcpq4-1.fna&oh=4eb78cc2e36a2a9297e0a2dcfa03d120&oe=61448CF9" />
        </Flex>
    )
}