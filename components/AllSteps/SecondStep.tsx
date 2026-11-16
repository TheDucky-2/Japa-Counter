import React, { SetStateAction } from 'react'
import { JapaSankalpTarget } from '@/data/japacount'
import { RotateCcw } from 'lucide-react'

export type SecondStepProps={
  japaSankalp: number
  setJapaSankalp: React.Dispatch<SetStateAction<number>>
}

const SecondStep = ({japaSankalp, setJapaSankalp}: SecondStepProps) => {

  console.log("Jap Sankalp", japaSankalp)

  const handleReset = () => setJapaSankalp(0)
  

  return (
 <main className='main-container'>
        <div className='flex flex-col gap-[var(--space-2)]'>
            <h2>
                Set your Daily Jaap Sankalp
            </h2>
            <p>How many times would you like to chant today? Set an intention and begin with devotion.</p>
        </div>
        <div className='sankalp-card-container'>
        {       JapaSankalpTarget.map((target) => (
                <div
                key={target.id}
                className='japa-sankalp-card'
                onClick={() => setJapaSankalp(target.count)}

                >
                  {target.count}
                </div>
        ))}
                    
        
        </div>

        <div className="flex items-center gap-3 w-full my-2">
          <div className="flex-1 h-px bg-zinc-800"></div>

          <p className="text-zinc-100 text-sm">or</p>

          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        <div className='flex flex-col gap-[var(--space-2)] w-full '>
            <h2>
                Enter a custom target
            </h2>

            <div className='flex w-full justify-between gap-1'> 
            <input 
            min={0}
            value={japaSankalp}
            onChange={(e) => setJapaSankalp(Number(e.target.value))}
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

export default SecondStep