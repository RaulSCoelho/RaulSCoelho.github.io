'use client'
import { useTheme } from '@/hooks/useTheme'
import { FiSun, FiMoon } from 'react-icons/fi'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className="focus:outline-none" onClick={toggleTheme}>
      {theme === 'default' ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  )
}
