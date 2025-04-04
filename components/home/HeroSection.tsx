"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 동영상 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/matsuVDO.mp4" type="video/mp4" />
        </video>
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            월 매출 8,000만원까지 증명된<br className="hidden sm:block" />
            <span className="text-yellow-400">스시마츠</span>의 성공 창업
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            가맹비 없이 시작하는 프리미엄 일식 비즈니스
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black text-base sm:text-lg">
              창업 성공 사례 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base sm:text-lg">
              창업 문의하기
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 md:mt-12"
          >
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm md:text-base">
              10년 이상의 노하우로 안정적인 성공 경영
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 