"use client"

import { useState } from "react"
import Image from "next/image"

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
    <header className="bg-black text-white py-1 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-full w-full px-6 flex justify-between items-center">
        {/* 로고 - 왼쪽 배치 */}
        <div className="flex items-center pl-4">
          <Image
            src="/logo004.png"
            alt="스시마츠 로고"
            width={400}
            height={400}
            className="h-24 w-auto"
            priority
          />
        </div>

        {/* 네비게이션 - 가운데 배치 */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-10">
          <button
            onClick={() => scrollToSection('home')}
            className="text-base font-medium hover:text-yellow-400 transition-colors whitespace-nowrap"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-base font-medium hover:text-yellow-400 transition-colors whitespace-nowrap"
          >
            브랜드소개
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="text-base font-medium hover:text-yellow-400 transition-colors whitespace-nowrap"
          >
            메뉴소개
          </button>
          <button
            onClick={() => scrollToSection('stores')}
            className="text-base font-medium hover:text-yellow-400 transition-colors whitespace-nowrap"
          >
            매장안내
          </button>
          <button
            onClick={() => scrollToSection('franchise')}
            className="text-base font-medium hover:text-yellow-400 transition-colors whitespace-nowrap"
          >
            가맹문의
          </button>
        </nav>

        {/* 연락처 - 오른쪽 배치 */}
        <div className="hidden lg:block pr-4">
          <div className="text-yellow-400 font-bold text-lg whitespace-nowrap">가맹문의 0507-1380-5336</div>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className="lg:hidden">
          <button 
            className="text-white"
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