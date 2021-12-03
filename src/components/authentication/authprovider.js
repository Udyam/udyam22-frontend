import { AuthContext } from './Context/AuthContext';
import {  useState  } from 'react'
import { useCookies } from 'react-cookie'
import React from 'react'
export const AuthProvider = ({ children }) => {
    const [cookies, setCookies, removeCookies] = useCookies(['auth'])
    const [token, setTokenState ] = useState(cookies.token);
    const setToken = (newToken) => {
      setCookies('token', newToken, { path: '/' })
      setTokenState(newToken);
    }
    const deleteToken = () => {
      removeCookies('token')
      setTokenState(undefined);
    }
    const logout = () => {
      console.log(token);
      deleteToken()
      console.log(token);
    }
    return (
      <AuthContext.Provider
        value={{
          token,
          setToken,
          deleteToken,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
  
  
/*import { AuthContext } from '../Context/AuthContext';
export default function authprovider() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState({});
    const logout = () => {
       
      }

    return (
        <AuthContext.Provider
            value={{
                token: token,
                data: data,
                setToken: setToken,
                setData: setData,
            }}
        >
       <ChildComponents />

       </AuthContext.Provider>
    );
}*/