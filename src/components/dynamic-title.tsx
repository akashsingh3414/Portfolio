"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function DynamicTitle() {
  const pathname = usePathname()

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Akash Singh",
      "/about": "About - Akash Singh",
      "/projects": "Projects - Akash Singh",
      "/articles": "Articles - Akash Singh",
      "/maps": "Maps - Akash Singh",
    }

    document.title = titles[pathname] || "Akash Singh"
  }, [pathname])

  return null
}
