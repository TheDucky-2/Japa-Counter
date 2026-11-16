'use client'

import JaapMala from '@/components/JaapMala/JaapMala'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export type JaapProps = {
  currentNaam: string
  jaapSankalp: number
}

const Jaap = () => {

  const searchParams = useSearchParams();

  const currentNaam = searchParams.get("currentNaam");
  const japaTarget= searchParams.get("jaapSankalp")


  return (
    <div className='jaap-container'>
        <JaapMala
          currentNaam={String(currentNaam)}
          japaTarget={Number(japaTarget)}
        />
    </div>
  )
}

export default Jaap