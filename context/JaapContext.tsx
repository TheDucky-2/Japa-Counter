'use client'
import React, { ReactNode, SetStateAction, useState } from 'react'
import { useContext, createContext } from 'react'


type JaapContextType = {
    jaapCount: number
    setJaapCount: React.Dispatch<SetStateAction<number>>
    selectedNaam: string
    setSelectedNaam: React.Dispatch<SetStateAction<string>>
    jaapTarget: number
    setJaapTarget: React.Dispatch<SetStateAction<number>>
    customTarget : number
    setCustomTarget: React.Dispatch<SetStateAction<number>>
    hasCustomTarget: boolean
    setHasCustomTarget: React.Dispatch<SetStateAction<boolean>>
}

const JaapContext = createContext<JaapContextType | null>(null)

export const JaapProvider = ({children}: {children: ReactNode}) => {
    
    const [selectedNaam, setSelectedNaam] = useState<string>("")
    const [jaapCount, setJaapCount] = useState<number>(0)
    const [jaapTarget, setJaapTarget] = useState<number>(0)
    const [customTarget, setCustomTarget] = useState<number>(0)
    const [hasCustomTarget, setHasCustomTarget] = useState<boolean>(false)

    return (
        <JaapContext.Provider 
        value={{
        jaapCount, selectedNaam, jaapTarget, customTarget, hasCustomTarget, setHasCustomTarget,
        setCustomTarget, setJaapCount, setJaapTarget, setSelectedNaam}}>
            {children}
        </JaapContext.Provider>
    )
}

export const useJaapContext = () => {
    const context = useContext(JaapContext)

    if(!context){
        throw new Error("Jaap Context must be used within the <JaapProvider>")
    }

    return context;
}

