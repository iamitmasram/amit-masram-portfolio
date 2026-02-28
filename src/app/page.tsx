'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown, ChevronUp } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import Image from 'next/image'
import AmitImage from '@/assets/amitmasram.png'


interface WorkItem {
  company: string;
  role: string;
  details: string;
  image?: string;
  link?: string;
}
interface ProjectItem {
  name: string;
  description: string;
  link: string;
  image: string;
}

interface WritingItem {
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
}
// Define the Thoughts interface
interface ThoughtItem {
  content: string;
  //  date: string;
}


const workItems: WorkItem[] = [

  {
    company: "Delaplex",
    role: "Software Developer Intern",
    details: "Working on mobile app development team, specializing in Flutter and Firebase. Building cross-platform applications and implementing real-time features & services.",
    image: "https://s3-symbol-logo.tradingview.com/delaplex-ltd--600.png",
    link: "https://delaplex.com/"
  }
];


// Sample thought items
const thoughtItems: ThoughtItem[] = [
  { content: " \"We're here for a limited time, but the possibilities are endless.\" -- Let's talk!" },

];

const projectItems: ProjectItem[] = [

  {
    name: "Tourease",
    description: "An AI app providing personalized itineraries and real-time travel recommendations.",
    link: "https://tourease.netlify.app/",
    image: "https://avatars.githubusercontent.com/u/183259969?s=200&v=4"
  },
  {
    name: "Fluentype",
    description: "Helps users to improve typing speed while learning English — built from a simple idea to support a friend.",
    link: "https://fluentype.xyz/",
    image: "https://i.pinimg.com/1200x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg"
  },

  {
    name: "QuickWorker",
    description: "Connects you with local workers like electricians, plumbers, and more — fast and hassle-free.",
    link: "https://github.com/amitmasram/QuickWorker",
    image: "https://i.pinimg.com/1200x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg"
  },


  {
    name: "Hometro",
    description: "Find the homes and rentals properies within your city on a exclusive deals ",
    link: "https://hometro.in/",
    image: "https://instagram.fnag1-2.fna.fbcdn.net/v/t51.2885-19/601498931_17898965889355074_397475704889087774_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fnag1-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFggeEgIe05IRup7006fsyrJ-_rD0Y-M7ChgO9xEcBUSF-AwMUkwO2_YNbAZnrZSqzt8gpTAMSHD0jY5OiupMbz&_nc_ohc=FpFKpfnjEm0Q7kNvwHH4V7S&_nc_gid=IGujkcPvSz6YphP39W2I8Q&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfmFGPcXsCbsnVtJJAxCu748tXLmI3NhtYmF6oBII-9jzA&oe=694E3607&_nc_sid=7d3ac5"
  },
  {
    name: "Legaly",
    description: "Analyze and verify any document, paper, or agreement using AI.",
    link: "https://legalyai.vercel.app/",
    image: "https://cdn4.vectorstock.com/i/1000x1000/96/33/modern-letter-l-with-overlapping-line-logo-design-vector-43539633.jpg"
  },
  {
    name: "SnipAI",
    description: "The Messenger AI Agent - In progress...",
    link: "https://trysnipai.vercel.app/",
    image: "https://i.pinimg.com/564x/6b/0a/3a/6b0a3a3e6d3009793e96e2b2e99475ac.jpg"
  },
  {
    name: "OpenLaunch",
    description: "A Product Hunt-inspired platform to launch brands, software, and products online.",
    link: "https://openlaunch.lovable.app",
    image: "https://i.pinimg.com/736x/50/29/69/5029694bfb2ceca6026b036a4769b71f.jpg"
  },
  {
    name: "Proptrader",
    description: "Curious to building a trading platform for real estate. (In Progress...)",
    link: "https://proptrader.co/",
    image: "https://i.pinimg.com/1200x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg"
  },



];


