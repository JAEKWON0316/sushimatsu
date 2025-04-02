"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

// 카카오맵 API 키와 매장 정보
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY || "6256a21ea991a5f2d305bc6fc8655fa5"
const STORE_ADDRESS = "충남 홍성군 홍북읍 청사로174번길 25 2층"
const STORE_NAME = "스시마츠 홍성본점"

// 카카오맵 타입 선언
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        services: {
          Status: { OK: string };
          Geocoder: new () => {
            addressSearch: (
              address: string, 
              callback: (
                result: Array<{ x: string; y: string }>, 
                status: string
              ) => void
            ) => void;
          };
        };
        LatLng: new (lat: string, lng: string) => any;
        Map: new (container: HTMLElement, options: { center: any; level: number }) => any;
        Marker: new (options: { position: any }) => { setMap: (map: any) => void };
        InfoWindow: new (options: { content: string }) => { open: (map: any, marker: any) => void };
      };
    };
  }
}

export default function StoresSection() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const [showMap, setShowMap] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)
  const [isMapScriptLoaded, setIsMapScriptLoaded] = useState(false)

  // 지도 표시/숨김 토글
  const toggleMap = () => {
    setShowMap((prev) => !prev)
    if (!showMap) {
      setMapError(null)
    }
  }

  // 카카오맵 API 스크립트 로드
  useEffect(() => {
    if (!showMap) return
    
    if (!isMapScriptLoaded) {
      // 스크립트가 이미 있는지 확인
      const existingScript = document.getElementById('kakao-map-script')
      if (!existingScript) {
        const script = document.createElement('script')
        script.id = 'kakao-map-script'
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`
        script.onload = () => {
          setIsMapScriptLoaded(true)
        }
        script.onerror = () => {
          setMapError('카카오맵 스크립트 로드에 실패했습니다.')
        }
        document.head.appendChild(script)
      } else {
        setIsMapScriptLoaded(true)
      }
    }
  }, [showMap, isMapScriptLoaded])

  // 지도 초기화
  useEffect(() => {
    if (!showMap || !isMapScriptLoaded || !mapContainer.current) return

    // 2초의 지연 시간을 두어 스크립트가 완전히 로드되도록 함 (배포 환경에서는 더 긴 지연이 필요할 수 있음)
    const timer = setTimeout(() => {
      try {
        if (typeof window.kakao === 'undefined') {
          console.error("카카오맵 API가 로드되지 않았습니다.");
          setMapError('카카오맵 API를 불러오는데 실패했습니다. 페이지를 새로고침하고 다시 시도해주세요.');
          return;
        }

        // 카카오맵 SDK 초기화
        window.kakao.maps.load(() => {
          try {
            // 지오코더 객체 생성
            const geocoder = new window.kakao.maps.services.Geocoder()
            
            // 주소로 좌표 검색
            geocoder.addressSearch(STORE_ADDRESS, (result: Array<{ x: string; y: string }>, status: string) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

                // 지도 생성
                const mapOptions = {
                  center: coords, // 중심 좌표
                  level: 3        // 확대 레벨
                }
                
                if (mapContainer.current) {
                  const map = new window.kakao.maps.Map(mapContainer.current, mapOptions)
                  
                  // 마커 생성
                  const marker = new window.kakao.maps.Marker({
                    position: coords
                  })
                  
                  // 마커를 지도에 표시
                  marker.setMap(map)
                  
                  // 인포윈도우 생성
                  const infowindow = new window.kakao.maps.InfoWindow({
                    content: `<div style="padding:8px;font-size:14px;font-weight:bold;text-align:center;width:180px;color:black;">${STORE_NAME}</div>`
                  })
                  
                  // 인포윈도우 표시
                  infowindow.open(map, marker)
                  
                  // 지도 크기 변경 시 다시 그리기
                  window.addEventListener('resize', () => {
                    map.relayout()
                    map.setCenter(coords)
                  })
                }
              } else {
                console.error("주소 검색 실패:", status)
                setMapError('매장 주소를 찾을 수 없습니다.')
              }
            })
          } catch (error) {
            console.error("카카오맵 초기화 오류:", error)
            setMapError('지도 초기화 중 오류가 발생했습니다.')
          }
        })
      } catch (error) {
        console.error("카카오맵 로드 에러:", error)
        setMapError('지도를 로드하는 과정에서 오류가 발생했습니다.')
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [isMapScriptLoaded, showMap])

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
            <div className="mt-6">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-black mb-6"
                onClick={toggleMap}
              >
                {showMap ? '지도 닫기' : '지도 보기'}
              </Button>
              
              {/* 에러 메시지 표시 */}
              {mapError && showMap && (
                <div className="text-red-400 mb-4 p-2 bg-gray-800 rounded">
                  {mapError}
                </div>
              )}
              
              {/* 지도 로딩 메시지 */}
              {showMap && !mapError && !isMapScriptLoaded && (
                <div className="text-yellow-400 mb-4 p-2 bg-gray-800 rounded">
                  지도를 불러오는 중입니다...
                </div>
              )}
              
              {/* 지도 컨테이너 */}
              {showMap && (
                <div 
                  id="map" 
                  ref={mapContainer} 
                  className="w-full h-[400px] rounded-lg mt-4 overflow-hidden transition-all duration-300 bg-gray-800"
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 