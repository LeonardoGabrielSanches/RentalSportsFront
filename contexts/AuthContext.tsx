import { useState, useEffect, createContext, ReactNode, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import api from "../services/api";
import { useCallback } from "react";

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
    signOut(): Promise<void>;
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

    const handleMe = useCallback(() => {
        api.get('/me')
            .then(response => {
                const { name, email, avatarUrl } = response.data;

                setUser({
                    name,
                    email,
                    avatarUrl
                });
            })
            .catch(() => {
                toast({
                    title: "Erro ao recuperar informações de usuário.",
                    description: 'Realize o login novamente.',
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top-right"
                });

                destroyCookie(undefined, '@Alugol:token');
            });
    }, [toast])

    useEffect(() => {
        const { '@Alugol:token': token } = parseCookies();

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            handleMe();
        }
    }, [handleMe]);

    async function signIn({ email, password }: SignInCredentials) {
        try {
            const response = await api.post('/auth', {
                email,
                password
            });

            router.push('/players');

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

            api.defaults.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
            toast({
                title: "Erro ao realizar o login.",
                description: error.response?.data.errors?.join(),
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            });
        }
    }

    async function signOut(): Promise<void> {
        setUser(undefined);
        destroyCookie(undefined, '@Alugol:token');

        router.push('/players');
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}