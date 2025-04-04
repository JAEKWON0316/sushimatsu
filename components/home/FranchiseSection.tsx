"use client"

import { Phone, Calendar, ArrowUpRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FranchiseSection() {
  // 가맹 문의 정보
  const contactInfo = {
    phone: "0507-1380-5336",
    email: "support@sushimatsu.com"
  }

  // 창업 성공 요소
  const successFactors = [
    "월 평균 매출 4,000만원 ~ 8,000만원 달성 매장 다수",
    "가맹비, 로열티 ZERO, 순수 공사비만 부담",
    "대표가 직접 관리하는 밀착 지원 시스템",
    "미들급 일식 전문점으로 차별화된 포지셔닝"
  ]

  return (
    <section id="franchise" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">창업 문의</h2>
        <p className="text-center text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
          <span className="text-yellow-400 font-bold">스시마츠</span>의 노하우로 만드는 안정적인 수익,<br />
          창업 초보자도 성공할 수 있는 체계적인 시스템을 제공합니다.
        </p>
        <p className="text-center text-lg text-yellow-400 font-bold mb-16 max-w-3xl mx-auto">
          지금 문의하시면 스시마츠만의 특별한 창업 혜택을 받으실 수 있습니다.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-2xl mb-6">스시마츠 창업, 왜 성공할까요?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                <span className="text-yellow-400 font-bold">스시마츠는 15평 남짓한 작은 가게에서 시작했습니다.</span><br/>
                우리는 모든 어려움을 직접 겪어보았고, 그 과정에서 얻은 성공 노하우를 가맹점주와 함께 나눕니다.
                가맹점주의 성공이 곧 스시마츠의 성공이라 믿습니다.
              </p>
              
              <div className="bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">성공을 위한 4가지 요소</h3>
                <ul className="space-y-3">
                  {successFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black flex-1">
                  <Phone className="mr-2 h-4 w-4" /> 즉시 상담 신청
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-gray-700 flex-1">
                  <Calendar className="mr-2 h-4 w-4" /> 방문 상담 예약
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-center">창업 문의 폼</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">이름 <span className="text-yellow-400">*</span></label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">연락처 <span className="text-yellow-400">*</span></label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">이메일</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">희망 지역 <span className="text-yellow-400">*</span></label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="희망 지역을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">창업 예산 (선택)</label>
                  <select
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">창업 예산을 선택하세요</option>
                    <option value="1억 미만">1억 미만</option>
                    <option value="1억-1.5억">1억-1.5억</option>
                    <option value="1.5억-2억">1.5억-2억</option>
                    <option value="2억 이상">2억 이상</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">문의 내용</label>
                  <textarea
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32"
                    placeholder="문의 내용을 입력하세요"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3">
                    창업 문의하기 <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center text-gray-400 text-sm mt-2 bg-gray-800 p-3 rounded-md">
                  <span className="block mb-1">상담 접수 즉시 전문 창업 담당자가 연락드립니다</span>
                  <span className="text-yellow-400 font-bold">지금 문의하고 특별 창업 혜택을 받으세요!</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 