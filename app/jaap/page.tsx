import React, { Suspense } from 'react'
import Jaap from './Jaap'

const JaapPage = () => {
  return (
    <Suspense
    fallback={<div>Loading Jaap...</div>}
    >
      <Jaap/>
    </Suspense>
  )
}

export default JaapPage