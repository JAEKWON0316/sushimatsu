"use client"

import { useState, useRef, useEffect } from "react"

// 매장 정보
const STORE_ADDRESS = "충남 홍성군 홍북읍 청사로174번길 25 2층"
const STORE_NAME = "스시마츠 홍성점"
const STORE_LOCATION = { lat: 36.6212, lng: 126.6657 } // 홍성군 홍북읍의 대략적인 좌표 (미리 설정)

export default function StoresSection() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  
  // 정적 지도 URL - 카카오 정적 지도 API 사용
  const staticMapUrl = `https://map.kakao.com/link/map/${STORE_NAME},${STORE_LOCATION.lat},${STORE_LOCATION.lng}`
  
  // 새 창에서 카카오맵 열기
  const openKakaoMap = () => {
    window.open(staticMapUrl, '_blank')
  }
  
  // 카카오맵 스크립트 로드 및 지도 초기화
  useEffect(() => {
    // 이미 로드된 경우 스킵
    if (isMapLoaded || !mapContainer.current) return
    
    // 스크립트 태그가 이미 존재하는지 확인
    const existingScript = document.getElementById('kakao-map-script')
    if (existingScript) {
      initializeMap()
      return
    }
    
    // 스크립트 태그 생성
    const script = document.createElement('script')
    script.id = 'kakao-map-script'
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=6256a21ea991a5f2d305bc6fc8655fa5&autoload=false'
    script.async = true
    
    script.onload = () => {
      window.kakao.maps.load(() => {
        initializeMap()
      })
    }
    
    // 문서에 스크립트 추가
    document.head.appendChild(script)
    
    // 컴포넌트 언마운트 시 클린업
    return () => {
      if (existingScript) return
      if (document.getElementById('kakao-map-script')) {
        document.head.removeChild(script)
      }
    }
  }, [])
  
  // 지도 초기화 함수
  const initializeMap = () => {
    if (!mapContainer.current || !window.kakao || !window.kakao.maps) return
    
    const position = new window.kakao.maps.LatLng(STORE_LOCATION.lat, STORE_LOCATION.lng)
    
    const options = {
      center: position,
      level: 3
    }
    
    // 지도 생성
    const map = new window.kakao.maps.Map(mapContainer.current, options)
    
    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: position
    })
    
    // 마커를 지도에 표시
    marker.setMap(map)
    
    // 인포윈도우 생성
    const infowindow = new window.kakao.maps.InfoWindow({
      content: `<div style="padding:5px;text-align:center;width:150px;">${STORE_NAME}</div>`
    })
    
    // 인포윈도우 표시
    infowindow.open(map, marker)
    
    setIsMapLoaded(true)
  }

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
            
            {/* 지도 */}
            <div 
              ref={mapContainer} 
              className="w-full h-[400px] rounded-lg mt-6 overflow-hidden bg-gray-800 cursor-pointer"
              onClick={openKakaoMap}
              title="클릭하여 카카오맵에서 보기"
            ></div>
            <p className="text-sm text-gray-400 mt-2 text-center">지도를 클릭하면 카카오맵에서 자세히 볼 수 있습니다</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// 카카오맵 타입 정의
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => any;
        Map: new (container: HTMLElement, options: { center: any; level: number }) => any;
        Marker: new (options: { position: any }) => any;
        InfoWindow: new (options: { content: string }) => any;
      };
    };
  }
} 