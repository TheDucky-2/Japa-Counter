'use client'

import { createContext, useContext, useEffect, useState, } from "react";
import React from "react";

interface ThemeContextType {
    isDark: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleTheme: ()=> {}
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {

    
    const [isDark, setIsDark] = useState<boolean>(false)

    useEffect(() => {

        document.documentElement.classList.toggle("dark", isDark)
        
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(prev => {
            const newTheme = !prev
            localStorage.setItem("theme", newTheme ? "dark" : "light")
            return newTheme
        })
    }



    return (
        <ThemeContext.Provider value = {{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme  = () => {
    return useContext(ThemeContext)
}