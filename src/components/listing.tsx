import Link from "next/link"

type Meta = {
  stack?: string
  date?: string
}

type ListingCardProps = {
  title: string
  description?: string
  github: string
  deployment?: string
  meta?: Meta
}

export default function ListingCard({ title, description, github, deployment, meta }: ListingCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold group-hover:text-gray-700 transition-colors">
          <Link href={github} target="_blank">{title}</Link>
        </h2>
        {meta?.date && (
          <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {meta.date}
          </span>
        )}
      </div>

      {meta?.stack && (
        <p className="mt-1 text-xs tracking-wide text-gray-500 dark:text-gray-400">
          {meta.stack}
        </p>
      )}

      {description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      )}

      {(github || deployment) && (
        <div className="mt-4 flex justify-between gap-4">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Github Repo →
            </Link>
          )}

          {deployment && (
            <Link
              href={deployment}
              target="_blank"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View Deployment →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
