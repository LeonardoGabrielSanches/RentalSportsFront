import { Box, Button, Flex, Stack, Text, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

const New: NextPage = () => {
    const toast = useToast();

    const { register, handleSubmit, formState, control, setValue } = useForm({});

    const description = useWatch({
        control,
        name: 'description'
    })

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
                description: 'Tem que ver o jeito que vai fazer dai',
                status: "warning",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
        }
    }, [setValue, toast]);

    return (
        <Flex direction="column" h="100vh" >
            <Header />
            <Flex w="100%" maxWidth={1280} mx="auto" >
                <Box
                    as="form"
                    w="100%"
                    bg="gray.600"
                    p="8"
                    borderRadius="8"
                    border="green"
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
                            label="URL imagem avatar"
                            {...register('avatarUrl')}
                            name="avatarUrl"
                            error={formState.errors.avatarUrl}
                        />

                        <Input
                            label="Número celular com DDD"
                            type="tel"
                            {...register('mobileNumber')}
                            name="mobileNumber"
                            error={formState.errors.mobileNumber}
                        />
                    </Stack>

                    <Stack mt="8" direction="row" maxWidth="80%" mx="auto">
                        <Input
                            label="Altura"
                            type="number"
                            {...register('height')}
                            name="height"
                            error={formState.errors.height}
                        />

                        <Input
                            label="Peso"
                            type="number"
                            {...register('weight')}
                            name="weight"
                            error={formState.errors.weight}
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
    )
}

export default New;