import React, { createContext, useState } from 'react'
import { mockLogin } from '../services/loginMock';

type AuthState = {
    token: string | null
}

type ContextType = AuthState & {
    login: (username: string, password: string) => Promise<void>;
    logout: () => void
}

type AuthContextProviderProps = {
    children?: React.ReactNode | undefined;
  }

export const AuthCtx = createContext<ContextType|undefined>(undefined);

const AuthCtxProvider= ({children}: AuthContextProviderProps) => {
    const [authState, setAuthState] = useState<AuthState>({token: "meu-token-api"})

    const login = async (email: string, senha: string) => {
        const apiToken = await mockLogin(email, senha)
        setAuthState({ token: apiToken});
    }

    const logout = () => {
        setAuthState({token: null})
    }


    return( 
        <AuthCtx.Provider value={{...authState, login, logout}}>
            {children}
        </AuthCtx.Provider>
    )
}

export default AuthCtxProvider;