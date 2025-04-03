"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">브랜드 소개</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/logo004.png"
              alt="스시마츠 로고"
              width={400}
              height={400}
              className="rounded-lg h-auto w-auto max-w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">최고의 재료로 만든 프리미엄 스시</h3>
            <p className="text-gray-300 mb-6">
              스시마츠는 신선한 해산물과 엄선된 식재료만을 사용하여 최고의 맛을 선사합니다. 일본 전통 방식과 현대적인
              감각을 조화롭게 융합하여 독특한 스시 경험을 제공합니다.
            </p>
            <p className="text-gray-300 mb-6">
              매일 아침 공수되는 신선한 재료들로 정성껏 준비한 스시는 고객님들께 잊지 못할 맛의 경험을 선사합니다.
              스시마츠와 함께라면 일본 현지의 맛을 한국에서도 느끼실 수 있습니다.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">브랜드 스토리</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-gray-800"
              >
                매장 찾기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 