"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // 비디오 로딩 감지
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* 비디오 배경 */}
      <div className="absolute inset-0 bg-black z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-50' : 'opacity-0'}`}
          style={{ objectPosition: "center" }}
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src="/matsuVDO.mp4" type="video/mp4" />
          {/* 비디오가 지원되지 않을 경우 폴백 */}
          Your browser does not support the video tag.
        </video>
        {/* 비디오 위에 그라데이션 오버레이 추가 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 z-10"></div>
      </div>
      
      <div className="relative z-20 flex items-center justify-center h-full text-white px-6">
        <div className={`text-center max-w-4xl transform transition-all duration-1000 ${videoLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-4 py-1 bg-yellow-400 text-black rounded-full mb-4 font-semibold animate-pulse">
            검증된 수익 모델
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            월 매출 <span className="text-yellow-400">8,000만원</span>까지<br/>
            증명된 스시마츠의 성공 창업
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto text-shadow">
            가맹비 없이 시작하는 프리미엄 일식 비즈니스<br/>
            스시마츠와 함께 안정적인 수익을 창출하세요
          </p>
          
          <div className="flex justify-center mb-10">
            <div className="flex items-center bg-gray-900/70 py-3 px-6 rounded-xl border border-yellow-400/30">
              <TrendingUp className="text-yellow-400 w-6 h-6 mr-2" />
              <span className="text-white text-lg">
                <span className="text-yellow-400 font-bold">10년 이상</span>의 노하우로 안정적인 성공 경영
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('profit-analysis')?.scrollIntoView({ behavior: 'smooth' })}
            >
              창업 성공 사례 보기 <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white hover:bg-white/10 text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })}
            >
              창업 문의하기
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </section>
  )
} 