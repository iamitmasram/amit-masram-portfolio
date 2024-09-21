import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col items-center justify-center p-4">
      <main className="max-w-2xl w-full">
        <h1 className="text-6xl font-bold mb-6 text-center text-black">Amit Masram</h1>
        <p className="text-m mb-8 text-center">Email | Twitter | Linkedin | Github</p>
        <div className="mb-12 space-y-4 text-left">
          <p className="text-lg">
          An Engineer, I’m currently building Tourease app, an AI-powered personalized tour guide for your travels,
          </p>
          <p className="text-lg">
            I enjoy learning to be a better engineer and thinker. Developing the foundation to build things and understand the world.
            Building Full-Stack Apps with AI and diving deep into Prompt Engineering to be able to better communicate with AI effectively.
          </p>
          <p className="text-lg">
          I am also set on moving to SF after graduation to further my journey in tech.
          </p>
          <p className="text-lg">
          Beyond tech, I like to travel and wildlife, which inspires and enriches my professional and personal life.
          </p>

        </div>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="text-gray-700 border-gray-700 hover:bg-gray-100">
            View Projects
          </Button>
          <Button className="bg-gray-900 text-white hover:bg-gray-700">Contact Me</Button>
        </div>
      </main>
      {/* <footer className="mt-16 flex flex-wrap justify-center gap-4">
        {['React', 'TypeScript', 'AI', 'Full-Stack', 'Prompt Engineering'].map((tech) => (
          <span key={tech} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </footer> */}
      
    </div>
  )
}