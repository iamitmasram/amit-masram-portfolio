'use client'
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import EvolutionImage from '../../../assets/blog/evolution.png'

export default function EvolutionOfInformationPage() {
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <div className="flex justify-between items-center p-6 max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
        >
          ← BACK
        </button>
        <div className="text-sm text-gray-500">
          Dec 28, 2025 • Reflective History
        </div>

      </div>

      {/* Main Content - Book Layout */}
      <div className={`max-w-3xl mx-auto px-8 py-12 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} min-h-[80vh] transition-colors duration-300`}>



        {/* Title */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-serif mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            How Humans Have Stored Information: From Stone Marks to the Internet Age
          </h1>
          <div className={`w-28 h-0.5 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} mx-auto`}></div>
        </div>

        {/* Subtitle/Introduction */}
        <div className="mb-12">
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-serif text-center italic`}>
            “Humanity’s journey of storing information — from stone to screens.”
          </p>
        </div>




        {/* Image */}
        <div className="mb-12 flex justify-center">
          <Image
            src={EvolutionImage}
            alt="Evolution of information storage"
            width={800}
            height={300}
            className="rounded-lg"
          />
        </div>


        {/* Main Content */}
        <div className="space-y-8">
          {/* Then Section */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-bold mr-2`}>⁕</span>
              <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-semibold m-0`}>Then</p>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              From the very beginning, humans have always looked for ways to store and share information. Long before books, computers, or the internet existed, early humans used what they had around them. They carved symbols, marks, and drawings on stones and cave walls. These rough sketches were not just art. They were a way to record events, count things, tell stories, and pass knowledge to others. This was the starting point of human communication and information storage.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              As societies grew, humans developed proper writing systems. Civilizations like Mesopotamia and Egypt used symbols and scripts written on stone tablets, clay, or papyrus. Over time, paper was invented, and writing became more common. Books, letters, and manuscripts allowed information to be preserved for longer periods and shared across places. For many centuries, books and printed papers were the most reliable way to store knowledge. Libraries became important because they held valuable information that was not easily available to everyone.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              Everything changed with the invention of the printing press. Information could now be copied faster and reach more people. This helped spread education, ideas, and discoveries. Still, information was limited. Learning something new took time, effort, and access to physical materials.
            </p>
          </div>

          {/* Now Section */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-bold mr-2`}>⁕</span>
              <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-semibold m-0`}>Now</p>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              Today, we live in the digital age. Information is no longer stored only in books or papers but online. The internet allows people to share ideas instantly through websites, social media, videos, podcasts, and digital articles. We can search for almost anything and get answers within seconds. Information is no longer scarce — instead, we are surrounded by it all the time.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              However, this also creates new challenges. With so much information available, it can be hard to know what is true, reliable, or important. Anyone can share content, which makes digital literacy and critical thinking more important than ever.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              Looking toward the future, information sharing may evolve even further. We might rely more on artificial intelligence, virtual reality, or brain–computer interfaces to store and transfer knowledge. Instead of reading or typing, people could experience information directly through immersive technology. Knowledge might become more interactive, personalized, and instant.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              From stone carvings to digital clouds, the way humans store information shows how far we have come. While the tools keep changing, the purpose remains the same: to learn, remember, and share ideas with others. Understanding this journey helps us appreciate both the past and the responsibility we carry in shaping the future of information.
            </p>
          </div>

          {/* Question Section */}
          <div className="mt-16 pt-10 border-t border-gray-300">
            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-900'} text-xl font-serif mb-6`}>
              The Next Evolution Is Not Storage. It Is Control.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              Earlier, information was scarce. Today it is infinite. Tomorrow, it will be
              curated, predicted, and possibly controlled by algorithms we don’t fully understand.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              Artificial intelligence will no longer just store information — it will decide
              what we see, what we ignore, and what we never discover. Virtual reality will not
              remain entertainment; it will become memory infrastructure.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base mb-4`}>
              The biggest danger is not losing data. It is outsourcing our thinking.
            </p>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-serif text-base`}>
              The next generation will not ask where data is stored — they will ask who controls it,
              who understands it, and who benefits from it.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}