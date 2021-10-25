import { Flex, Avatar, Text, FlexProps } from "@chakra-ui/react";

interface TestimonyProps extends FlexProps {
    name: string;
    avatar: string;
    depoiment: string;
}

export function Testimony({ name, avatar, depoiment, ...rest }: TestimonyProps) {
    return (
        <Flex alignItems="center" justifyContent="center" flexDir="column" {...rest} maxW={400}>
            <Avatar size="lg" name={name} src={avatar} />
            <Text>{name}</Text>
            <Text>{depoiment}</Text>
        </Flex>
    );
}