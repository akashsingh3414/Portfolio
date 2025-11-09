export const metadata = {
  title: "Experience",
}

import { ExperienceListCard } from "@/components/experience-listing"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-4">
      <p className="mt-3 text-muted-foreground">
        A brief overview of my recent role. For more details, feel free to{" "}
        <Link
        href="https://www.linkedin.com/in/akashsingh3414/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-base font-medium text-gray-700 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600"
        >
        checkout my LinkedIn
        </Link>

        .
      </p>

      <section className="mt-8">
        <ExperienceListCard
          role="Software Developer Intern"
          company="Truxie (Prayas Logistics)"
          duration="05/2025 - Present"
          description={
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Contributed to building scalable back-end services using NestJS, TypeScript,
                  PostgreSQL, and Docker, optimizing database schemas and queries for better
                  performance.
                </li>
                <li>
                  Enhanced software reliability by maintaining comprehensive unit and end-to-end
                  tests in Jest, boosting test coverage by 40% and minimizing production issues.
                </li>
                <li>
                  Developed and integrated 50+ REST APIs, collaborating with cross-functional
                  teams to improve performance, security, and scalability while following clean
                  design patterns within an Agile environment.
                </li>
              </ul>
            </>
          }
          url="https://www.truxie.in/"
        />
      </section>
    </main>
  )
}
