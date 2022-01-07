import React, { useContext } from 'react'

export const DashContext = React.createContext({})

export function useDashContext() {
    return useContext(DashContext)
}
