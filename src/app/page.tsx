"use client"

import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import { MdEmail } from "react-icons/md"

export default function HomePage() {
  return (
    <Container>
      <section
        aria-labelledby="intro-heading"
        className="flex flex-col items-center text-center py-4 space-y-8"
      >
        <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/me.jpeg"
            alt="Akash Singh"
            fill
            className="object-cover object-[center_10%]"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hi, I am Akash{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
        </h1>

        <p className="max-w-xl text-gray-600 text-lg md:text-xl">
          Checkout my latest{" "}
          <Link
            href="/projects"
            className="relative text-blue-600 font-medium transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-800"
          >
            projects
          </Link>{" "}
          and{" "}
          <Link
            href="/articles"
            className="relative text-blue-600 font-medium transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-800"
          >
            articles
          </Link>
          <span className="inline-block ml-2 animate-slide-x">→</span>
        </p>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/akashsingh3414/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-transform duration-300 transform hover:scale-110 w-10 h-10"
          >
            <SiLinkedin className="w-full h-full" />
          </a>

          <a
            href="https://github.com/akashsingh3414"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-700 transition-transform duration-300 transform hover:scale-110 w-10 h-10`}
          >
            <SiGithub className="w-full h-full" />
          </a>

          <a
            href="mailto:akashsingh3414@gmail.com"
            className="text-gray-700 hover:text-red-500 transition-transform duration-300 transform hover:scale-110 w-10 h-10 flex items-center justify-center"
          >
            <MdEmail className="w-full h-full" />
          </a>

          <a
            href="https://www.instagram.com/aakashsingh3414/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition-transform duration-300 transform hover:scale-110 w-10 h-10"
          >
            <SiInstagram className="w-full h-full" />
          </a>
        </div>
      </section>
    </Container>
  )
}
