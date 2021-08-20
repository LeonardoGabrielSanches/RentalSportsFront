import { Box } from "@chakra-ui/react";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

export function PlayerCard() {
    return (
        <Box height="80" borderWidth="1px" borderRadius="xl" overflow="hidden" p="5">
            <CardHeader />

            <CardBody />
        </Box>
    );
};