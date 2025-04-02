"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const strengths = [
  {
    id: 1,
    number: "01",
    title: "10년 이상의 노하우",
    description: "스시마츠는 10년 이상의 직영점 운영 노하우를 바탕으로, 검증된 사업 모델과 레시피를 제공합니다."
  },
  {
    id: 2,
    number: "02",
    title: "압도적인 수익성",
    description: "식자재비 30%, 인건비 25% 기준 월 900만원 이상의 순이익 달성이 가능한 효율적인 운영 구조입니다."
  },
  {
    id: 3,
    number: "03",
    title: "차별화된 메뉴",
    description: "신선한 연어와 프리미엄 해산물을 활용한 스시마츠만의 시그니처 메뉴는 재방문율 80%의 비결입니다."
  },
  {
    id: 4,
    number: "04",
    title: "최적화된 운영 시스템",
    description: "비조리사도 쉽게 창업할 수 있는 심플한 조리 시스템과 매뉴얼로 안정적인 품질 유지가 가능합니다."
  },
  {
    id: 5,
    number: "05",
    title: "전국적인 인지도",
    description: "30개 이상의 매장 운영과 체계적인 본사 마케팅을 통해 형성된 인지도는 초기 매출 안정화에 기여합니다."
  }
]

export default function StrengthSection() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="strengths">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠를 선택해야 하는 5가지 이유</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            치열한 경쟁 속에서 10년간 검증한 스시마츠의 핵심 경쟁력을 소개합니다
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {strengths.slice(0, 3).map((strength) => (
            <Card key={strength.id} className="bg-gradient-to-r from-black to-gray-900 border-gray-800 hover:border-yellow-500 transition-colors overflow-hidden shadow-lg text-white">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-400 text-black text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {strength.number.split("0")[1]}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{strength.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-8">
          {strengths.slice(3, 5).map((strength) => (
            <Card key={strength.id} className="bg-gradient-to-r from-black to-gray-900 border-gray-800 hover:border-yellow-500 transition-colors overflow-hidden shadow-lg text-white">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-400 text-black text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {strength.number.split("0")[1]}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{strength.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-black p-8 rounded-lg border border-gray-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">스시마츠는 가맹점 성공이 최우선입니다</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              2년 연속 폐업률 0%, 수익률 10% 이하 점포 제로의 기록은 
              스시마츠가 가맹점 성공을 위해 얼마나 노력하는지 보여줍니다.
            </p>
            
            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg">
              가맹 문의하기 &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 