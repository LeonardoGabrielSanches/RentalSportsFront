import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { parseCookies, setCookie } from "nookies";
import { useState } from "react";
import { useEffect } from "react";
import { createContext, ReactNode, useContext } from "react";
import api from "../services/api";

type User = {
    name: string;
    email: string;
    avatarUrl: string;
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    isAuthenticated: boolean;
    user: User | undefined;
}

const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const toast = useToast();
    const router = useRouter()

    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {
        const { '@Alugol:token': token } = parseCookies();

        if (token) {
            // Construir a rota /me no backend
        }
    }, []);

    async function signIn({ email, password }: SignInCredentials) {
        try {
            const response = await api.post('/auth', {
                email,
                password
            });

            const { name, token, avatarUrl } = response.data;

            setCookie(undefined, '@Alugol:token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });

            setUser({
                avatarUrl,
                email,
                name
            });

            router.push('/players')
        } catch (error) {
            toast({
                title: "Erro ao realizar o login.",
                description: error.response?.data.Errors?.join(),
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}