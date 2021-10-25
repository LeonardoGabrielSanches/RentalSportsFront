import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                color: 'white',
                backgroundImage: "url('https://i.ibb.co/5j1YzvF/image.png')",
                backgroundRepeat: 'no-repeat',
            }
        }
    }
});