import { Avatar, Box, HStack, WrapItem } from "@chakra-ui/react";

export function CardHeader() {
    return (
        <HStack>
            <WrapItem>
                <Avatar
                    size="xl"
                    name="Leonardo Sanches"
                    src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.6435-9/91973803_2823638084338334_8492579082242883584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Eh1SNWEBYnsAX-yJ4D4&tn=9mAXzOUxSqH8gdgA&_nc_ht=scontent.fcpq4-1.fna&oh=805b4311da2648fb395e2f6f8331da32&oe=61437C00"
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
                    Leonardo Gabriel Sanches
                </Box>
            </Box>

        </HStack>
    );
};