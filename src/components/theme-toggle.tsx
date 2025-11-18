"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="relative inline-flex items-center rounded-full p-[2px] gap-1 px-1.5 py-1 bg-border h-[1.6rem] w-[3.4rem]" />
    )
  }

  return (
    <div className="relative inline-flex items-center rounded-full p-[2px] gap-1 px-1.5 py-1 bg-border">
      <button
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        className={`
          flex items-center justify-center
          h-[1.6rem] w-[1.6rem] rounded-full
          transition-all duration-300 ease-in-out
          cursor-pointer
          ${theme === "light"
            ? "bg-background shadow-sm scale-105 bg-gradient-to-br from-yellow-300 to-amber-600"
            : "hover:bg-background/80 scale-110"
          }
        `}
      >
        <Sun 
          className={`
            h-[0.9rem] w-[0.9rem]
            transition-all duration-300 ease-in-out
            hover:scale-120
            ${theme === "light"
              ? "text-foreground rotate-0 scale-110 text-white"
              : "text-muted-foreground rotate-90 scale-90"
            }
          `}
        />
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        className={`
          flex items-center justify-center
          h-[1.6rem] w-[1.6rem] rounded-full
          cursor-pointer
          transition-all duration-300 ease-in-out
          ${theme === "dark"
            ? "bg-background shadow-sm scale-105 bg-gradient-to-br from-neutral-700 to-black"
            : "hover:bg-background/80 scale-110"
          }
        `}
      >
        <Moon 
          className={`
            h-[0.9rem] w-[0.9rem]
            transition-all duration-300 ease-in-out
            hover:scale-120
            ${theme === "dark"
              ? "text-foreground rotate-0 scale-110"
              : "text-muted-foreground -rotate-90 scale-90"
            }
          `}
        />
      </button>
    </div>
  )
}
