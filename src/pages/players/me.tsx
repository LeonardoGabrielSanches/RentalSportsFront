import { Flex, Box, Text, Stack, Button, useToast } from "@chakra-ui/react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Header } from "../../components/Header";
import { ImagePicker } from "../../components/ImagePicker/ImagePicker";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Player } from "../../models/player";
import api from "../../services/api";
import { addZero } from "../../utils/DateFormat";
import Head from 'next/head';

interface Me extends Player {
    height: number;
    weight: number;
    birth: Date;
    location: {
        latitude: number;
        longitude: number;
    }
}

type ServerSideProps = {
    player: Me;
}

const Me: NextPage<ServerSideProps> = ({ player }: ServerSideProps) => {
    const toast = useToast();

    const {
        register,
        handleSubmit,
        reset,
        formState,
        control,
        setValue,
        setError,
        trigger
    } = useForm({});

    const [imageUrl, setImageUrl] = useState('');
    const [localImageUrl, setLocalImageUrl] = useState('');

    const description = useWatch({
        control,
        name: 'description'
    });

    useEffect(() => {
        reset();
        const date = new Date(player.birth);

        const formattedDate = (addZero(date.getFullYear()) + "-" + (addZero(date.getMonth() + 1))) + "-" + (date.getDate());

        setValue('email', player.email);
        setImageUrl(player.avatar);
        setValue('name', player.name);
        setValue('description', player.description);
        setValue('latitude', player.location.latitude);
        setValue('longitude', player.location.longitude);
        setValue('mobileNumber', player.mobileNumber);
        setValue('height', player.height);
        setValue('weight', player.weight);
        setValue('mobileNumber', player.mobileNumber);
        setValue('birth', formattedDate);
    }, [player.avatar, player.birth, player.description, player.email, player.height, player.location.latitude, player.location.longitude, player.mobileNumber, player.name, player.weight, reset, setValue, toast]);

    const formValidations = {
        image: {
            required: 'Arquivo obrigatório',
            validate: {
                lessThan10MB: (fileList: any) =>
                    fileList[0].size < 10485760 || 'O arquivo deve ser menor que 10MB',
                acceptedFormats: (fileList: any) =>
                    /(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#](?:jpeg|gif|png))(?:\?([^#]*))?(?:#(.*))?/g.test(
                        fileList[0].type
                    ) || 'Somente são aceitos arquivos PNG, JPEG e GIF',
            },
        },
    };

    return (
        <>
            <Head>
                <title>Alugol | {player.name}</title>
            </Head>

            <Flex direction="column" h="100vh" >
                <Header />
                <Flex w="100%" maxWidth={1280} mx="auto">
                    <Box
                        as="form"
                        w="100%"
                        bg="gray.600"
                        p="8"
                        mb="8"
                        borderRadius="8"
                        border="green"
                    >
                        <Text
                            fontWeight="bold"
                            fontSize="30"
                            maxWidth="30%"
                            mx="auto"
                            mb="8"
                            textAlign="center"
                        >
                            Informações
                        </Text>

                        <ImagePicker
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                            localImageUrl={localImageUrl}
                            setLocalImageUrl={setLocalImageUrl}
                            setError={setError}
                            trigger={trigger}
                            error={formState.errors.image}
                            {...register('image', formValidations.image)}
                        />

                        <Stack direction="row" maxWidth="80%" mx="auto">
                            <Input
                                label="Nome Completo"
                                {...register('name')}
                                name="name"
                                error={formState.errors.name}
                            />

                            <Input
                                label="Email"
                                type="email"
                                {...register('email')}
                                name="email"
                                error={formState.errors.email}
                            />
                        </Stack>

                        <Stack mt="8" direction="row" maxWidth="80%" mx="auto">
                            <Input
                                label="Número celular com DDD"
                                type="tel"
                                {...register('mobileNumber')}
                                name="mobileNumber"
                                error={formState.errors.mobileNumber}
                            />

                            <Input
                                label="Data de nascimento"
                                type="date"
                                {...register('birth')}
                                name="birth"
                                error={formState.errors.birth}
                            />
                        </Stack>

                        <Stack mt="8" direction="row" maxWidth="80%" mx="auto">
                            <Input
                                label="Altura"
                                type="number"
                                {...register('height')}
                                name="height"
                                step=".01"
                                error={formState.errors.height}
                            />

                            <Input
                                label="Peso"
                                type="number"
                                {...register('weight')}
                                name="weight"
                                step=".01"
                                error={formState.errors.weight}
                            />
                        </Stack>

                        <Stack mt="8" direction="row" maxWidth="80%" mx="auto">
                            <Input
                                label="Latitude"
                                {...register('latitude')}
                                name="latitude"
                                error={formState.errors.latitude}
                            />

                            <Input
                                label="Longitude"
                                {...register('longitude')}
                                name="longitude"
                                error={formState.errors.longitude}
                            />
                        </Stack>

                        <Box mt="8" maxWidth="80%" mx="auto">
                            <TextArea
                                label="Descrição"
                                maxLength={175}
                                typedLength={description?.length ?? 0}
                                {...register('description')}
                                name="description"
                                error={formState.errors.description}
                            />
                        </Box>

                        <Box mt="8" ml="48">
                            <Button
                                type="submit"
                                colorScheme="green"
                                size="lg"
                                w="80%"
                                isLoading={formState.isSubmitting}
                            >
                                Atualizar
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { '@Alugol:token': token } = parseCookies(ctx);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = await api.get<Player>('players/me');

    return {
        props: {
            player: response.data
        }
    }
}

export default Me;