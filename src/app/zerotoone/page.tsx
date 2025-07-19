'use client'
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import { Moon, Sun } from 'lucide-react'

export default function ZeroToOnePage() {
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
          {new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })} • Personal
        </div>
        {/* <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}
      </div>

      {/* Main Content - Book Layout */}
      <div className={`max-w-3xl mx-auto px-8 py-12 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} min-h-[80vh] transition-colors duration-300`}>



        {/* Title */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-serif mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            -1 to 0
          </h1>
          <div className={`w-24 h-0.5 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} mx-auto`}></div>
        </div>

        {/* Subtitle/Introduction */}
        <div className="mb-12">
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-serif text-center italic`}>
          This is the journey of getting the idea out of head and drawing it.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">



          <div className="mb-8">

          <div className="space-y-4">
  <div className="flex items-start gap-3">
    <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-bold`}>•</span>
    <div>
      <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-semibold`}>Tourease</p>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
        My first attempt at building a real-world product. Designed for travelers and explorers, <strong>Tourease</strong> was an AI-powered app that generated trip plans based on the user&apos;s chosen destination—without the hassle of traditional itinerary planning.
        It was a college project developed by a team of four, which we pitched to faculty members. While it didn&apos;t gain much traction, the experience taught us a lot about teamwork, product thinking, and building under constraints.
        Eventually, we decided to discontinue it, but it marked the start of my journey from zero.
      </p>
    </div>
  </div>
</div>

          </div>

          <div className="text-center pt-8">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} italic`}>
              &quot;The master has failed more times than the beginner has even tried.&quot;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>Chapter 1</div>
            <div>Page 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}