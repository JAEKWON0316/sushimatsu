"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Star, TrendingUp, Shield, ThumbsUp } from "lucide-react"

export default function FranchisePromotionSection() {
  // 이미지 데이터
  const franchiseImages = [
    {
      src: "/inquire009.png",
      alt: "스시마츠 가맹점 모집 포스터 1"
    },
    {
      src: "/inquire007.png",
      alt: "스시마츠 가맹점 모집 포스터 2"
    }
  ]

  // 창업 장점 데이터
  const businessAdvantages = [
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "검증된 매출",
      description: "월 4,000만원 ~ 8,000만원의 실제 수익 사례"
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: "안정적인 사업",
      description: "차별화된 메뉴와 운영 시스템으로 지속 가능한 성장"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: "0원 가맹비",
      description: "순수 공사비 외 추가 비용 없음"
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-yellow-400" />,
      title: "전폭적인 지원",
      description: "입지 선정부터 오픈까지 모든 과정 지원"
    }
  ]

  return (
    <section id="franchise-promotion" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400">스시마츠와 함께하는 성공 창업</h2>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
            <span className="text-yellow-400 font-bold">10년 이상의 노하우</span>로 검증된<br/>
            안정적이고 수익성 높은 비즈니스 모델을 제공합니다
          </p>
        </div>
        
        {/* 창업 장점 */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {businessAdvantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-4">
                {advantage.icon}
                <h3 className="text-lg font-bold text-white ml-2">{advantage.title}</h3>
              </div>
              <p className="text-gray-300">{advantage.description}</p>
            </div>
          ))}
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
        
        {/* 가맹점 개념 설명 */}
        <div className="text-center mb-16 bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">스시마츠에 가맹은 부모와 자식입니다.</h3>
          <p className="text-xl text-white mb-2">
            하나하나 천천히 모든 걸 내어 드리겠습니다.
          </p>
          <p className="text-lg text-gray-400">
            오픈 후에도 지속적인 관리 및 운영 노하우를 전수하여 안정적인 매장 운영을 돕습니다.
          </p>
        </div>
        
        {/* CTA 섹션 */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl p-10 md:p-16 text-black">
          <div className="md:flex items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">당신의 성공 스토리가 시작됩니다</h3>
              <p className="text-black/80 text-lg mb-4">
                초기 창업자도 쉽게 운영할 수 있는 체계적인 시스템<br/>
                성공 창업을 위한 최적의 파트너, 스시마츠가 함께합니다
              </p>
              <div className="flex items-center mt-6">
                <div className="text-3xl font-bold mr-4">0507-1380-5336</div>
                <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  지금 문의하세요
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('profit-analysis')?.scrollIntoView({ behavior: 'smooth' })}
              >
                수익 사례 보기 <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })}
              >
                창업 상담 신청 <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 