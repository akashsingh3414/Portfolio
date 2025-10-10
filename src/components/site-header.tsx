"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SiteHeaderProps {
  className?: string
}

const nav = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/articles", label: "Articles" },
  { href: "/maps", label: "Maps" },
]

export function SiteHeader({ className }: SiteHeaderProps) {
  const pathname = usePathname()

  return (
    <header className={cn("py-10", className)}>
      <div className="mx-auto max-w-4xl px-4 pt-8 text-center">
        <Link href="/" className="inline-block text-center">
          <h1 className="text-4xl md:text-4xl font-sans font-bold leading-tight">
            <span aria-label="Akash Singh">Akash Singh</span>
          </h1>
        </Link>

        {/* <div className="mt-2 flex items-center justify-center gap-6">
          <Link
            href="https://github.com/akashsingh3414"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-base font-medium text-gray-700 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/akashsingh3414/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-base font-medium text-gray-700 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600"
          >
            LinkedIn
          </Link>
        </div> */}

        <nav
          aria-label="Primary"
          className="mt-5 flex flex-wrap items-center justify-center gap-5"
        >
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative font-medium transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600",
                  active && "font-semibold text-blue-700 after:w-full"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
