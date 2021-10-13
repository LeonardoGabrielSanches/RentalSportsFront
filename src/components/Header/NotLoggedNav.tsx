import { Center, Divider, Link, Stack, Text } from "@chakra-ui/react";

export function NotLoggedNav() {
    return (
        <Stack direction="row" spacing="4">
            <Link href="/players/new" _hover={{ textDecoration: "none" }}>
                <Text
                    fontSize={["xl", "xxl"]}
                    letterSpacing="tight"
                    color="green.500"
                    _hover={{ color: "green.600" }}
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
                    color="green.500"
                    _hover={{ color: "green.600" }}
                >
                    Login
                </Text>
            </Link>
        </Stack>
    );
}
