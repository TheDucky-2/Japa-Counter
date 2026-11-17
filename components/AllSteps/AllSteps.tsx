'use client'

import React, { useState } from 'react'
import "./AllSteps.css"
import { HolyNames } from '@/data/holynames'
import { MoveLeft, CircleArrowLeft } from 'lucide-react'
import FirstStep from './FirstStep'
import { useRouter } from 'next/navigation'
import SecondStep from './SecondStep'

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


{currentStep === 1 && <FirstStep
        setJapaSankalp={setJapaSankalp}
        japaSankalp={japaSankalp}
        />}

        {currentStep === 2 && <SecondStep
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
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

        {currentStep === 1 ? <p className='info-text'>हर शुरुआत एक संकल्प है, हर एक जाप भक्ति है।</p>: <p className='info-text'>
            हर शुरुआत एक संकल्प है, हर एक जाप भक्ति है।</p>}
    </section>

    </div>
  )
}

export default AllSteps