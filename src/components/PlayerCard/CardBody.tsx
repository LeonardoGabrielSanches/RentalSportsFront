import { Tooltip, Box, HStack, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type CardBodyProps = {
    description: string;
    mobile_number: string;
}

export function CardBody({ description, mobile_number }: CardBodyProps) {
    const [needTooltip] = useState(() => {
        if(description.length > 95)
            return true;
        
        return false;
    });


    return (
        <Stack mt="2" height="50%" justify="space-between">
            <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={3}
            >
                {description.slice(0, 95)}
                {needTooltip && <Tooltip label={description}>...</Tooltip>}
            </Box>

            <HStack justifyContent="flex-end">
                <Text>Whatsapp</Text>
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