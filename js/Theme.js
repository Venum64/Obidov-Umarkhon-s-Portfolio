import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    if (isDark) {
      document.body.removeAttribute('data-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark((p) => !p)

  return [isDark, toggleTheme]
}

export default useTheme
