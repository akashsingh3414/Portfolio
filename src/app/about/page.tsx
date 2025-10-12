import Image from "next/image"
import { Container } from "@/components/container"

export default function AboutPage() {
  const techLinks: Record<string, string> = {
    cpp: "https://isocpp.org",
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ts: "https://www.typescriptlang.org/",
    python: "https://www.python.org/",
    java: "https://www.oracle.com/java/",
    fastapi: "https://fastapi.tiangolo.com/",
    nestjs: "https://nestjs.com/",
    nodejs: "https://nodejs.org/",
    express: "https://expressjs.com/",
    react: "https://react.dev/",
    mongodb: "https://www.mongodb.com/",
    mysql: "https://www.mysql.com/",
    postgresql: "https://www.postgresql.org/",
    docker: "https://www.docker.com/",
    aws: "https://aws.amazon.com/",
    git: "https://git-scm.com/",
    jest: "https://jestjs.io/",
    postman: "https://www.postman.com/",
  }

  const techIcons = Object.keys(techLinks)

  return (
    <Container>
      <section aria-labelledby="intro-heading" className="space-y-6">
        <h1
          id="intro-heading"
          className="font-sans text-3xl md:text-4xl font-extrabold text-balance"
        >
          Hey there!, I&apos;m Akash{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
        </h1>

        <p className="leading-relaxed">
          I&apos;m passionate about programming and always love learning new ways to solve problems. I work with languages like <span className="text-blue-600 font-medium">Python</span>, <span className="text-blue-600 font-medium">C++</span>, and <span className="text-blue-600 font-medium">JavaScript/TypeScript</span>. My main areas of interest are building <span className="text-blue-600 font-medium">backend systems</span> and <span className="text-blue-600 font-medium">scalable applications</span>, while also exploring <span className="text-blue-600 font-medium">AI</span>, <span className="text-blue-600 font-medium">Machine Learning</span>, and <span className="text-blue-600 font-medium">Data Science</span>.
        </p>

        <hr className="border-border mt-6" />

        <p className="leading-relaxed">
          My tech stack includes a wide variety of languages, frameworks, and tools that help me build <span className="font-medium">efficient, scalable, and reliable applications</span>. I enjoy working with databases like <span className="text-blue-600 font-medium">PostgreSQL</span> and <span className="text-blue-600 font-medium">MongoDB</span>, containerization with <span className="text-blue-600 font-medium">Docker</span>, cloud services like <span className="text-blue-600 font-medium">AWS</span>, and a bunch of developer tools like <span className="text-blue-600 font-medium">Git</span>, <span className="text-blue-600 font-medium">Jest</span>, and <span className="text-blue-600 font-medium">Postman</span>.
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
          PS: When I&apos;m not coding, I stay active and energized with table tennis, music, and a bit of exploring new hobbies.
        </p>
      </section>
    </Container>
  )
}
