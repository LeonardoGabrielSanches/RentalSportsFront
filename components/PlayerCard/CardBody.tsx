import { Box, HStack, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export function CardBody() {
    return (
        <Stack mt="2" height="65%" justify="space-between">
            <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={3}
            >
                Uma breve descrição sobre o jogador.

            </Box>

            <HStack justifyContent="space-between">
                <Box
                    fontWeight="semibold"
                >
                    Disponibilidade: Segunda a sexta de tal a tal.
                </Box>

                <Link href="http://api.whatsapp.com/send?phone=+5515996932204">
                    <IconButton
                        aria-label="whatsapp"
                        background="transparent"
                        _hover={{
                            bg: 'gray.700'
                        }}
                        icon={<FaWhatsapp size="30px" />}
                    />
                </Link>
            </HStack>
        </Stack>
    );
};