'use client'

import { Home, Menu, Moon, Settings, Sun } from 'lucide-react'
import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import Link from 'next/link'
import "./Navbar.css"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react/types'
import path from 'path'

const NavlinkColorClass = " flex-1 text-zinc-900 hover:text-yellow-400 dark:text-zinc-100 hover:bg-zinc-900"

type NavbarItem = {
  id: number
  href: string
  title: string
  icon?: LucideIcon
  image?: {
    src: string
    height: number
    width: number
    alt: string
  }
}

const NavbarItems: NavbarItem[] = [
  {
      id: 1,
      href: "/",
      title: "Home",
      icon: Home
  },
    {
      id: 2,
      href: "/my-jaap",
      title: "My Jaap",
      image: {
        src: "/mala.png",
        height: 200,
        width: 200,
        alt: "mala-i"
      }
  },
    {
      id: 3,
      href: "/settings",
      title: "Settings",
      icon: Settings
    },
]

const Navbar = () => {

    const {isDark, toggleTheme} = useTheme()
    const pathName = usePathname()
    const [isActive, setIsActive] = useState<boolean>(false)

    console.log("Path Name", pathName)

  return (
    <nav 
    id="navbar" 
    className={`navbar`}>

      {
        NavbarItems.map((item) => (
          <Link
          className={`${NavlinkColorClass} nav-link ${pathName === item.href ? "active" : ""}`}
          key={item.id}
          href={item.href}
          >
            {
              item.icon ? 
              <item.icon
              className={
            `${isDark ? "text-zinc-200" : "text-zinc-900"}`
          } size={22}
              /> : item.image ? 
            <Image src={isDark ? "/white-mala.png" : "/mala.png"}
            alt="mala-img"
            height={26}
            width={26}
            /> : ""
            }
          </Link>
        ))
      }
      
        
    
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