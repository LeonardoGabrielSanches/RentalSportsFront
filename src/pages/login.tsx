import type { NextPage } from 'next';
import { Flex, Stack, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Head from 'next/head';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../contexts/AuthContext';

import { Input } from '../components/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

const Login: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { signIn } = useAuth();


  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>Alugol | Login</title>
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          as="form"
          w="100%"
          maxWidth="360"
          bg="whiteAlpha.300"
          p="8"
          borderRadius="8"
          flexDir="column"
          border="green"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack align="center" spacing="4">
            <Input
              label="E-mail"
              type="email"
              {...register('email')}
              error={formState.errors.email}
            />

            <Input
              label="Senha"
              type="password"
              {...register('password')}
              error={formState.errors.password}
            />

            <Button
              type="submit"
              mt="6"
              colorScheme="green"
              size="lg"
              isLoading={formState.isSubmitting}
            >
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
