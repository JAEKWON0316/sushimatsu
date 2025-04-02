"use client"

import { Button } from "@/components/ui/button"

export default function SloganSection() {
  const scrollToStrengths = () => {
    const element = document.getElementById('strengths')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-black text-white py-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              무조건 성공할 거라는<br />
              생각은 버리세요
            </h2>
            <div className="h-2 w-32 bg-yellow-400 mx-auto mt-10"></div>
          </div>

          <div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              그러나<br />
              <span className="text-yellow-400">스시마츠</span>는 <span className="text-yellow-400">다릅니다</span>
            </h3>
          </div>
          
          <div className="pt-10">
            <Button 
              onClick={scrollToStrengths}
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg py-6 px-8"
            >
              자신감 넘치는 창업 스토리 보러가기
            </Button>
          </div>
          
          <div className="pt-16">
            <p className="text-3xl md:text-4xl font-semibold text-gray-300">
              치열한 경쟁 속에<br />
              <span className="text-white">스시마츠는 10년 동안 검증했습니다</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 