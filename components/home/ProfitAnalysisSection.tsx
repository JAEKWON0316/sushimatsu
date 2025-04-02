"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProfitAnalysisSection() {
  return (
    <section id="profit-analysis" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠 가맹점 수익분석</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            지긋지긋한 수익인증, 믿을 수 없으신가요?
            <br />이제 실제 가맹점 사장님이 <span className="text-yellow-400 font-bold">직접 이야기한 내용</span>만 믿으세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">가맹점 실제 수익 공개</h3>
            <p className="text-lg mb-6">
              스시마츠는 <span className="text-yellow-400 font-bold">10년 이상</span>의 직영점 운영 경험을 바탕으로
              검증된 사업 모델을 제공합니다.
            </p>
            <div className="bg-gray-900 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3">월 평균 매출</h4>
              <div className="flex items-end mb-2">
                <span className="text-4xl font-bold text-yellow-400">3,000</span>
                <span className="text-xl ml-1">만원</span>
              </div>
              <p className="text-gray-400">일부 매장은 월 5,000만원 이상 달성</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">월 평균 순이익</h4>
              <div className="flex items-end mb-2">
                <span className="text-4xl font-bold text-yellow-400">900</span>
                <span className="text-xl ml-1">만원</span>
              </div>
              <p className="text-gray-400">식자재비 30%, 인건비 25% 기준</p>
            </div>
          </div>
          <Card className="bg-gray-900 border-gray-800 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black">
              <CardTitle className="text-2xl">매장 수익구조 분석</CardTitle>
              <CardDescription className="text-gray-800">실제 가맹점 데이터 기반</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-yellow-400">식자재비</span>
                    <span className="font-semibold text-yellow-400">30%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-yellow-400">인건비</span>
                    <span className="font-semibold text-yellow-400">25%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-yellow-400">임대료/관리비</span>
                    <span className="font-semibold text-yellow-400">15%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-yellow-400">기타 경비</span>
                    <span className="font-semibold text-yellow-400">10%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-yellow-400">순이익</span>
                    <span className="font-semibold text-yellow-400">30%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">가맹점 사장님 인터뷰</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-5xl text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-1">서울 강남구 A점</h4>
                <p className="text-gray-400">개업 2년차 / 월 매출 3,500만원</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-5xl text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-1">부산 해운대구 B점</h4>
                <p className="text-gray-400">개업 1년차 / 월 매출 4,200만원</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              가맹점 수익 자세히 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 