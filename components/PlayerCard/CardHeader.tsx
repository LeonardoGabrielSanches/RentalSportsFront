import { Avatar, Box, HStack, WrapItem } from "@chakra-ui/react";

type CardHeaderProps = {
    name: string;
    avatar_url: string;
}

export function CardHeader({ name, avatar_url }: CardHeaderProps) {
    return (
        <HStack>
            <WrapItem>
                <Avatar
                    size="xl"
                    name={name}
                    src={avatar_url}
                />
            </WrapItem>


            <Box d="flex" alignItems="baseline">
                <Box
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="3"
                >
                    {name}
                </Box>
            </Box>

        </HStack>
    );
};