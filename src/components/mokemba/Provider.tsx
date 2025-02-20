'use client'
import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from 'react'

interface stateContext {
    state: Record<string, string>
    setState: Dispatch<SetStateAction<Record<string, string>>>
}

export const myContext = createContext<stateContext>({
    state: { '': '' },
    setState: () => {},
})

interface props {
    children: ReactNode
}

export function MyProvider({ children }: props) {
    const [state, setState] = useState<Record<string, string>>({})
    return (
        <myContext.Provider value={{ state, setState }}>
            {children}
        </myContext.Provider>
    )
}
