import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import api from "../services/api";

type User = {
    name: string;
    email: string;
    token: string;
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
    const [user, setUser] = useState<User>();

    const toast = useToast();

    const isAuthenticated = false;

    async function signIn({ email, password }: SignInCredentials) {
        api.post('/auth', {
            email,
            password
        })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                toast({
                    title: "Erro ao realizar o login",
                    description: error.response.data.errors.join(),
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top-right"
                });
            });
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