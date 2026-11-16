'use client'

import React, { useState } from 'react'
import "./AllSteps.css"
import { HolyNames } from '@/data/holynames'
import FirstStep from './FirstStep'
import Link from 'next/link'
import { MoveLeft, CircleArrowLeft } from 'lucide-react'
import SecondStep from './SecondStep'
import { useRouter } from 'next/navigation'

const AllSteps = () => {
    const router = useRouter()
    const totalSteps = 2
    const [currentStep, setCurrentStep] = useState<number>(1)
    const [selectedNaam, setSelectedNaam] = useState<string>("")
    const [japaCount, setJapaCount] = useState<number>(0)
    const [japaSankalp, setJapaSankalp] = useState<number>(0)

    console.log("selected naam", selectedNaam)

  return (
    <div className='all-steps-container' >
        <section className='header'>

            {currentStep === 2 && <button 
            onClick={() => setCurrentStep(currentStep - 1)}
            className='go-back-btn'
            >
                <CircleArrowLeft size={28}/>
               
            </button>}

            <span >
                Step {currentStep} of {totalSteps}
            </span>

        </section>

{currentStep === 1 &&        <FirstStep
        selectedNaam={selectedNaam}
        setSelectedNaam={setSelectedNaam}
        nextStep={2}
        />}
{currentStep === 2 &&        <SecondStep
        setJapaSankalp={setJapaSankalp}
        japaSankalp={japaSankalp}
        />}

    <section className='flex  flex-col items-center gap-[var(--space-3)]'>
        <button
        className='next-step-btn'
        onClick={() => 
            currentStep < 2 
            ? setCurrentStep(currentStep + 1)
            : router.push(`/jaap?currentNaam=${encodeURIComponent(selectedNaam)}&japaTarget=${japaSankalp}`)}

        >
            Continue
        </button>

        {currentStep === 1 ? <p className='info-text'>Your chosen Naam will be used for today's Jaap.</p>: <p className='info-text'>
            हर शुरुआत एक संकल्प है, हर एक जाप भक्ति है।</p>}
    </section>

    </div>
  )
}

export default AllSteps