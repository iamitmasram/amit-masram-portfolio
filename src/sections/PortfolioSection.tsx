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
    company: "Tourease",
    role: "Founder",
    details: "Building an AI-powered personalized tour guide for travelers."
  },
  {
    company: "AI Research Project",
    role: "Lead Developer",
    details: "Developing advanced AI models for natural language processing."
  },
  {
    company: "Tech Startup X",
    role: "Full-Stack Developer",
    details: "Contributed to the development of a scalable web application."
  }
];
const projectItems: ProjectItem[] = [
  {
    name: "Tourease",
    description: "AI-powered personalized tour guide application.",
    link: "#"
  },
  {
    name: "AI Chatbot",
    description: "Advanced chatbot using natural language processing.",
    link: "#"
  },
  {
    name: "Portfolio Website",
    description: "This responsive portfolio website built with Next.js and React.",
    link: "#"
  }
];
const writingItems: WritingItem[] = [
  {
    title: "The Future of AI in Travel",
    description: "Exploring how AI is revolutionizing the travel industry.",
    link: "#"
  },
  {
    title: "Building Scalable Web Applications",
    description: "Lessons learned from developing high-performance web apps.",
    link: "#"
  },
  {
    title: "Prompt Engineering: The New Frontier",
    description: "Insights into effectively communicating with AI models.",
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
          className={`absolute top-4 right-4 ${isDarkMode ? 'text-gray-200 border-gray-200' : 'text-gray-700 border-gray-700'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <main className="max-w-2xl w-full p-15 ">
          <h1 className={`text-6xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Amit Masram</h1>
          <p className="text-sm mb-8 text-center">Email | Twitter | Linkedin | Github</p>
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
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Work</h2>
            {workItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <h3 className="font-semibold">{item.company}</h3>
                    <p className="text-sm">{item.role}</p>
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
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
            {projectItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Writings</h2>
            {writingItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
        </main>
        <footer className="mt-13 flex flex-wrap justify-center gap-4 text-sm">
  <p className={`px-3 py-1 rounded-full ${
    isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-700'
  }`}>
    © {new Date().getFullYear()} Amit Masram. All rights reserved.
  </p>
</footer>

      </div>
    </div>
  )
}