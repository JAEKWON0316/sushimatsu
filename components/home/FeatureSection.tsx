"use client"

import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    id: 1,
    title: "신선한 메뉴 개발",
    description: "3주기 메뉴 개발로 매출 증가까지 컨설팅",
    image: "/prc001.png",
  },
  {
    id: 2,
    title: "특별 최저 식자재비",
    description: "10년 기준 매출 3천만원에 적정 식자재비 30%",
    image: "/prc002.png",
  },
  {
    id: 3,
    title: "매출 자신감",
    description: "매장별 특성에 맞춘 메뉴 구성으로 80% 이상 재방문율",
    image: "/prc003.png",
  },
  {
    id: 4,
    title: "간편한 창업",
    description: "비조리사도 쉽게 창업 가능한 심플화된 시스템",
    image: "/prc004.png",
  },
  {
    id: 5,
    title: "성공 프렌차이즈",
    description: "2년 연속 폐업률 0%, 수익률 10% 이하 점성 제로",
    image: "/prc005.png",
  },
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-black text-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠 가맹점의 특별한 경쟁력</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            철저한 최고 수준의 경쟁력을 갖춘 스시마츠와 함께 
            안정적인 창업 성공을 경험하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg transition-shadow text-white">
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-lg mb-1 text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 