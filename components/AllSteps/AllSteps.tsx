'use client'

import React, { useState } from 'react'
import "./AllSteps.css"
import { HolyNames } from '@/data/holynames'
import { MoveLeft, CircleArrowLeft, MoveRight } from 'lucide-react'
import FirstStep from './FirstStep'
import { useRouter } from 'next/navigation'
import SecondStep from './SecondStep'
import { useJaapContext } from '../../context/JaapContext'

const AllSteps = () => {
    const router = useRouter()
    const totalSteps = 3
    const [currentStep, setCurrentStep] = useState<number>(1)

    const {
        selectedNaam, 
        setSelectedNaam,
        setCustomTarget,
        customTarget,
        jaapTarget, 
        hasCustomTarget,
        setHasCustomTarget,
        setJaapTarget} = useJaapContext()


    console.log("selected naam", selectedNaam)

  return (
    <div className='jaap-container'>

        {currentStep === 1 && <FirstStep
        setJaapTarget={setJaapTarget}
        jaapTarget={jaapTarget}
        customTarget={customTarget}
        setCustomTarget={setCustomTarget}
        hasCustomTarget={hasCustomTarget}
        setHasCustomTarget={setHasCustomTarget}
        />}

        {currentStep === 2 && <SecondStep
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        />}
        

    <section className='flex  flex-col items-center gap-[var(--space-3)] w-full'>
        <button
        className='next-step-btn bg-yellow-500 dark:bg-yellow-600 '
        onClick={() => 
            currentStep < 2 
            ? setCurrentStep(currentStep + 1)
            : router.push(`/jaap?currentNaam=${encodeURIComponent(selectedNaam)}&japaTarget=${jaapTarget}`)}
        >
            Continue
        </button>

        { <p className='info-text '>हर शुरुआत एक संकल्प है, हर एक जाप भक्ति है।</p>}
    </section>

    </div>
  )
}

export default AllSteps