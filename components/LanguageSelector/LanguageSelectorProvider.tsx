'use client'

import { BabelizeProvider } from '@babelize/sdk/react'
import React from 'react'

const LanguageSelectorProvider = ({
    children
}: {children: React.ReactNode}) => {
  return (
    <BabelizeProvider>
        {children}
    </BabelizeProvider>
  )
}

export default LanguageSelectorProvider