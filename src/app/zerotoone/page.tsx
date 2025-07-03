'use client'



import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"



export default function ZeroToOnePage() {
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300 p-8`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>-1 to 0</h1>
        </div>
        <p className="text-white-600 mb-8">
          ‣ Achieved 100 WPM in typing.

        </p>
        <p className="text-white-600 mb-8">
          ‣ On the path to becoming a cracked engineer in 2 months.
        </p>
      </div>
    </div>
  )
}


