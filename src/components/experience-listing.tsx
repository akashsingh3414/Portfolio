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
        "flex flex-col gap-2 md:flex-row md:items-start md:gap-6 border-b border-border/60 py-6",
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
              className="text-foreground underline hover:text-blue-600 transition-colors"
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