export default function PortfolioLanding() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const navigateToHackathons = () => {
    router.push('/hackathons')
  }
  const navigateToEvolutionOfInformation = () => {
    router.push('/evolution')
  }

  const navigateToOpenSource = () => {
    router.push('/opensource')
  }
  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index)
  }

  // Define writing items with navigation functions
  const writingItems: WritingItem[] = [
    {
      title: "Translating Animal Language: Science Fiction or Future Science? (In Progress)",
      description: "Exploring my plans and aspirations.",
      link: "#"
    },
    {
      title: "How Humans Have Stored Information: From Stone Marks to the Internet Age",
      description: "A history of humanity's journey in storing and sharing information.",
      onClick: navigateToEvolutionOfInformation
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300`}>
      <div className="flex flex-col items-center justify-center p-4 min-h-screen">

        <Button
          size="icon"
          className={`absolute top-4 right-4 md:top-8 md:right-8 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <main className="max-w-2xl w-full p-6">

          <div className="flex items-center gap-6 mb-6">
            <div className="flex-shrink-0 flex items-start pt-8">
              <Image
                src={AmitImage}
                alt="Amit Masram"
                width={90}
                height={90}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col items-start pl-4 justify-start" style={{ marginTop: '-0.5rem' }}>
              <h1
                className={`text-2xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}
                style={{ marginBottom: '0.25rem' }}
              >
                Amit Masram
              </h1>
              {/* Location with minimal globe icon */}
              <div className="flex items-center text-xs text-gray-500 mb-1">
                {/* Minimal Globe Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" fill="none" />
                  <ellipse cx="10" cy="10" rx="3.5" ry="8" stroke="currentColor" fill="none" />
                  <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" />
                </svg>
                <span>Tech Valley, Mars</span>
              </div>
              {/* Social links */}
              <div className="text-sm mt-0 flex items-center">
                <a
                  href="https://x.com/amitxmasram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  X
                </a>
                <span className="text-gray-400 mx-1">|</span>
                <a
                  href="https://www.linkedin.com/in/amitmasram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  LinkedIn
                </a>
                <span className="text-gray-400 mx-1">|</span>
                <a
                  href="https://github.com/amitmasram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>



          <div className="mb-5 space-y-4 text-left">
            <p className={`text-[1.037rem] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              I try to put my work out into the world in a way that contributes to others and helps make things better.
            </p>

            <p className={`text-[1.037rem] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Learning to become a better engineer and thinker excites me, developing the foundation to build things and understand the world.
              I specialize in building full-stack apps.
            </p>
            <p className={`text-[1.037rem] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              I take part in <span onClick={navigateToHackathons} className="text-blue-600 hover:underline cursor-pointer">hackathons</span> and contribute to <span onClick={navigateToOpenSource} className="text-blue-600 hover:underline cursor-pointer">opensource</span>. Beyond that, I like to read and try new things.
            </p>
          </div>



          <div className="mb-5">
            <h2 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
            <div className="flex flex-col gap-0">
              {projectItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src={item.image || "https://via.placeholder.com/60"}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <a href={item.link} className="block hover:underline">
                      <h3 className="text-[15px] font-semibold leading-tight">{item.name}</h3>
                      <p className="text-[0.97rem] text-gray-500">{item.description}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>




          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Writings</h2>
              <a href="#" className="text-blue-500 text-xs font-medium underline hover:underline">View all</a>
            </div>
            <ul className="space-y-3 list-none pl-0">
              {writingItems.map((item, index) => (
                <li key={index} className="flex flex-col gap-0">
                  {item.onClick ? (
                    <div
                      onClick={item.onClick}
                      className="flex flex-row items-center gap-3 group cursor-pointer"
                    >
                      <span
                        className={`text-[1.1rem] select-none ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}
                        style={{ lineHeight: '1.5', marginTop: '2px' }}
                      >
                        ⁕
                      </span>
                      <h3 className="text-[15px] font-semibold leading-tight group-hover:underline">{item.title}</h3>
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="flex flex-row items-center gap-3 group"
                    >
                      <span
                        className={`text-[1.1rem] select-none ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}
                        style={{ lineHeight: '1.5', marginTop: '2px' }}
                      >
                        ⁕
                      </span>
                      <h3 className="text-[15px] font-semibold leading-tight group-hover:underline">{item.title}</h3>
                    </a>
                  )}
                  <p className="text-[0.97rem] text-gray-500 ml-6">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-black'}`}>Inner Code</h2>
            {thoughtItems.map((item, index) => (
              <div key={index} className="mb-4">

                <p className="text-base italic font-thin" style={{ fontFamily: 'Georgia, serif' }}>{item.content}</p>



              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 mb-8">
            <hr className="w-full border-t border-gray-300 my-2" />
            <p className="text-[15px] text-center">
              My DMs are always open — <a href="https://x.com/messages/compose?recipient_id=1332622199786598403" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">reach out on X</a> anytime.
            </p>
            <p className="text-[15px] text-center">
              Email: <a href="mailto:amitxmasram@gmail.com" className="text-blue-500 underline">amitxmasram@gmail.com</a>
            </p>
            <hr className="w-full border-t border-gray-300 my-2" />
          </div>


        </main>



      </div>
    </div>
  )
}