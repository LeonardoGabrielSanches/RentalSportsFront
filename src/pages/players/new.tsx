import { Box, Button, Flex, Stack, Text, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { ImagePicker } from "../../components/ImagePicker/ImagePicker";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import api from "../../services/api";
import Head from 'next/head';

interface CreatePlayer {
    email: string;
    password: string;
    name: string;
    avatar: string;
    description: string;
    height: number;
    weight: number;
    birth: Date;
    mobileNumber: string;
    latitude: number;
    longitude: number;
}

const New: NextPage = () => {
    const toast = useToast();
    const router = useRouter();

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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setValue('latitude', position.coords.latitude);
                setValue('longitude', position.coords.longitude);
            });
        }
        else {
            toast({
                title: "Seu navegador não tem suporte para geolocalização.",
                description: 'Por favor tente novamente mais tarde',
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
        }
    }, [setValue, toast]);

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

    async function handleSaveNewPlayer(data: CreatePlayer) {
        try {
            if (!imageUrl) {
                toast({
                    title: 'Imagem não adicionada',
                    description:
                        'É preciso adicionar e aguardar o upload de uma imagem antes de realizar o cadastro.',
                    status: 'warning',
                });
                return;
            }

            const bodyRequest = {
                ...data,
                avatar: imageUrl,
                birth: new Date(data.birth)
            }

            await api.post('players', bodyRequest);

            toast({
                title: "Usuário cadastrado com sucesso.",
                description: "Realize o login para utilizar a aplicação",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });

            router.push('/login');
        } catch (error: any) {
            toast({
                title: "Falha ao cadastrar novo usário.",
                description: error.response.data.message,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
        } finally {
            reset();
            setImageUrl('');
            setLocalImageUrl('');
        }
    }

    return (
        <>
            <Head>
                <title>Alugol | Cadastro</title>
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
                        onSubmit={handleSubmit(handleSaveNewPlayer)}
                    >
                        <Text
                            fontWeight="bold"
                            fontSize="30"
                            maxWidth="30%"
                            mx="auto"
                            mb="8"
                        >
                            Informações Cadastrais
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

                        <Stack mt="8" direction="row" maxWidth="80%" mx="auto">
                            <Input
                                label="Senha"
                                type="password"
                                {...register('password')}
                                name="password"
                                error={formState.errors.password}
                            />

                            <Input
                                label="Confirmação de senha"
                                type="password"
                                {...register('passwordConfirmation')}
                                name="passwordConfirmation"
                                error={formState.errors.passwordConfirmation}
                            />
                        </Stack>

                        <Box mt="8" ml="48">
                            <Button
                                type="submit"
                                colorScheme="green"
                                size="lg"
                                w="80%"
                                isLoading={formState.isSubmitting}
                            >
                                Cadastrar
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default New;