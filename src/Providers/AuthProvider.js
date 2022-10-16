import { createContext, useContext, useEffect, useState } from "react";
const AuthProviderContext = createContext();
const AuthProviderContextDispatcher = createContext()

const initialState = {
    cart: [],
    total: 0
}

const AuthProvider = ({children}) => {
    const [state,setState] = useState(false);
    const LOCAL_STORAGE_AUTH_KEY = 'authState'

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
        setState(userData)
    },[])

    useEffect(() => {
        const data = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_AUTH_KEY,data);
    },[state])


    return ( 
        <AuthProviderContext.Provider value={state}>
            <AuthProviderContextDispatcher.Provider value={setState}>
                {children}
            </AuthProviderContextDispatcher.Provider>
        </AuthProviderContext.Provider>
     );
}
 
export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext)
export const useAuthActions = ()=> useContext(AuthProviderContextDispatcher)
