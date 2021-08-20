import { Avatar, Box, Button, HStack, IconButton, Link, Stack, WrapItem } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa';

const PlayerCard = () => (
    <Box height="300px" borderWidth="1px" borderRadius="xl" overflow="hidden" p="5">
        <HStack >
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

        <Stack mt="2" height="60%" justify="space-between">
            <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={3}
            >
                Uma breve descrição sobre o jogador fsdf sda
                fadsfdsafdsfsad
                fdsafsdafasdfasd fdsfaswqrwefdsufisdah fdsaifhewufewqjfuiqwe
                jfsdahfoiwejhfuew fsdf fdsfasd fds fsdaf asdfdsa
            </Box>

            <HStack justifyContent="space-between">
                <Box
                    fontWeight="semibold"
                >
                    Disponibilidade: Segunda a sexta de tal a tal.
                </Box>

                <Link href="http://api.whatsapp.com/send?phone=+551599693-2204">
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
    </Box>
);

export default PlayerCard;