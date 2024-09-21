'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown, ChevronUp } from "lucide-react"

interface WorkItem {
  company: string;
  role: string;
  details: string;
}
interface ProjectItem {
  name: string;
  description: string;
  link: string;
}

interface WritingItem {
  title: string;
  description: string;
  link: string;
}

const workItems: WorkItem[] = [
  {
    company: "Self-taught Learning & Building",
    role: "Independent Developer & Learner",
    details: "Dedicated to mastering software development through hands-on projects and continuous learning. Built several full-stack applications and explored various tech stacks, including Flutter, Node.js, AI integration, and backend technologies."
  }
];

const projectItems: ProjectItem[] = [
  {
    name: "Tourease",
    description: "An AI-powered application designed to serve as a personalized tour guide, providing customized itineraries, local insights, and real-time travel recommendations.",
    link: "#"
  },
  {
    name: "AI Chatbot",
    description: "A conversational AI chatbot leveraging natural language processing to engage in human-like interactions, enhancing customer support and user experience.",
    link: "#"
  },
  {
    name: "AI Image-Generator",
    description: "A generative AI tool that transforms textual inputs into visually compelling images, using state-of-the-art machine learning techniques.",
    link: "#"
  }
];

const writingItems: WritingItem[] = [
  {
    title: "My Journey to SF (In Progress)",
    description: "A personal account documenting my experiences and challenges in building a startup, including insights on tech entrepreneurship and innovation.",
    link: "#"
  },
  {
    title: "-1 to 0 (In Progress)",
    description: "A detailed narrative of how I transitioned into the AI field, starting from zero coding experience and building proficiency in artificial intelligence.",
    link: "#"
  }
];

export default function PortfolioLanding() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300`}>
      <div className="flex flex-col items-center justify-center p-4 min-h-screen">
        <Button
          variant="outline"
          size="icon"
          className={`absolute top-4 right-4 md:top-8 md:right-8 ${isDarkMode ? 'text-gray-200 border-gray-200' : 'text-gray-700 border-gray-700'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <main className="max-w-2xl w-full p-6">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Amit Masram</h1>
          <p className="text-sm mb-8 text-center">
            <a href="mailto:amitmasram831@gmail.com" className="hover:underline">Email</a> |
            <a href="https://x.com/AmitMasram10" target="_blank" rel="noopener noreferrer" className="hover:underline"> Twitter</a> |
            <a href="https://www.linkedin.com/in/amit-masram/" target="_blank" rel="noopener noreferrer" className="hover:underline"> LinkedIn</a> |
            <a href="https://github.com/Amitmasram" target="_blank" rel="noopener noreferrer" className="hover:underline"> GitHub</a>
          </p>

          <div className="mb-12 space-y-4 text-left">
            <p className="text-m">
              An Engineer, I’m currently building Tourease app, an AI-powered personalized tour guide for your travels,
            </p>
            <p className="text-m">
              I enjoy learning to be a better engineer and thinker. Developing the foundation to build things and understand the world.
              Building Full-Stack Apps with AI and diving deep into Prompt Engineering to be able to better communicate with AI effectively.
            </p>
            <p className="text-m">
              I am also set on moving to SF after graduation to further my journey in tech.
            </p>
            <p className="text-m">
              Beyond tech, I like to travel and wildlife, which inspires and enriches my professional and personal life.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className={`${isDarkMode ? 'text-gray-200 border-gray-200 hover:bg-gray-900' : 'text-gray-700 border-gray-700 hover:bg-gray-100'}`}
            >
              View Projects
            </Button>
            <Button
              className={`${isDarkMode ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
            >
              Contact Me
            </Button>
          </div>

          <div className="mb-12">
            <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Work</h2>
            {workItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <h3 className="text-base font-semibold">{item.company}</h3>
                    <p className="text-base">{item.role}</p>
                  </div>
                  {expandedItem === index ?
                    <ChevronUp className="h-5 w-5" /> :
                    <ChevronDown className="h-5 w-5" />
                  }
                </div>
                {expandedItem === index && (
                  <p className="mt-2 text-sm">{item.details}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
            {projectItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="text-sm">{item.description}</p>
                </a>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Writings</h2>
            {writingItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-13 flex flex-wrap justify-center gap-4 text-sm">
          <p className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
            © {new Date().getFullYear()} Amit Masram. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  )
}
