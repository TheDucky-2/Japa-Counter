import React, { SetStateAction } from 'react'
import { useState } from 'react'
import { HolyNames } from '@/data/holynames'

export type FirstStepProps = {
    selectedNaam: string
    setSelectedNaam: React.Dispatch<SetStateAction<string>>
    nextStep: number
}

const FirstStep = ({selectedNaam, nextStep, setSelectedNaam}: FirstStepProps) => {


  return (
    <main className='main-container'>
        <div className='flex flex-col gap-[var(--space-2)]'>
            <h2>
                Which Naam would you like to chant?
            </h2>
            <p>Choose the divine name closest to your heart. Let every repetition be an offering of devotion.</p>
        </div>
        <div className='flex flex-col gap-2'>
{       HolyNames.map((name) => (
        <label
        key={name.id}
        className="select-name-card"

        >
            <input 
            name="naam"
            type="radio"
            value={name.naam}
            checked={selectedNaam === name.naam}
            
            onChange={(e) => {
                setSelectedNaam(name.naam)
            }}
        />
            {name.naam}

        </label>
))}
            

        </div>
    
            </main>

  )
}

export default FirstStep