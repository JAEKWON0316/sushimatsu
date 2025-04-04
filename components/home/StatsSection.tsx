"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const stats = [
  {
    id: 1,
    value: "10+",
    title: "운영 경력",
    description: "10년 이상의 경험과 노하우",
  },
  {
    id: 2,
    value: "0",
    title: "가맹비",
    description: "순수 공사비 외 금액 없음",
  },
  {
    id: 3,
    value: "30%",
    title: "순이익률",
    description: "안정적인 수익 구조",
  },
  {
    id: 4,
    value: "8,000+",
    title: "최고매출",
    description: "월 최고 매출 달성 가맹점",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-black text-white" id="stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠의 숫자로 보는 성공</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            어렵고 힘들지만 쉽게 흔들리지 않는 스시마츠의 성과
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.id} className="bg-gray-900 border-gray-800 text-white">
              <CardHeader className="pb-2 text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <CardTitle className="text-xl">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-400">{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-16 mb-8 bg-gray-900 border-gray-800 text-white">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">스시마츠의 성공 비결</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                스시마츠는 단순한 초밥집이 아닌 <span className="text-yellow-400 font-bold">미들급 일식집</span>으로서
                차별화된 시스템과 가맹점과의 <span className="text-yellow-400 font-bold">부모와 자식</span> 같은 
                관계를 통해 지속 가능한 성장을 이루고 있습니다.
              </p>
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
                onClick={() => document.getElementById('profit-analysis')?.scrollIntoView({ behavior: 'smooth' })}
              >
                수익 분석 자세히 보기 <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 