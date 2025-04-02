"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Script from "next/script"

// 카카오맵 API 키와 매장 정보
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY || "6256a21ea991a5f2d305bc6fc8655fa5"
const STORE_ADDRESS = "충남 홍성군 홍북읍 청사로174번길 25 2층"
const STORE_NAME = "스시마츠 홍성점"

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
        LatLng: new (lat: string, lng: string) => KakaoLatLng;
        Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => KakaoMap;
        Marker: new (options: { position: KakaoLatLng }) => KakaoMarker;
        InfoWindow: new (options: { content: string }) => KakaoInfoWindow;
      };
    };
  }

  // 카카오맵 타입 정의
  interface KakaoLatLng {
    getLat(): number;
    getLng(): number;
  }

  interface KakaoMap {
    setCenter(position: KakaoLatLng): void;
    relayout(): void;
  }

  interface KakaoMarker {
    setMap(map: KakaoMap): void;
  }

  interface KakaoInfoWindow {
    open(map: KakaoMap, marker: KakaoMarker): void;
  }
}

export default function StoresSection() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState<string | null>(null)
  const [isMapLoading, setIsMapLoading] = useState(true)
  const mapInstance = useRef<KakaoMap | null>(null)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  // 카카오맵 API 로드 상태 확인
  const checkKakaoMapLoaded = (): boolean => {
    return !!window.kakao && !!window.kakao.maps && !!window.kakao.maps.services;
  }

  // 지도 초기화 함수
  const initializeMap = useCallback(() => {
    if (!mapContainer.current) return;
    
    // 이미 지도 인스턴스가 존재하면 재사용
    if (mapInstance.current) {
      console.log("기존 지도 인스턴스 사용")
      setIsMapLoading(false)
      return
    }
    
    try {
      console.log("지도 초기화 시작...")
      
      // 지오코더 객체 생성
      if (!checkKakaoMapLoaded()) {
        console.error("카카오맵 서비스가 로드되지 않았습니다.")
        setMapError('카카오맵을 불러오는데 실패했습니다. 새로고침 후 다시 시도해주세요.')
        setIsMapLoading(false)
        return
      }
      
      console.log("지오코더 생성 시도...")
      const geocoder = new window.kakao.maps.services.Geocoder()
      
      // 주소로 좌표 검색
      geocoder.addressSearch(STORE_ADDRESS, (result: Array<{ x: string; y: string }>, status: string) => {
        if (status === window.kakao.maps.services.Status.OK) {
          console.log("주소 검색 성공:", result)
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)
          
          // 지도 생성
          const mapOptions = {
            center: coords,
            level: 3
          }
          
          if (mapContainer.current) {
            console.log("지도 객체 생성")
            const map = new window.kakao.maps.Map(mapContainer.current, mapOptions)
            mapInstance.current = map
            
            // 마커 생성
            const marker = new window.kakao.maps.Marker({
              position: coords
            })
            
            // 마커 표시
            marker.setMap(map)
            
            // 인포윈도우 생성 및 표시
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:8px;font-size:14px;font-weight:bold;text-align:center;width:180px;color:black;">${STORE_NAME}</div>`
            })
            
            infowindow.open(map, marker)
            
            // 지도 크기 변경 시 다시 그리기
            window.addEventListener('resize', () => {
              map.relayout()
              map.setCenter(coords)
            })
            
            console.log("지도 초기화 완료")
          }
        } else {
          console.error("주소 검색 실패:", status)
          setMapError('매장 주소를 찾을 수 없습니다.')
        }
        setIsMapLoading(false)
      })
    } catch (error) {
      console.error("지도 초기화 오류:", error)
      setMapError('지도 초기화 중 오류가 발생했습니다.')
      setIsMapLoading(false)
    }
  }, [])

  // 카카오맵 스크립트 로드 완료 이벤트 핸들러
  const handleScriptLoad = () => {
    console.log("카카오맵 SDK 로드 완료")
    setIsScriptLoaded(true)
    
    if (!mapInstance.current) {
      initializeMap()
    }
  }

  // 스크립트 로드 후 지도 초기화
  useEffect(() => {
    if (isScriptLoaded && !mapInstance.current) {
      if (checkKakaoMapLoaded()) {
        console.log("카카오맵 SDK 로드 확인됨, 지도 초기화 시작")
        initializeMap()
      } else {
        console.log("카카오맵 SDK가 로드되지 않음, 로드 후 초기화 예정")
        // 카카오맵 로드 확인을 위한 인터벌 설정
        const checkInterval = setInterval(() => {
          if (checkKakaoMapLoaded()) {
            clearInterval(checkInterval)
            console.log("카카오맵 SDK 로드 확인됨, 지도 초기화 시작")
            initializeMap()
          }
        }, 300)
        
        // 일정 시간 후 로드 실패로 처리
        const timeoutId = setTimeout(() => {
          clearInterval(checkInterval)
          if (!checkKakaoMapLoaded()) {
            console.error("카카오맵 SDK 로드 시간 초과")
            setMapError('카카오맵을 불러오는데 실패했습니다. 새로고침 후 다시 시도해주세요.')
            setIsMapLoading(false)
          }
        }, 10000) // 10초 후에 타임아웃
        
        return () => {
          clearInterval(checkInterval)
          clearTimeout(timeoutId)
        }
      }
    }
  }, [isScriptLoaded, initializeMap])

  return (
    <>
      {/* 카카오맵 스크립트 - Next.js에서 권장하는 방식으로 스크립트 로드 */}
      <Script 
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={() => {
          console.error("카카오맵 스크립트 로드 오류")
          setMapError('카카오맵을 불러오는데 실패했습니다. 새로고침 후 다시 시도해주세요.')
          setIsMapLoading(false)
        }}
      />
      
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
              
              {/* 에러 메시지 표시 */}
              {mapError && (
                <div className="text-red-400 mb-4 p-2 bg-gray-800 rounded">
                  {mapError}
                </div>
              )}
              
              {/* 지도 로딩 메시지 */}
              {isMapLoading && !mapError && (
                <div className="text-yellow-400 mb-4 p-2 bg-gray-800 rounded">
                  지도를 불러오는 중입니다...
                </div>
              )}
              
              {/* 지도 컨테이너 */}
              <div 
                id="map" 
                ref={mapContainer} 
                className="w-full h-[400px] rounded-lg mt-6 overflow-hidden transition-all duration-300 bg-gray-800"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 