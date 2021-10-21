import { Box } from "@chakra-ui/react";
import { Player } from "../../models/player";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

type PlayerCardProps = {
    player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
    return (
        <Box
            height="60"
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            p="5"
            backgroundColor="whiteAlpha.300"
            m="2"
        >
            <CardHeader name={player.name} avatar_url={player.avatar} />

            <CardBody description={player.description} mobile_number={player.mobileNumber} />
        </Box>
    );
};