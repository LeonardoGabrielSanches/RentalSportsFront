import { Center, Divider, Link, Stack, Text } from "@chakra-ui/react";

export function NotLoggedNav() {
    return (
        <Stack direction="row" spacing="4">
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

            <Link href="/players/new" _hover={{ textDecoration: "none" }}>
                <Text
                    fontSize={["xl", "xxl"]}
                    letterSpacing="tight"
                    _hover={{ color: "whiteAlpha.600" }}
                >
                    Cadastrar
                </Text>
            </Link>

            <Center height="8">
                <Divider orientation="vertical" />
            </Center>

            <Link href="/login" _hover={{ textDecoration: "none" }}>
                <Text
                    fontSize={["xl", "xxl"]}
                    letterSpacing="tight"
                    _hover={{ color: "whiteAlpha.600" }}
                >
                    Login
                </Text>
            </Link>
        </Stack>
    );
}
