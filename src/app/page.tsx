'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown, ChevronUp } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"


interface WorkItem {
  company: string;
  role: string;
  details: string;
}
interface ProjectItem {
  name: string;
  description: string;
  link: string;
  image:string;
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


// Sample thought items
const thoughtItems: ThoughtItem[] = [
  { content: "Create, iterate, and evolve.", date: "September 2024" },
  { content: "Vision is nothing without execution.", date: "September 2024" },
  { content: "In the end, only one will stand.", date: "August 2024" },
];

const projectItems: ProjectItem[] = [

  {
    name: "Tourease",
    description: "An AI app providing personalized itineraries and real-time travel recommendations.",
    link: "https://tourease.netlify.app/",
    image:"https://avatars.githubusercontent.com/u/183259969?s=200&v=4"
  },
  {
    name: "Legaly AI",
    description: "Building B2B AI-SaaS (Stealth Mode)",
    link: "https://legalyai.co/",
    image:"https://cdn4.vectorstock.com/i/1000x1000/96/33/modern-letter-l-with-overlapping-line-logo-design-vector-43539633.jpg"
  },
  {
    name: "Onero",
    description: "The Messenger AI Agent - In progress...",
    link: "#",
    image:"https://cdn.dribbble.com/userupload/10918702/file/original-6fe167d3e7dfbc6cadf6017535750a66.jpg?resize=1200x900"
  },

];

const writingItems: WritingItem[] = [
  { title: "Turning to Reality (In Progress)",
    description: "Exploring my plans and aspirations.",
    link: "#" },

  { title: "-1 to 0 (In Progress)",
     description: "In this journey, I’m validating various ideas and seeing how many will succeed.", link: "#" }];


export default function PortfolioLanding() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  // const [isDarkMode, setIsDarkMode] = useState(false)
  // const [expandedItem, setExpandedItem] = useState<number | null>(null)

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode)
  // }
  const navigateToHackathons = () => {
    router.push('/hackathons')
  }

  const navigateToOpenSource = () => {
    router.push('/opensource')
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
              I’m currently building <a href="https://tourease.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tourease</a> app, an AI-powered personalized tour guide for your travels,
            </p>
            <p className="text-m">
              I enjoy learning to be a better engineer and thinker. Developing the foundation to build things and understand the world.
              Building Full-Stack Apps with AI and diving deep into Prompt Engineering to be able to better communicate with AI effectively.
              {/* I like to do <span onClick={navigateToHackathons} className="text-blue-600 hover:underline cursor-pointer">Hackathons</span> &nbsp;&
              <span onClick={navigateToOpenSource} className="text-blue-600 hover:underline cursor-pointer"> OpenSource</span> */}
            </p>
            <p className="text-m">
              {/* I'm also set on moving to SF after graduation to further my journey in tech. */}
              I take part in <span onClick={navigateToHackathons} className="text-blue-600 hover:underline cursor-pointer" >hackathons</span> and contribute to <span onClick={navigateToOpenSource} className="text-blue-600 hover:underline cursor-pointer">opensource</span>. Beyond that, I like to read and try new things.
            </p>
            {/* <p className="text-m">
              Beyond tech, I like to travel and wildlife, which inspires and enriches my professional and personal life.
            </p> */}
          </div>

          {/* <div className="flex justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className={`${isDarkMode ? 'text-gray-200 border-gray-200 hover:bg-gray-900' : 'text-gray-700 border-gray-700 hover:bg-gray-100'}`}
            >
              Hackathons
            </Button>
            <a href="mailto:amitmasram831@gmail.com">
  <Button
    className={`${isDarkMode ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
  >
    Get in Touch
  </Button>
</a>

          </div> */}

          <div className="mb-12">
            <h2 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Work</h2>
            {workItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                  <h3 className="text-[15px] font-semibold">{item.company}</h3>
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
  <h2 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
  {projectItems.map((item, index) => (
    <div key={index} className="mb-4 flex items-start gap-4">
      <img
        src={item.image || "https://via.placeholder.com/60"} // Placeholder if no image
        alt={item.name}
        className="w-7 h-7 object-cover rounded-md" // Adjusted size
      />
      <div>
        <a href={item.link} className="block hover:underline">
          <h3 className="text-[15px] font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </a>
      </div>
    </div>
  ))}
</div>

          {/* <div className="mb-12">
            <h2 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
            {projectItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                <h3 className="text-[15px] font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </a>
              </div>
            ))}
          </div> */}

          <div className="mb-12">
            <h2 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Writings</h2>
            {writingItems.map((item, index) => (
              <div key={index} className="mb-4">
                <a href={item.link} className="block hover:underline">
                <h3 className="text-[15px] font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Thoughts</h2>
            {thoughtItems.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-[14px]">{item.content}</p>
                <p className="text-[12px] text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 mb-8">
          {/* <div className="flex justify-center gap-4 mb-12"> */}
          {/* <Button 
              variant="outline" 
              className={`${isDarkMode ? 'text-gray-200 border-gray-200 hover:bg-gray-900' : 'text-gray-700 border-gray-700 hover:bg-gray-100'}`}
              onClick={navigateToHackathons}
            >
              Hackathons
            </Button> */}
            <a href="mailto:amitmasram831@gmail.com">
            <Button
    className={`${isDarkMode ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
  >
    Get in Touch
  </Button>
</a>
<p className="text-[14px] text-center">Reach out if you want to chat, you can usually find me on Twitter.</p>
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


