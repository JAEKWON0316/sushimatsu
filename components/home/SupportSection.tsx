"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SupportSection() {
  return (
    <section className="py-20 bg-black text-white" id="support">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠만의 파격 지원 3가지</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            사장님은 장사만 하세요. 나머지는 본사가 다 챙기겠습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800 overflow-hidden text-white hover:border-yellow-400 transition-all">
            <div className="h-2 bg-yellow-400"></div>
            <CardHeader>
              <div className="mb-3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-yellow-400 text-2xl font-bold">
                1
              </div>
              <CardTitle className="text-2xl font-bold">전문적인 마케팅 지원</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                SNS, 배달앱, 지역 맞춤형 마케팅까지 본사의 마케팅 전문가들이 매장별 맞춤 마케팅을 제공합니다. 
                오픈 첫달 300만원 상당의 초기 마케팅을 본사가 지원합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden text-white hover:border-yellow-400 transition-all">
            <div className="h-2 bg-yellow-400"></div>
            <CardHeader>
              <div className="mb-3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-yellow-400 text-2xl font-bold">
                2
              </div>
              <CardTitle className="text-2xl font-bold">철저한 상권 분석</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                전문 컨설턴트의 철저한 상권 분석으로 매출 가능성이 높은 위치에만 출점을 권유합니다.
                매출이 나올 것 같지 않은 곳에는 절대 오픈하지 않습니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden text-white hover:border-yellow-400 transition-all">
            <div className="h-2 bg-yellow-400"></div>
            <CardHeader>
              <div className="mb-3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-yellow-400 text-2xl font-bold">
                3
              </div>
              <CardTitle className="text-2xl font-bold">50호점까지 로열티 면제</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                50호점까지 로열티 면제 혜택을 제공합니다. 이는 매달 100만원 이상의 추가 수익으로
                이어져 초기 안정화에 큰 도움이 됩니다.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-yellow-400 rounded-lg p-8 text-black">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">여기까지 읽으신 분들께 드리는 혜택</h3>
              <p className="text-lg mb-6 md:mb-0">
                지금 문의하시면 초기 교육비 50% 할인 + 인테리어 설계비 무료
              </p>
            </div>
            <button
              onClick={() => {
                const franchise = document.getElementById('franchise')
                if (franchise) franchise.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-black text-white rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              가맹 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 