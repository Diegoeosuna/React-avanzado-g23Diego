import { createContext, useState, useEffect } from "react";
import jwtDecode from 'jwt-decode'

//1. Creal el contexto
const AuthContext = createContext()

//2. Crear el proveedor del context (provider)
const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false) //¿Estoy autenticado? (Loggeado)
    const [userPayload, setUserPayload] = useState(null) //JWT Payload decodificado

    //Para hacer login, tenemos que guardar el token.
    const login = (token) => {
        localStorage.setItem('token', token)
        const decodedPayload = jwtDecode(token)
        setUserPayload(decodedPayload)
        setIsAuth(true)

    }

    //Para hacer logout, tenemos que quitar el token.
    const logout = () => {
        localStorage.removeItem('token')
        setUserPayload(null)
        setIsAuth(false)
    }

    //Si el token existe en el LocalStorage, lo recupero y establezco estados correspondientes.
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const decodedPayload = jwtDecode(token)
            setUserPayload(decodedPayload)
            setIsAuth(true)
        }
    }, [])

    const values = {
        isAuth,
        userPayload,
        login,
        logout
    }

    return (
        <AuthContext.Provider value= {values}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}
