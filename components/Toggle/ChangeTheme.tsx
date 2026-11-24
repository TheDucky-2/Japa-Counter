import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import "./ChangeTheme.css"

const ChangeThemeToggle = () => {

    const {isDark, toggleTheme} = useTheme()

  return (
    <>
        {isDark ? <button
        className='bg-zinc-700/50 hover:bg-zinc-700 change-theme-toggle'
        onClick={toggleTheme}
        >
            <Sun fill="yellow" color='yellow'/>
        </button>
            :
        <button
        className='change-theme-toggle 
        bg-zinc-300/50 '
        onClick={toggleTheme}
        >
            <Moon fill="black" color='black'/>
        </button>}
    </>
  )
}

export default ChangeThemeToggle