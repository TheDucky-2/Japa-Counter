import React, { SetStateAction } from 'react'
import { JapaSankalpTarget } from '@/data/japacount'
import { RotateCcw } from 'lucide-react'

export type FirstStepProps={
    jaapTarget: number
    setJaapTarget: React.Dispatch<SetStateAction<number>>
    customTarget : number
    setCustomTarget: React.Dispatch<SetStateAction<number>>
    hasCustomTarget: boolean
    setHasCustomTarget: React.Dispatch<SetStateAction<boolean>>
}

const FirstStep = ({jaapTarget, setJaapTarget, 
  customTarget, setCustomTarget}: FirstStepProps) => {

  const handleReset = () => {
    setJaapTarget(0)
    setCustomTarget(0)
  } 
  

  return (
 <main className='main-container'>
        <div className='flex flex-col gap-[var(--space-4)]'>
            <h2 className=''>
                Set your Jaap Sankalp for Today
            </h2>
            <h3> Set an intention and begin with devotion.</h3>
        </div>
        <div className='sankalp-card-container'>
        {       JapaSankalpTarget.map((target) => (
                <div
                key={target.id}
                className='japa-sankalp-card'
                onClick={() => setJaapTarget(target.count)}

                >
                  {target.count}
                </div>
        ))}
                    
        
        </div>

        <div className="flex items-center gap-3 w-full my-2">
          <div className="flex-1 h-px bg-zinc-800/50"></div>

          <p className="text-zinc-100 text-sm">or</p>

          <div className="flex-1 h-px bg-zinc-800/50"></div>
        </div>

        <div className='flex flex-col gap-[var(--space-2)] w-full '>
            <h3>
                Enter a custom target
            </h3>

            <div className='flex w-full justify-between gap-1'> 
            <input 
            min={0}
            value={customTarget}
            onChange={(e) => setCustomTarget!(Number(e.target.value))}
            className='input' 
            type="text" 
            placeholder='100000'/>

            <button 
            className='reset-btn'
            onClick={handleReset}
            >
              <RotateCcw size={20}/>
            </button>
           </div>
        </div>
         
    
  </main>

  )
}

export default FirstStep