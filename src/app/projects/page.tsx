import { Container } from "@/components/container"
import ListingCard from "@/components/listing"

type Project = {
  title: string
  stack: string
  description: string
  github: string
  deployment?: string
  date: string
}

const projects: Project[] = [
  {
    title: "Semantic Book Recommender",
    stack: "Python, Hugging Face, LangChain, ChromaDB, Gradio, Transformers",
    description:
      "Built a semantic book recommendation system using Hugging Face LLMs for semantic search, zero-shot genre classification, and emotion analysis. Features an interactive Gradio dashboard for intelligent book discovery.",
    github: "https://github.com/akashsingh3414/Semantic-Book-Recommender",
    date: "Oct 2025",
  },
  {
    title: "NeuroSonic Audio CNN",
    stack: "PyTorch, NumPy, Pandas, FastAPI, Docker, Python",
    description:
      "Developed and evaluated an environmental sound classifier using Mel Spectrograms and a ResNet-based CNN on the ESC-50 dataset, achieving 80% classification accuracy.",
    github: "https://github.com/akashsingh3414/NeuroSonic-Audio-CNN",
    date: "Aug 2025",
  },
  {
    title: "SwiftChat",
    stack: "MongoDB, Express, React, Node.js, Socket.IO, PeerJS, Zustand",
    description:
      "Built a real-time communication platform with messaging, spaces for group conversations, and WebRTC-based video calling. Managed global state with Zustand for a smooth and responsive UX.",
    github: "https://github.com/akashsingh3414/swiftchat",
    deployment: "https://swiftchatnew.onrender.com/",
    date: "Feb 2025",
  },
  {
    title: "ThoughtFlow",
    stack: "MongoDB, Express, React, Node.js, Redux Toolkit, OAuth2.0",
    description:
      "Created a secure full-stack blogging platform with JWT authentication, user roles, content publishing, and admin moderation. Front-end built with Redux Toolkit and Tailwind CSS for a clean, responsive UI.",
    github: "https://github.com/akashsingh3414/Thought-Flow",
    deployment: "https://blogthoughtflow.onrender.com/",
    date: "Oct 2024",
  },
]

export default function ProjectsPage() {
  return (
    <Container>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ListingCard
            key={project.title}
            title={project.title}
            description={project.description}
            github={project.github}
            meta={{ stack: project.stack, date: project.date }}
            deployment={project.deployment}
          />
        ))}
      </div>
    </Container>
  )
}
