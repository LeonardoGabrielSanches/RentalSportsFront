import { Link, Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Link href="/players" _hover={{ textDecor: "none", color: "green.600" }}>
            <Text
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                letterSpacing="tight"
            >
                Alugol
                <Text as="span" ml="1" color="green.500">.</Text>
            </Text>
        </Link>
    )
}