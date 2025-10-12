import Image from "next/image"
import { Container } from "@/components/container"

export default function AboutPage() {
  const techLinks: Record<string, string> = {
    cpp: "https://isocpp.org",
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ts: "https://www.typescriptlang.org/",
    python: "https://www.python.org/",
    java: "https://www.oracle.com/java/",
    react: "https://react.dev/",
    html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    tailwind: "https://tailwindcss.com/",
    nestjs: "https://nestjs.com/",
    express: "https://expressjs.com/",
    nodejs: "https://nodejs.org/",
    mongodb: "https://www.mongodb.com/",
    mysql: "https://www.mysql.com/",
    postgresql: "https://www.postgresql.org/",
    git: "https://git-scm.com/",
    jest: "https://jestjs.io/",
    linux: "https://www.linux.org/",
    postman: "https://www.postman.com/",
    docker: "https://www.docker.com/",
    aws: "https://aws.amazon.com/",
  }

  const techIcons = Object.keys(techLinks)

  return (
    <Container>
      <section aria-labelledby="intro-heading" className="space-y-6">
        <h1
          id="intro-heading"
          className="font-sans text-3xl md:text-4xl font-extrabold text-balance"
        >
          Hi, I am Akash{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span> 
        </h1>
        

       <p className="leading-relaxed">
          I&apos;m passionate about understanding how things work, especially in technology, and enjoy solving problems with curiosity and logic. Outside of coding, I like staying active and energized through activities like table tennis and listening to music.
        </p>

        <p className="leading-relaxed">
          I enjoy building tools and software that solve real problems. I work with{" "}
          <span className="text-blue-600 font-medium">JavaScript</span>,{" "}
          <span className="text-blue-600 font-medium">TypeScript</span>,{" "}
          <span className="text-blue-600 font-medium">Python</span>,{" "}
          <span className="text-blue-600 font-medium">Node.js</span>,{" "}
          <span className="text-blue-600 font-medium">React</span>, and{" "}
          <span className="text-blue-600 font-medium">NestJS</span>. I also have experience with{" "}
          <span className="text-blue-600 font-medium">PostgreSQL</span>,{" "}
          <span className="text-blue-600 font-medium">MongoDB</span>,{" "}
          <span className="text-blue-600 font-medium">Docker</span>, and{" "}
          <span className="text-blue-600 font-medium">AWS</span>.
        </p>

        <p className="leading-relaxed">
          I approach problems rationally, learning from multiple perspectives and iterating on solutions. Exploring the mechanics behind systems and experimenting with technology is what drives me.
        </p>

        <hr className="border-border mt-6" />

        <p className="leading-relaxed">
          The tech stack I work with includes a variety of languages, frameworks, and tools that help me build <span className="font-medium">efficient, scalable, and reliable applications</span>.
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

        <hr className="border-border mt-10" />
      </section>
    </Container>
  )
}
