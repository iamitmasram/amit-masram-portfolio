'use client'

import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Moon, Sun } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode" 

interface OpenSourceEntry {
  date: string
  name: string
  location: string
  description: string
  tags: string[]
  sourceUrl?: string
  imageUrl?: string
}

const hackathons: OpenSourceEntry[] = [
  {
    date: "October 4th - 10th, 2024",
    name: "Open Source Hackfest",
    location: "Remote",
    description: "Developed an AI application that delivered real-time access to patients using augmented reality.",
    tags: [],
    sourceUrl: "https://github.com/example/hack-western-5",
    imageUrl: "https://s3.amazonaws.com/my.mlh.io/applications/logos/000/000/638/thumb/MyMLH_Icon.png?1638895540"
  },
  {
    date: "October 11th - 13th, 2024",
    name: "Open Source Hackfest",
    location: "Online",
    description: "Built a Web3 mobile app utilizing decentralized smart contracts for secure real-time data communication.",
    tags: [],
    sourceUrl: "https://github.com/example/hack-the-north",
    imageUrl:"https://s3.amazonaws.com/my.mlh.io/applications/logos/000/000/638/thumb/MyMLH_Icon.png?1638895540"
  },
 
]

export default function OpenSourcePage() {
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300 p-8`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Open Source Contributions</h1>
        </div>
        <p className="text-white-600 mb-8">
          Here are my contributions to open source, where I collaborate with diverse teams to solve challenges and build innovative projects.
        </p>
        
        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <Avatar className="w-9 h-9 flex items-center justify-center overflow-hidden">
                  {hackathon.imageUrl ? (
                    <img 
                      src={hackathon.imageUrl} 
                      alt={hackathon.name} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <span className="text-xl">{hackathon.name[0]}</span>
                  )}
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
