import { createContext, useContext, useEffect, useState } from "react"
import { getCurrentUserData } from "../services/user/authService"

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            getCurrentUserData()
                .then((res) => {
                    setUser(res.data.data)
                })
                .catch((err) => {
                    setUser(null)
                    console.error(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        catch (e) {
            setUser(null)
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        console.log('use context');
        console.log('user', user);
        console.log('loading', loading);
    })

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}