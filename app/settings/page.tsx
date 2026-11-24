'use client'

import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import ChangeThemeToggle from '@/components/Toggle/ChangeTheme'
import React from 'react'

const Settings = () => {
  return (
    <div className='page-container'>
        <h2>Settings</h2>

        <section className='border border-zinc-900 p-3 dark:border-zinc-100/20 h-[80vh] rounded-sm'>
            <ul className='settings-list'>
                <div className='flex justify-between items-center w-full'>
                    <h3>Change Theme</h3>

                    <ChangeThemeToggle/>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <h3>Select Language</h3>

                    <LanguageSelector/>
                </div>
            </ul>
        </section>
    
    </div>
  )
}

export default Settings