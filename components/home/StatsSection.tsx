"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const stats = [
  {
    id: 1,
    value: "10+",
    title: "운영 경력",
    description: "10년 이상의 운영 노하우",
  },
  {
    id: 2,
    value: "30+",
    title: "가맹점",
    description: "전국 30개 이상의 매장",
  },
  {
    id: 3,
    value: "0%",
    title: "폐업률",
    description: "2년 연속 폐업률 0%",
  },
  {
    id: 4,
    value: "80%",
    title: "재방문율",
    description: "평균 80% 이상의 재방문율",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-black text-white" id="stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠의 숫자로 보는 성공</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            철저한 운영 시스템과 지속적인 품질 관리로 얻은 스시마츠의 성과
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

        <Card className="mt-16 bg-gray-900 border-gray-800 text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">매년 성장하는 스시마츠</h3>
                <p className="text-gray-300 mb-4">
                  스시마츠는 코로나 시기에도 꾸준히 성장하여 매년 매출과 가맹점 수가 증가하고 있습니다. 
                  높은 고객 만족도와 합리적인 운영 시스템으로 안정적인 수익을 보장합니다.
                </p>
                <p className="text-gray-300">
                  가맹점당 평균 월 매출 3,000만원 이상을 기록하며, 일부 매장은 5,000만원 이상의 
                  월 매출을 달성하고 있습니다.
                </p>
              </div>
              <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full px-8">
                    <div className="w-full bg-gray-700 h-6 mb-6 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <div className="w-full bg-gray-700 h-6 mb-6 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: "92%" }}></div>
                    </div>
                    <div className="w-full bg-gray-700 h-6 mb-6 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: "78%" }}></div>
                    </div>
                    <div className="w-full bg-gray-700 h-6 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 