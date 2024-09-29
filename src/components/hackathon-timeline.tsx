import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

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
    description: "Developed an application which communicates a victims medical data from inside an ambulance to doctors at hospital.",
    tags: [],
    sourceUrl: "https://github.com/example/firstnet-hackathon"
  },
]

export function HackathonTimeline() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">i like going to hackathons</h1>
      <p className="text-gray-600 mb-8">
        during my time in university, I attended 21+ hackathons. It was energizing to see the endless possibilities brought to life by a group of motivated and passionate individuals in 2-3 days.
      </p>
      <div className="space-y-8">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 mr-4">
              <Avatar className="w-12 h-12 bg-gray-200">
                <span className="text-xl">{hackathon.name[0]}</span>
              </Avatar>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-500">{hackathon.date}</p>
              <h2 className="text-lg font-semibold">{hackathon.name}</h2>
              <p className="text-sm text-gray-600">{hackathon.location}</p>
              <p className="mt-2 text-gray-700">{hackathon.description}</p>
              <div className="mt-2 flex items-center space-x-2">
                {hackathon.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
                {hackathon.sourceUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={hackathon.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
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
  )
}