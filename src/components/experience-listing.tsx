import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ExperienceItemProps = {
  role: string
  company: string
  duration: string
  description: ReactNode
  className?: string
  url?: string
}

export function ExperienceListCard({
  role,
  company,
  duration,
  description,
  className,
  url,
}: ExperienceItemProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-2 rounded-2xl shadow-sm md:flex-row md:items-start md:gap-6 border-b border-border/60 p-5 mb-5 dark:border-gray-800 dark:bg-gray-900 transition-all duration-300 hover:scale-105",
        className,
      )}
      aria-label={`${role} at ${company}`}
    >
      <div className="shrink-0 md:w-64">
        <h3 className="font-semibold leading-snug">
          <span className="text-foreground">{role}</span>{" "}
          <span className="text-muted-foreground">at</span>{" "}
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-base font-large transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600"
            >
              {company}
            </a>
          ) : (
            <span className="text-foreground">{company}</span>
          )}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{duration}</p>
      </div>

      <div className="text-pretty leading-relaxed text-foreground/90">
        {typeof description === "string" ? <p>{description}</p> : description}
      </div>
    </article>
  )
}
