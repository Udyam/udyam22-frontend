import { React, useState } from 'react'
import { DashContext } from './dashcontext'

export const Dashstateprovider = ({ children }) => {
    const [state, setState] = useState(0)

    return (
        <DashContext.Provider
            value={{
                state: state,

                setState: setState,
            }}
        >
            {children}
        </DashContext.Provider>
    )
}
