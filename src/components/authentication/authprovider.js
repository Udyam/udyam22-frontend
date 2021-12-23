import { AuthContext } from './Context/AuthContext'
import { React } from 'react'

export const AuthProvider = ({ children }) => {
    const setToken = (newToken) => {
        localStorage.setItem('userToken', JSON.stringify(newToken))
    }
    const logout = () => {
        localStorage.removeItem('userToken')
    }
    return (
        <AuthContext.Provider
            value={{
                setToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
