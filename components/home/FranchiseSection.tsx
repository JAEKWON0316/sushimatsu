"use client"

import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FranchiseSection() {
  return (
    <section id="franchise" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">가맹 문의</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-2xl mb-6">스시마츠와 함께 성공하세요</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                스시마츠는 체계적인 매장 운영 시스템과 차별화된 메뉴로 가맹점주님의 성공을 지원합니다. 철저한 품질
                관리와 지속적인 신메뉴 개발로 고객 만족도를 높이고 있습니다.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    1
                  </span>
                  <span>체계적인 매장 운영 시스템</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    2
                  </span>
                  <span>차별화된 메뉴 구성</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    3
                  </span>
                  <span>지속적인 마케팅 지원</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    4
                  </span>
                  <span>전문적인 교육 프로그램</span>
                </li>
              </ul>
              <div className="flex space-x-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Phone className="mr-2 h-4 w-4" /> 전화 상담
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-gray-700">
                  <Calendar className="mr-2 h-4 w-4" /> 방문 상담 예약
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-center">가맹 문의 폼</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">이름</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">연락처</label>
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
                  <label className="block text-sm font-medium mb-1">희망 지역</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="희망 지역을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">문의 내용</label>
                  <textarea
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32"
                    placeholder="문의 내용을 입력하세요"
                  ></textarea>
                </div>
                <div>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3">문의하기</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 