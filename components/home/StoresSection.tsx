"use client"

import { useEffect, useRef, useState } from "react"

// 매장 정보
const STORE_ADDRESS = "충남 홍성군 홍북읍 청사로174번길 25 2층"
const STORE_NAME = "스시마츠 홍성점"

export default function StoresSection() {
  const [isLoading, setIsLoading] = useState(true)
  
  // iframe 로드 완료 핸들러
  const handleIframeLoad = () => {
    setIsLoading(false)
  }
  
  // 지도 URL 생성 - 카카오맵 웹 URL을 사용하여 매장 주소로 검색
  const mapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(STORE_ADDRESS)}`

  return (
    <section id="stores" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">매장 안내</h2>
        <div className="grid md:grid-cols-1 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">스시마츠 홍성점</h3>
            <p className="mb-4">
              <strong>주소:</strong> {STORE_ADDRESS}
            </p>
            <p className="mb-4">
              <strong>전화:</strong> 0507-1380-5336
            </p>
            <p className="mb-4">
              <strong>영업시간:</strong> 11:00 - 21:00
            </p>
            
            {/* 지도 로딩 메시지 */}
            {isLoading && (
              <div className="text-yellow-400 mb-4 p-2 bg-gray-800 rounded">
                지도를 불러오는 중입니다...
              </div>
            )}
            
            {/* 지도 iframe */}
            <div className="w-full h-[400px] rounded-lg mt-6 overflow-hidden bg-gray-800">
              <iframe
                src={mapUrl}
                title="스시마츠 홍성점 위치"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                onLoad={handleIframeLoad}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 