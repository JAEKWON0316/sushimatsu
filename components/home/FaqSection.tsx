"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const faqs = [
  {
    id: 1,
    question: "초기 투자 비용은 얼마인가요?",
    answer: "스시마츠의 초기 투자 비용은 인테리어, 장비, 가맹비 등을 포함하여 약 8,000만원~1억원 정도입니다. 위치와 매장 크기에 따라 달라질 수 있으며, 자세한 내용은 가맹 상담을 통해 안내해 드립니다."
  },
  {
    id: 2,
    question: "가맹 후 지원은 어떻게 이루어지나요?",
    answer: "스시마츠는 가맹점의 성공적인 운영을 위해 초기 교육부터 오픈 지원, 정기적인 운영 컨설팅, 마케팅 지원 등 체계적인 관리 시스템을 제공합니다. 또한 식자재 공급과 품질 관리에도 지속적인 지원을 아끼지 않습니다."
  },
  {
    id: 3,
    question: "이전 요식업 경험이 없어도 가능한가요?",
    answer: "네, 가능합니다. 스시마츠는 체계적인 교육 프로그램을 통해, 요식업 경험이 없는 분들도 쉽게 운영할 수 있도록 지원합니다. 기본 메뉴 제조부터 매장 관리, 고객 응대까지 모든 부분에 대한 상세한 교육을 제공합니다."
  },
  {
    id: 4,
    question: "평균 회수 기간은 어느 정도인가요?",
    answer: "매장 위치와 운영 방식에 따라 차이가 있지만, 일반적으로 약 12~18개월 내외의 회수 기간을 보이고 있습니다. 다만 이는 보장된 수치가 아니며, 개별 매장의 상황에 따라 달라질 수 있습니다."
  }
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">자주 묻는 질문</h2>
        
        <div className="space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.id} className="bg-gray-900 border-gray-700 text-white">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl font-medium">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-3">
                <CardDescription className="text-gray-300">{faq.answer}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 