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
    title: "Tenki Talk (Weather-Aware AI)",
    stack: "Next.js, Vercel AI SDK, Groq, Hugging Face, Firebase Auth, Web Speech API",
    description:
      "Built a **weather-aware AI travel planner** using **Groq** with **Hugging Face** as fallback via the **Vercel AI SDK**. Implemented **context-aware conversations** by forwarding session history on each request, significantly improving response relevance. Architected a modular AI pipeline with provider-agnostic JSON extraction, multi-level fallbacks across AI providers and voice input, and a prompt system that ties every recommendation to real-time weather data.",
    github: "https://github.com/akashsingh3414/Tenki-Talk-Weather-AI",
    deployment: "https://tenki-talk-weather-ai.vercel.app/",
    date: "Jan 2026",
  },
  {
    title: "NeuroSonic Audio CNN",
    stack: "PyTorch, NumPy, Pandas, FastAPI, Docker, Python",
    description:
      "Developed an environmental sound classifier using a **ResNet-based CNN** on **ESC-50 dataset** (2,000 samples, 50 classes), achieving **80-85% accuracy**. Enhanced model performance by **15%** through **data augmentation** with **mel-spectrogram transformations**, **pitch shifting**, **time stretching**, and **mixup regularization**.",
    github: "https://github.com/akashsingh3414/NeuroSonic-Audio-CNN",
    date: "Nov 2025",
  },
  {
    title: "Semantic Book Recommender",
    stack: "Python, Hugging Face, LangChain, ChromaDB, Gradio, Transformers",
    description:
      "Created a recommendation system with **sentence-transformer embeddings** for **semantic search**, **zero-shot classification** for genres, and **sentiment analysis** across **7,000+ books**. Integrated **ChromaDB vector database** for fast similarity search with **preprocessing pipeline** for text cleaning, tokenization, and normalization using **Pandas** and **NumPy**.",
    github: "https://github.com/akashsingh3414/Semantic-Book-Recommender",
    date: "Oct 2025",
  },
  {
    title: "SwiftChat",
    stack: "MongoDB, Express, React, Node.js, Socket.IO, PeerJS, Zustand",
    description: "Designed a **real-time chat platform** with **Socket.IO messaging**, group spaces, **WebRTC video calling**, and shared video rooms with **independent playback controls**. Added presence tracking, automatic video cleanup, and **state management** with **Zustand** for handling user interactions and UI updates.",
    github: "https://github.com/akashsingh3414/swiftchat",
    deployment: "https://swiftchatnew.onrender.com/",
    date: "Feb 2025",
  },
  {
    title: "ThoughtFlow",
    stack: "MongoDB, Express, React, Node.js, Redux Toolkit, OAuth2.0",
    description:
      "Created a **secure full-stack blogging platform** with **JWT authentication**, **user roles**, content publishing, and **admin moderation**. Front-end built with **Redux Toolkit** and **Tailwind CSS** for a clean, responsive UI.",
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
            description={project.description.split(". ")}
            github={project.github}
            meta={{ stack: project.stack, date: project.date }}
            deployment={project.deployment}
          />
        ))}
      </div>
    </Container>
  )
}
