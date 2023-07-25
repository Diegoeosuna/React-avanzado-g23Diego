import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('authContext debe ser usado dentro de AuthProvider')
    }

    return context
}