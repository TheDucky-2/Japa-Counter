'use client'

import { Home, Menu, Moon, Settings, Sun } from 'lucide-react'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import Link from 'next/link'
import "./Navbar.css"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react/types'

const NavlinkColorClass = " flex-1 text-zinc-900 hover:text-yellow-400 dark:text-zinc-100 hover:bg-zinc-900"

type NavbarItem = {
  id: number
  href: string
  title: string
  icon?: LucideIcon
  image?: string
}

const NavbarItems: NavbarItem[] = [
  {
      id: 1,
      href: "/",
      title: "Home",
      icon: Home
  },
    {
      id: 1,
      href: "/",
      title: "My Jaap",
      image: "/mala.png"
  },
    {
      id: 3,
      href: "/settings",
      title: "Settings",
      icon: Settings
    },
        {
      id: 4,
      href: "/settings",
      title: "Settings",
      icon: Settings
    }
]

const Navbar = () => {

    const {isDark, toggleTheme} = useTheme()
    const pathName = usePathname()

  return (
    <nav 
    id="navbar" 
    className={`navbar`}>
      
        
          <Link
           className={`${NavlinkColorClass} nav-link ${pathName === "/" ? "active" : ""}`}
          href="/">
            <Home/>
          </Link>

          <Link
           className={`${NavlinkColorClass} nav-link`}

          href="/"
          >
            <Image src={isDark ? "/white-mala.png" : "/mala.png"}
            alt="mala-img"
            height={28}
            width={28}
            />

          </Link>
      
       
          
          <Link
            className={`${NavlinkColorClass} nav-link`}
          href="/">
           <Settings/>
          </Link>

        <button
        className={`${NavlinkColorClass} toggle-theme`}
        onClick={toggleTheme}
        >
            {isDark ? <Moon /> :<Sun/> }
        </button>
    
    </nav>
  )
}

export default Navbar


/***
 * 
 *         <Link 
        href="/"
        className='text-zinc-700 dark:text-zinc-300 font-bold'>Logo</Link>

 */