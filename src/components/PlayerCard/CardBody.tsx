import { Box, HStack, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

type CardBodyProps = {
    description: string;
    mobile_number: string;
}

export function CardBody({ description, mobile_number }: CardBodyProps) {
    return (
        <Stack mt="2" height="50%" justify="space-between">
            <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={3}
            >
                {description}
            </Box>

            <HStack justifyContent="space-between">
                <Box
                    fontWeight="semibold"
                >
                    Disponibilidade: Segunda a sexta de tal a tal.
                </Box>

                <Link href={`http://api.whatsapp.com/send?phone=+55${mobile_number}`}>
                    <IconButton
                        aria-label="whatsapp"
                        background="transparent"
                        _hover={{
                            bg: 'whiteAlpha.300'
                        }}
                        icon={<FaWhatsapp size="30px" />}
                    />
                </Link>
            </HStack>
        </Stack>
    );
};