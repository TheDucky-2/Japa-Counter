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
        <JaapMala
          currentNaam={String(currentNaam)}
          japaTarget={Number(japaTarget)}
        />
  )
}

export default Jaap