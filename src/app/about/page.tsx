import Image from "next/image"
import { Container } from "@/components/container"

export default function AboutPage() {
  const techLinks: Record<string, string> = {
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ts: "https://www.typescriptlang.org/",
    python: "https://www.python.org/",
    cpp: "https://isocpp.org",
    nodejs: "https://nodejs.org/",
    nestjs: "https://nestjs.com/",
    express: "https://expressjs.com/",
    react: "https://react.dev/",
    fastapi: "https://fastapi.tiangolo.com/",
    pytorch: "https://pytorch.org/",
    postgresql: "https://www.postgresql.org/",
    mongodb: "https://www.mongodb.com/",
    mysql: "https://www.mysql.com/",
    docker: "https://www.docker.com/",
    aws: "https://aws.amazon.com/",
    git: "https://git-scm.com/",
    github: "https://github.com/",
    jest: "https://jestjs.io/",
    linux: "https://www.linux.org/",
  }

  const techIcons = Object.keys(techLinks)

  return (
    <Container>
      <section aria-labelledby="intro-heading" className="space-y-6">
        <h1
          id="intro-heading"
          className="font-sans text-3xl md:text-4xl font-extrabold text-balance"
        >
          Hey there, I&apos;m Akash{" "}
          <span className="inline-block animate-wave origin-[70%_70%] cursor-pointer hover:scale-110">
            👋
          </span>
        </h1>

        <p className="leading-relaxed">
          I&apos;m a <span className="text-blue-600 font-medium">Software Developer</span> and final-year B.Tech student at{" "}
          <span className="font-medium">IIIT Manipur</span> (CGPA: 8.23/10), passionate about building{" "}
          <span className="text-blue-600 font-medium">scalable backend systems</span> and{" "}
          <span className="text-blue-600 font-medium">production-ready applications</span>. Currently working as a{" "}
          <span className="text-blue-600 font-medium">Software Developer Intern at Truxie (Prayas Logistics)</span>, where I design and implement{" "}
          <span className="font-medium">high-performance backend services</span> using{" "}
          <span className="text-blue-600 font-medium">NestJS</span>,{" "}
          <span className="text-blue-600 font-medium">TypeScript</span>, and{" "}
          <span className="text-blue-600 font-medium">PostgreSQL</span>.
        </p>

        <p className="leading-relaxed">
          I specialize in building <span className="font-medium">robust, transaction-safe systems</span> with features like{" "}
          <span className="text-blue-600 font-medium">concurrency control</span>,{" "}
          <span className="text-blue-600 font-medium">idempotency</span>,{" "}
          <span className="text-blue-600 font-medium">retry logic</span>, and{" "}
          <span className="text-blue-600 font-medium">API rate limiting</span>. I&apos;ve designed{" "}
          <span className="font-medium">50+ REST APIs</span> following{" "}
          <span className="text-blue-600 font-medium">clean architecture patterns</span> and written comprehensive{" "}
          <span className="text-blue-600 font-medium">Jest unit and e2e tests</span> in Agile environments.
        </p>

        <hr className="border-border mt-6" />

        <p className="leading-relaxed">
          Beyond backend development, I&apos;ve built production-ready projects including{" "}
          <span className="font-medium">NeuroSonic Audio CNN</span> (80-85% accuracy environmental sound classifier using{" "}
          <span className="text-blue-600 font-medium">PyTorch ResNet</span> with 15% performance boost through data augmentation),{" "}
          <span className="font-medium">Semantic Book Recommender</span> (semantic search and sentiment analysis across 7,000+ books using{" "}
          <span className="text-blue-600 font-medium">LangChain</span> and{" "}
          <span className="text-blue-600 font-medium">ChromaDB</span>), and{" "}
          <span className="font-medium">SwiftChat</span> (real-time chat with{" "}
          <span className="text-blue-600 font-medium">WebRTC video calling</span> and{" "}
          <span className="text-blue-600 font-medium">Socket.IO messaging</span>).
        </p>

        <p className="leading-relaxed">
          I&apos;m a strong problem solver with a{" "}
          <span className="text-blue-600 font-medium">1631 LeetCode rating</span> and{" "}
          <span className="font-medium">500+ DSA problems solved</span>. My{" "}
          <span className="text-blue-600 font-medium">300+ GitHub commits</span> reflect my commitment to writing clean, maintainable code and following industry best practices.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {techIcons.map((icon) => (
            <a
              key={icon}
              href={techLinks[icon]}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.toUpperCase()}
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={icon}
                width={48}
                height={48}
                unoptimized
              />
            </a>
          ))}
        </div>

        <p className="leading-relaxed mt-16 italic text-lg">
          Outside of coding, I enjoy playing table tennis - it&apos;s my go-to way
          to unwind and stay energized.
        </p>
      </section>
    </Container>
  )
}