import { useEffect, useState, useContext, createContext } from 'react'
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'
/* eslint-disable */
const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
    const [cookies, setCookies, removeCookies] = useCookies(['auth'])
    const [token, setTokenState] = useState(cookies.token)
    const setToken = (newToken) => {
        //console.log(newToken)

        setCookies('token', newToken, { path: '/' })
        setTokenState(newToken)
    }

    const deleteToken = () => {
        removeCookies('token')
        setTokenState(undefined)
    }
    const logout = () => {
        //console.log(token)
        deleteToken()
        //console.log(token)
        router.push('/login')
    }

    useEffect(() => {
        if (token) {
            axios
                .get('auth/profile/', {
                    headers: {
                        Authorization: 'Token ' + token,
                    },
                })
                .then((response) => {
                    setProfileName(response.data.username)
                })
                .catch((error) => {
                    //console.log(error)
                })
        }
    }, [setAvatarImage, setProfileName, token])
    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                deleteToken,
                profileName,
                setProfileName,
                avatarImage,
                setAvatarImage,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
/* eslint-able */
