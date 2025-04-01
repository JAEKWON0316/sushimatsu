"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 스크롤 함수
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-black text-white py-2 px-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EB%8A%94%20%EB%94%94%EC%9E%90%EC%9D%B8%20-%202025-03-13T184043.543-SyYlPpWdu8hQFJzWH3e6rdxGT8pdSw.png"
            alt="스시마츠 로고"
            width={240}
            height={160}
            className="h-28 w-auto"
            priority
          />
        </div>

        <nav className="hidden lg:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg hover:text-yellow-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-lg hover:text-yellow-400 transition-colors"
          >
            브랜드소개
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="text-lg hover:text-yellow-400 transition-colors"
          >
            메뉴소개
          </button>
          <button
            onClick={() => scrollToSection('stores')}
            className="text-lg hover:text-yellow-400 transition-colors"
          >
            매장안내
          </button>
          <button
            onClick={() => scrollToSection('franchise')}
            className="text-lg hover:text-yellow-400 transition-colors"
          >
            가맹문의
          </button>
        </nav>

        <div className="hidden lg:block text-yellow-400 font-bold text-xl">가맹문의 0507-1380-5336</div>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 z-50">
          <div className="flex flex-col p-4">
            <button
              onClick={() => scrollToSection('home')}
              className="py-3 text-lg border-b border-gray-800 hover:text-yellow-400"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="py-3 text-lg border-b border-gray-800 hover:text-yellow-400"
            >
              브랜드소개
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="py-3 text-lg border-b border-gray-800 hover:text-yellow-400"
            >
              메뉴소개
            </button>
            <button
              onClick={() => scrollToSection('stores')}
              className="py-3 text-lg border-b border-gray-800 hover:text-yellow-400"
            >
              매장안내
            </button>
            <button
              onClick={() => scrollToSection('franchise')}
              className="py-3 text-lg hover:text-yellow-400"
            >
              가맹문의
            </button>
            <div className="mt-4 text-yellow-400 font-bold">가맹문의 0507-1380-5336</div>
          </div>
        </div>
      )}
    </header>
  )
} 