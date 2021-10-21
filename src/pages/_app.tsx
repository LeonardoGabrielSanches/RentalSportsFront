import type { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { AuthProvider } from '../contexts/AuthContext';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Flex
          direction="column"
          w="100vw"
          h="100vh"
          backgroundImage="url('https://i.ibb.co/5j1YzvF/image.png')"
          backgroundSize="cover"
        >
          <Header />
          <Component {...pageProps} />
        </Flex>
      </AuthProvider>
    </ChakraProvider>
  );
}
export default MyApp;
