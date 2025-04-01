"use client"

import { Phone, Calendar } from "lucide-react"

export default function FixedButtons() {
  const scrollToFranchise = () => {
    const franchise = document.getElementById('franchise')
    if (franchise) franchise.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      <button
        onClick={scrollToFranchise}
        className="bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors flex items-center justify-center"
        aria-label="가맹 문의"
      >
        <Calendar className="h-6 w-6" />
      </button>
      <a
        href="tel:0507-1380-5336"
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
        aria-label="전화 문의"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
} 