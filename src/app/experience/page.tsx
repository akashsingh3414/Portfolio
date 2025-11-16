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
          duration="05/2025 - 11/2025"
          description={
            <>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Worked on core backend logic for bidding, quote updates, and transaction handling, ensuring race conditions were avoided.
                </li>
                <li>
                  Implemented the quote-price calculation flow using a pipeline-style architecture.
                </li>
                <li>
                  Set up document and data workflows using Supabase for uploads, checks, and secure access.
                </li>
                <li>
                  Added cron jobs for tasks like refreshing quotes/bids and running scheduled recalculations.
                </li>
                <li>
                  Wrote detailed Jest tests (unit and e2e) with seed data to keep the system reliable and stable.
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
