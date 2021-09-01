import { Divider, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { Logo } from "./Logo";
import { NotLoggedNav } from "./NotLoggedNav";
import { Profile } from "./Profile";

export function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <Flex
                as="header"
                w="100%"
                maxWidth={1480}
                h="20"
                mx="auto"
                mt="4"
                px="6"
                align="center">
                <Logo />

                <Flex align="center" ml="auto">
                    {isAuthenticated ? (
                        <Profile />
                    ) : (
                        <NotLoggedNav />
                    )}
                </Flex>
            </Flex>

            <Divider w="95%" mx="auto" />
        </>
    )
};