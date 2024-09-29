'use client'

import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Moon, Sun } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode" 

interface HackathonEntry {
  date: string
  name: string
  location: string
  description: string
  tags: string[]
  sourceUrl?: string
}

const hackathons: HackathonEntry[] = [
  {
    date: "November 12th - 13th, 2018",
    name: "Hack Western 5",
    location: "London, Ontario",
    description: "Developed an AR application which delivered real-time access to patients using augmented reality.",
    tags: ["Winner"],
    sourceUrl: "https://github.com/example/hack-western-5"
  },
  {
    date: "November 16th - 18th, 2018",
    name: "Hack The North",
    location: "Waterloo, Ontario",
    description: "Developed an application which utilizes university campus wide events in real time to aid students.",
    tags: [],
    sourceUrl: "https://github.com/example/hack-the-north"
  },
  {
    date: "March 1st - 3rd, 2018",
    name: "FirstNet Public Safety Hackathon",
    location: "San Francisco, California",
    description: "Developed an application which communicates a victim's medical data from inside an ambulance to doctors at hospital.",
    tags: [],
    sourceUrl: "https://github.com/example/firstnet-hackathon"
  },
]

export default function HackathonsPage() {
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300 p-8`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Hackathons</h1>
          
          {/* <Button
            variant="outline"
            size="icon"
            className={`${isDarkMode ? 'text-gray-200 border-gray-200' : 'text-gray-700 border-gray-700'}`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button> */}
        </div>
        <p className="text-white-600 mb-8">
        I like to participate in global and international hackathons, primarily online, to collaborate with diverse teams and tackle innovative challenges.
      </p>
        
        {/* <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => router.push('/')}
            className={`${isDarkMode ? 'text-gray-200 border-gray-200 hover:bg-gray-800' : 'text-gray-700 border-gray-700 hover:bg-gray-100'}`}
          >
            Back to Home
          </Button>
        </div> */}

        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <Avatar className="w-7 h-7 bg-gray-200">
                  <span className="text-xl">{hackathon.name[0]}</span>
                </Avatar>
              </div>
              <div className="flex-grow">
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{hackathon.date}</p>
                <h2 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{hackathon.name}</h2>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{hackathon.location}</p>
                <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{hackathon.description}</p>
                <div className="mt-2 flex items-center space-x-2">
                  {hackathon.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                  {hackathon.sourceUrl && (
                    <Button variant="outline" size="xs" asChild>
                      <a href={hackathon.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h- w-4" />
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
