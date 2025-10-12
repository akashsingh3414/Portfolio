import Link from "next/link"

interface SiteFooterProps {
  className?: string
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={`border-t border-border py-4 ${className || ""}`}>
      <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
        <div>Designed and Developed by Akash Singh</div>
        <p>© {new Date().getFullYear()} Akash Singh</p>
        <div className="mt-2 flex items-center justify-center gap-6">
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
        </div>
      </div>
    </footer>
  )
}
