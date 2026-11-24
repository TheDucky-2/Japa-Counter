'use client'

import React, { useState } from 'react'
import { LanguageSwitcher } from '@babelize/elements'
import { useBabelize, useLocale } from '@babelize/sdk/react';
import { Router } from 'lucide-react';
import { useRouter } from 'next/navigation';

const locales = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  {code: "hi", label: "हिन्दी", flag: "🇮🇳"}
];

const LanguageSelector = () => {
    const router = useRouter()
    const {locale, setLocale} =  useLocale() 

    const selectedLocale="en"

  return (


    <LanguageSwitcher
    locales={locales}
    value={selectedLocale}
    onValueChange={(code) => {
        setLocale(code)
        router.push(`/${code}`)
    
    }}
    showCode
    showFlags
    />

  )
}

export default LanguageSelector