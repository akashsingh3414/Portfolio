export const metadata = {
  title: "Experience",
}

import { ExperienceListCard } from "@/components/experience-listing"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
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
          duration="05/2025 - 11/2025"
          description={
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Developed scalable backend services using <strong>NestJS, TypeScript, and PostgreSQL</strong>,
                  handling high-throughput transactions with proper concurrency control.
                </li>
                <li>
                  Designed and implemented <strong>payment and payout services</strong> with idempotency keys,
                  retry mechanisms, and duplicate request detection to ensure consistency and fault tolerance.
                </li>
                <li>
                  Built a <strong>pipeline-based data processing architecture</strong> for pricing, payments,
                  and transaction workflows.
                </li>
                <li>
                  Implemented <strong>API rate limiting and request throttling</strong> via middleware to
                  protect services under high traffic and prevent abuse.
                </li>
                <li>
                  Worked on core domain APIs including <strong>shipments, bidding workflows, drivers, and payments</strong>,
                  contributing to end-to-end business-critical backend services.
                </li>
                <li>
                  Designed and maintained <strong>50+ REST APIs</strong> following clean architecture
                  principles in an Agile development environment.
                </li>
                <li>
                  Wrote comprehensive <strong>Jest unit and e2e tests</strong> with seed data to ensure
                  reliability, correctness, and regression safety.
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
