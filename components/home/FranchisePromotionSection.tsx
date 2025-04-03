"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function FranchisePromotionSection() {
  // 이미지 데이터
  const franchiseImages = [
    {
      src: "/inquire005.png",
      alt: "스시마츠 가맹점 모집 포스터 1"
    },
    {
      src: "/inquire006.png",
      alt: "스시마츠 가맹점 모집 포스터 2"
    }
  ]
  
  // 가맹 혜택 데이터
  const franchiseBenefits = [
    {
      title: "인테리어 맞춤 제공",
      description: "가맹점별 최적화된 고급스러운 인테리어 컨설팅과 시공 지원"
    },
    {
      title: "가맹비 지원 + 마케팅 전문 지원",
      description: "소자본 창업으로 월 1,000만원 이상 매출 가능!"
    },
    {
      title: "체계적인 운영 & 관리 시스템",
      description: "데이터 기반 매장 운영 및 효율적인 재고 관리 시스템 제공"
    }
  ]

  return (
    <section id="franchise-promotion" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400">스시마츠 가맹점 모집</h2>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            저렴한 가격, 높은 퀄리티, 100여가지의 프리미엄 회전 초밥 프랜차이즈
          </p>
        </div>
        
        {/* 포스터 이미지 - 모두 표시 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {franchiseImages.map((image, index) => (
            <div
              key={index}
              className="relative h-[500px] md:h-[700px] w-full rounded-xl overflow-hidden border border-gray-800 bg-black hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          ))}
        </div>
        
        {/* 가맹 혜택 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {franchiseBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="bg-yellow-400 text-black text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA 섹션 */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl p-10 md:p-16 text-black">
          <div className="md:flex items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">성공적인 창업, 지금 바로 문의하세요!</h3>
              <p className="text-black/80 text-lg mb-6">월 1,000만원 이상 매출 가능한 검증된 비즈니스 모델</p>
              <div className="font-bold text-2xl">0507-1380-5336</div>
            </div>
            <div className="flex flex-col gap-4">
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })}
              >
                가맹 문의하기 <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-black text-white hover:bg-black/10 hover:text-black px-8 py-6 text-lg"
              >
                상담 예약하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 