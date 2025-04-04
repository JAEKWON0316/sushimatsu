"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Star, TrendingUp, Shield, ThumbsUp, Phone, ArrowRight } from "lucide-react"

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
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">스시마츠와 함께하는 성공 창업</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            검증된 수익 모델과 체계적인 지원 시스템으로<br className="hidden sm:block" />
            안정적인 창업을 시작하세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">검증된 수익 모델</h3>
              <p className="text-gray-300">
                월 매출 4,000만원 ~ 8,000만원 달성 매장 다수 보유<br />
                실제 매출 데이터로 증명된 비즈니스 모델
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">안정적인 창업</h3>
              <p className="text-gray-300">
                가맹비, 로열티 ZERO<br />
                순수 공사비만 부담하는 합리적인 창업 비용
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">체계적인 지원</h3>
              <p className="text-gray-300">
                대표가 직접 관리하는 밀착 지원 시스템<br />
                창업부터 운영까지 원스톱 솔루션 제공
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-900 p-8 rounded-lg max-w-md mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">지금 바로 문의하세요</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <a 
                    href="tel:0507-1380-5336" 
                    className="text-xl md:text-2xl font-bold hover:text-yellow-400 transition-colors"
                  >
                    0507-1380-5336
                  </a>
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  평일 09:00 - 18:00
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-base md:text-lg"
                >
                  창업 문의하기 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-yellow-400 text-sm md:text-base font-medium">
                  지금 문의하고 특별 창업 혜택을 받으세요!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 