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
// Define the Thoughts interface
interface ThoughtItem {
  content: string;
  date: string;
}

const workItems: WorkItem[] = [{ company: "Tourease", role: "Solo Developer", details: "Turning concepts into reality while continuously learning and refining my skills." }];

<<<<<<< HEAD
// Sample thought items
const thoughtItems: ThoughtItem[] = [
  { content: "Embracing challenges as opportunities for growth.", date: "September 2024" },
  { content: "In the end, only one will stand.", date: "August 2024" },
  { content: "At the end there will be a only one.", date: "September 2024" },
];
=======

>>>>>>> bc399779678437156a63e32e87ebe2851e98cb24
const projectItems: ProjectItem[] = [
  {
    name: "Tourease",
    description: "An AI app providing personalized itineraries and real-time travel recommendations.",
    link: "#"
  },
  {
    name: "AI Chatbot",
    description: "A conversational AI that enhances customer support through human-like interactions.",
    link: "#"
  },
  {
    name: "AI Image Generator",
    description: "A tool that creates images from text using advanced machine learning techniques.",
    link: "#"
  }
];


const writingItems: WritingItem[] = [
<<<<<<< HEAD
  { title: "Turning to Reality (In Progress)",
  description: "Exploring my plans and aspirations.",
   link: "#" },
=======
  { title: "Turning to Reality (In Progress)", 
  description: "Exploring my plans and aspirations.",
   link: "#" }, 
>>>>>>> bc399779678437156a63e32e87ebe2851e98cb24
  { title: "-1 to 0 (In Progress)",
     description: "In this journey, I’m validating various ideas and seeing how many will succeed.", link: "#" }];


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
            {/* <a href="mailto:amitmasram831@gmail.com" className="hover:underline">Email</a> | */}
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
            <a href="mailto:amitmasram831@gmail.com">
  <Button
    className={`${isDarkMode ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
  >
    Get in Touch
  </Button>
</a>

          </div>

          <div className="mb-12">
            <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Work</h2>
            {workItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <h3 className="text-base font-semibold">{item.company}</h3>
                    <p className="text-sm">{item.role}</p>
                  </div>
                  {expandedItem === index ?
                    <ChevronUp className="h-5 w-5" /> :
                    <ChevronDown className="h-5 w-5" />
                  }
                </div>
                {expandedItem === index && (
                  <p className="mt-2 text-sm text-gray-500">{item.details}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
            {projectItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </a>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Writings</h2>
            {writingItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Thoughts</h2>
            {thoughtItems.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm">{item.content}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
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
