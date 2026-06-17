'use client'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button className="px-4" onClick={() => setDark(!dark)}>
      {dark ? <MdLightMode /> : <MdDarkMode /> }
    </button>
  )
}