import React, { SetStateAction, useState } from 'react'
import { JapaSankalpTarget } from '@/data/japacount'
import { Flower, Flower2, HandHeart, Pencil, PencilSparkles, RotateCcw } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

/** CSS Variables */
const borderColor="dark:border-zinc-500/40 border-zinc-800/30"
const separatorColor = "dark:bg-zinc-500/40 bg-zinc-800/10"
const sectionGap = "gap-[var(--space-3)]"
const iconColor="text-[#da65d3]"


export type FirstStepProps={
    jaapTarget: number
    setJaapTarget: React.Dispatch<SetStateAction<number>>
    customTarget : number
    setCustomTarget: React.Dispatch<SetStateAction<number>>
    hasCustomTarget: boolean
    setHasCustomTarget: React.Dispatch<SetStateAction<boolean>>
}

const FirstStep = ({jaapTarget, setJaapTarget, 
  customTarget, setCustomTarget, setHasCustomTarget}: FirstStepProps) => {
    
  const handleReset = () => {
    setJaapTarget(0)
    setCustomTarget(0)
  } 

  const [error, setError] = useState<string>("")
  

  return (
 <main className='main-container'>
        
        <h2 className={`flex gap-2 items-center`}>
           <HandHeart size={24} className='text-pink-400'/>
            Your Jaap Sankalp for Today
        </h2>

        <section className={`flex flex-col ${sectionGap} w-full relative pt-4 `}>
          <h3 className='flex gap-2 px-7 items-center'> 
            <Flower size={22} className={`${iconColor} left-0 absolute top-1`}/>
            Set an intention and begin with devotion.</h3>
          <div className='sankalp-card-container'>
        {       JapaSankalpTarget.map((target) => (
                <div
                key={target.id}
                className={`japa-sankalp-card border ${borderColor}`}
                onClick={() => setJaapTarget(target.count)}

                >
                  {target.count}
                </div>
        ))}
        </div>
                    
        
        </section>

        <section className="flex items-center gap-3 w-full my-2">
          <div className={`flex-1 h-px ${separatorColor}`}></div>

          <p className="text-zinc-100 text-sm">or</p>

          <div className={`flex-1 h-px ${separatorColor}`}></div>
        </section>

        <section className={`flex flex-col ${sectionGap} w-full relative pt-4 `}>
            <h3 className='flex gap-2 px-7 items-center'>
                <PencilSparkles size={22} className={`${iconColor} left-0 absolute top-1`}/>
                Enter a custom goal
            </h3>

            <div className="flex flex-col"> 
            
              <div className='flex w-full justify-between gap-1'>
                <input 
                min={0}
                value={customTarget}
                onChange={(e) => {
                
                  setHasCustomTarget(true)
                  setCustomTarget(Number(e.target.value))}}
                className={`input border ${borderColor}`}
                type="number" 
                placeholder='100000'/>
                            <button 
                className={`reset-btn hover:bg-zinc-700 border ${borderColor}`}
                onClick={handleReset}
                >
                  <RotateCcw size={16}/>
                </button>
              </div>
           </div>
        </section>
         
    
  </main>

  )
}

export default FirstStep