'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown, ChevronUp } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import Image from 'next/image'
import AmitImage from '@/assets/amitmasram.jpg'


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
  { content: " \"We're here for a limited time — in a multiverse of infinite, uncharted possibilities.\"  Let's talk." },

];

const projectItems: ProjectItem[] = [

  {
    name: "Tourease",
    description: "An AI app providing personalized itineraries and real-time travel recommendations.",
    link: "https://tourease.us/",
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
    link: "https://quickworker.xyz/",
    image: "https://www.imghost.net/ib/Zp9cYpuKSjXvegc_1752441869.png"
  },
  

  {
    name: "Hometro",
    description: "Find the homes and rentals properies within your city on a exclusive deals ",
    link: "https://hometro.co/",
    image:"https://www.imghost.net/ib/LxJZBOpht4Uqe4R_1730513430.jpg"
  },
  {
    name: "Legaly",
    description: "Building B2B AI-SaaS (Stealth Mode)",
    link: "https://legalyai.co/",
    image:"https://cdn4.vectorstock.com/i/1000x1000/96/33/modern-letter-l-with-overlapping-line-logo-design-vector-43539633.jpg"
  },
  {
    name: "SnipAI",
    description: "The Messenger AI Agent - In progress...",
    link: "https://trysnipai.co/",
    image:"https://i.pinimg.com/564x/6b/0a/3a/6b0a3a3e6d3009793e96e2b2e99475ac.jpg"
  },

];


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
  const navigateToZeroToOne = () => {
    router.push('/zerotoone')
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
      title: "-1 to 0",
      description: "In this journey, I'm validating various ideas and seeing how many will succeed.",
      onClick: navigateToZeroToOne
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
            <div className="flex-shrink-0">
              <Image
                src={AmitImage}
                alt="Amit Masram"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className={`pt-4 pl-4 text-3xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Amit Masram
              </h1>
              {/* Social links */}
              <div className="text-sm mb-8 text-center pt-4">
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



          <div className="mb-12 space-y-4 text-left">
            <p className="text-m">
              I try to put my work out into the world in a way that contributes to others and helps make things better.
            </p>

            <p className="text-m">
              Learning to become a better engineer and thinker excites me, developing the foundation to build things and understand the world.
              I specialize in building full-stack apps.
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

   

          <div className="mb-12">
            <h2 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
            {projectItems.map((item, index) => (
              <div key={index} className="mb-4 flex items-start gap-4">
                <Image
                  src={item.image || "https://via.placeholder.com/60"}
                  alt={item.name}
                  width={28}
                  height={28}
                  className="object-cover rounded-md"
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



          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Writings</h2>
              <a href="#" className="text-blue-500 text-xs font-medium hover:underline">View all</a>
            </div>
            {writingItems.map((item, index) => (
              <div key={index} className="mb-4">
                {item.onClick ? (
                  <div onClick={item.onClick} className="block hover:underline cursor-pointer">
                    <h3 className="text-[15px] font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ) : (
                  <a href={item.link} className="block hover:underline">
                    <h3 className="text-[15px] font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Inner Code</h2>
            {thoughtItems.map((item, index) => (
              <div key={index} className="mb-4">

                <p className="text-base italic font-thin" style={{ fontFamily: 'Georgia, serif' }}>{item.content}</p>



              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 mb-8">
          
            <a href="mailto:amitxmasram@gmail.com">
              <Button
                className={`${isDarkMode ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
              >
                Get in Touch
              </Button>
            </a>
            <p className="text-[14px] text-center">
              My DMs are always open — <a href="https://x.com/messages/compose?recipient_id=1332622199786598403" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">reach out on X</a> anytime.
            </p>



          </div>


        </main>

        {/* <footer className="mt-13 flex flex-wrap justify-center gap-4 text-sm">
          <p className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
            © {new Date().getFullYear()} Amit Masram. All rights reserved.
          </p>
        </footer> */}

      </div>
    </div>
  )
}