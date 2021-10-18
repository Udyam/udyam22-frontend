import React from 'react'
import { useEffect, useState, useContext, createContext } from 'react'
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'
/* eslint-disable */
const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {

  const [profileName, setProfileName] = useState('')
  const [cookies, setCookies, removeCookies] = useCookies(['auth'])
  const [pagetype,setpagetype] = useState("HOME"); 
  const token = cookies.token;
  const API_BASE_URL = 'http://127.0.0.1:8000/';
  const config={
    headers: {
        Authorization: "Token " + cookies.token
    },
  };

  const setToken = (newToken) => setCookies('token', newToken, { path: '/' })
  const deleteToken = () => removeCookies('token')

  const login = (newtoken) => {
    setToken(newtoken);
    const text= window.location.href;
    if(text.indexOf("/login")>-1 || text.indexOf("/register")>-1) window.location.href='/';
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
          setProfileName(response.data.name)
        })
        .catch((error) => {
          console.log('Some error occurred')
        })
    }
  }, [ setProfileName, token])
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        deleteToken,
        profileName,
        setProfileName,
        logout,
        login,
        loginpage,
        homepage,
        pagetype,
        setpagetype,
        API_BASE_URL,
        config,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);
/* eslint-enable */