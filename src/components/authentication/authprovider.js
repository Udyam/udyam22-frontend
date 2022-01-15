import { AuthContext } from './Context/AuthContext'
import { React } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export const AuthProvider = ({ children }) => {
    const setToken = (newToken) => {
        localStorage.setItem('userToken', JSON.stringify(newToken))
    }
    const logout = () => {
        toast.success('Successfully logged out!!', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
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
