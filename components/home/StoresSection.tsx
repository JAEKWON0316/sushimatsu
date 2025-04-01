"use client"

import { Button } from "@/components/ui/button"

export default function StoresSection() {
  return (
    <section id="stores" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">매장 안내</h2>
        <div className="grid md:grid-cols-1 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">스시마츠 홍성점</h3>
            <p className="mb-4">
              <strong>주소:</strong> 충남 홍성군 홍북읍 청사로174번길 25 2층
            </p>
            <p className="mb-4">
              <strong>전화:</strong> 0507-1380-5336
            </p>
            <p className="mb-4">
              <strong>영업시간:</strong> 11:00 - 21:00
            </p>
            <div className="mt-6">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">지도 보기</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 