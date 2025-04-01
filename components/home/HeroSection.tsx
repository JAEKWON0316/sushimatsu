"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-black text-white relative min-h-screen flex flex-col justify-center items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">신선함이 살아있는 프리미엄 스시 브랜드</h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-16">딱 3분만 둘러보세요!</h2>
        <div className="w-full max-w-6xl mx-auto relative aspect-[3/2]">
          <Image
            src="https://modo-phinf.pstatic.net/20230105_31/167289552890193S7F_JPEG/mosaA8md1y.jpeg"
            alt="스시 이미지"
            fill
            className="rounded-lg shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
} 