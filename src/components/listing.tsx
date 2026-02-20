import Link from "next/link"

type Meta = {
  stack?: string
  date?: string
}

type ListingCardProps = {
  title: string
  description?: string[]
  github: string
  deployment?: string
  meta?: Meta
}

export default function ListingCard({ title, description, github, deployment, meta }: ListingCardProps) {
  return (
    <div className="group rounded-2xl grid border border-gray-200 p-5 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold group-hover:text-blue-700 transition-colors">
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

      {Array.isArray(description) && description.length > 0 && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description.map((item, index) => {
            const parts = item.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={index} className="mb-1.5 last:mb-0">
                {parts.map((part, i) =>
                  part.startsWith('**') && part.endsWith('**')
                    ? <strong key={i} className="font-semibold text-gray-800 dark:text-gray-200">{part.slice(2, -2)}</strong>
                    : part
                )}
              </p>
            );
          })}
        </div>
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
