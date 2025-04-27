
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true)
     // Add event listener to close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])


  if (!mounted) {
    // Avoid rendering mismatch during hydration
    return (
       <button className="btn btn-outline btn-icon" disabled>
         <Sun className="h-[1.2rem] w-[1.2rem]" />
       </button>
    )
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false); // Close dropdown after selection
  }


  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="btn btn-outline btn-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
      {isOpen && (
         <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleThemeChange("light")}
              className={`block w-full text-left px-4 py-2 text-sm ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white`}
              role="menuitem"
            >
              Light
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
               className={`block w-full text-left px-4 py-2 text-sm ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white`}
              role="menuitem"
            >
              Dark
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className={`block w-full text-left px-4 py-2 text-sm ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white`}
              role="menuitem"
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
