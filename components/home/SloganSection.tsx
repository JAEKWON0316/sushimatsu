"use client"

import { Button } from "@/components/ui/button"

export default function SloganSection() {


  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-yellow-400">스시마츠 待 (기다리다)</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
            어렵고 힘든 브랜드입니다.<br/>
            대신 쉽게 흔들리지 않으며 계속 앞으로 나아갑니다.
          </p>
          <p className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto text-yellow-400 leading-relaxed">
            그럼에도 도전해보신다면,<br/> 
            <span className="text-3xl md:text-4xl relative inline-block mt-2 py-2 px-4 after:content-[''] after:absolute after:w-full after:h-1 after:bg-yellow-400 after:bottom-0 after:left-0">
              3분만 시간을 내어주십시오.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
} 