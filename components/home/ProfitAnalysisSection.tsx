"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, Clock, BadgeDollarSign, Hand, Users } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProfitAnalysisSection() {
  // 마크다운에 맞게 수익 데이터 업데이트
  const profitExamples = [
    {
      title: "예시 1",
      monthlyRevenue: "8,000",
      monthlyProfit: "2,400"
    },
    {
      title: "예시 2",
      monthlyRevenue: "4,000",
      monthlyProfit: "1,000"
    }
  ]
  
  // 가맹 혜택 데이터 - 마크다운 문서 내용으로 업데이트
  const franchiseBenefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "10년 이상의 노하우",
      description: "15평 남짓한 가게에서 시작해 지금의 스시마츠가 되었습니다. 제가 넘어진 곳에서 넘어지지 않도록, 힘들게 돌아갔던 길을 돌아가지 않게 안내하겠습니다."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "차별화된 시스템",
      description: "단순히 초밥집이 아닌 미들급 일식집으로 손님들에게 다양한 음식을 제공함으로 재방문율이 높고, 차별화된 점심 메뉴로 안정적인 수익을 제공합니다."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: "가맹비, 본사 인센티브가 없습니다",
      description: "오픈하고자 하는 지역 시장조사, 인테리어, 오픈까지 모든 것을 제 손으로 해드리겠습니다. 순수 공사비 외 금액은 받지 않습니다."
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: "부모와 자식",
      description: "오픈이 끝이 아닌, 지속적인 대표와의 커뮤니케이션을 통해 신속한 매장 관리가 가능합니다."
    }
  ]

  return (
    <section id="profit-analysis" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠 가맹점 수익분석</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            지긋지긋한 수익인증, 믿을 수 없으신가요?
            <br />이제 실제 가맹점 사장님의 <span className="text-yellow-400 font-bold">실제 매출과 수익</span>을 확인하세요
          </p>
        </div>

        {/* 스시마츠를 선택해야 하는 이유 */}
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400">스시마츠를 선택해야 하는 이유</h3>
        
        {/* 가맹 혜택 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {franchiseBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-yellow-400">{benefit.title}</h3>
              </div>
              <p className="text-gray-300 text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">가맹점 실제 수익 공개</h3>
            <p className="text-lg mb-6">
              스시마츠는 <span className="text-yellow-400 font-bold">10년 이상</span>의 직영점 운영 경험을 바탕으로
              검증된 사업 모델을 제공합니다.
            </p>
            
            {/* 마크다운 파일에 맞게 수익 예시 업데이트 */}
            {profitExamples.map((example, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-3">{example.title}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 mb-1">월 평균 매출</p>
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-yellow-400">{example.monthlyRevenue}</span>
                      <span className="text-xl ml-1">만원</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">월 평균 순이익</p>
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-yellow-400">{example.monthlyProfit}</span>
                      <span className="text-xl ml-1">만원</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-gray-400 text-sm text-right">※ 가맹점 사장님 인터뷰는 제외함</p>
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
          <h3 className="text-2xl font-bold mb-6 text-center">스시마츠의 경쟁력</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-yellow-400">차별화된 시스템</h4>
              <p className="text-gray-300">
                단순히 초밥집이 아닌 <span className="text-yellow-400 font-bold">미들급 일식집</span>으로 손님들에게
                다양한 음식을 제공함으로 재방문율이 높고, 차별화된 점심 메뉴로 안정적인 수익을 제공합니다.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-yellow-400">가맹비 및 인센티브 없음</h4>
              <p className="text-gray-300">
                오픈하고자 하는 지역 시장조사, 인테리어, 오픈까지 모든 것을 대표가 직접 해드립니다.
                <span className="text-yellow-400 font-bold"> 순수 공사비 외 금액은 받지 않습니다.</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
              onClick={() => document.getElementById('franchise')?.scrollIntoView({ behavior: 'smooth' })}
            >
              가맹 문의 바로가기 <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 