import {  useContext, createContext } from 'react'
export const AuthContext = createContext({})

export function useAuthContext() {
  return useContext(AuthContext);
 
}


/*import React, { useContext } from 'react';
/* eslint-disable */
//Auth Context
/*export const AuthContext = React.createContext({
    token: null,
    setToken: (data) => { },
    data: null,
    setData: (data) => { },
    
})

//Use Auth Context
export function useAuthContext() {
    return useContext(AuthContext);
   
}*/
/* eslint-able */