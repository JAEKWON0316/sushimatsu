"use client"

import { useState, useRef, useEffect } from "react"

// 매장 정보
const STORE_ADDRESS = "충남 홍성군 홍북읍 청사로174번길 25 2층"
const STORE_NAME = "스시마츠 홍성점"
const KAKAO_API_KEY = "6256a21ea991a5f2d305bc6fc8655fa5"

// 카카오맵 타입 정의
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => KakaoMap;
        Marker: new (options: { position: KakaoLatLng }) => KakaoMarker;
        InfoWindow: new (options: { content: string }) => KakaoInfoWindow;
        event: {
          addListener: <T>(target: T, type: string, callback: () => void) => void;
        };
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
      };
    };
  }
}

// 카카오맵 관련 인터페이스 정의
interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}

interface KakaoMap {
  setCenter(position: KakaoLatLng): void;
  getLevel(): number;
  setLevel(level: number): void;
  relayout(): void;
}

interface KakaoMarker {
  setMap(map: KakaoMap | null): void;
  getPosition(): KakaoLatLng;
}

interface KakaoInfoWindow {
  open(map: KakaoMap, marker: KakaoMarker): void;
  close(): void;
  getMap(): KakaoMap | null;
}

export default function StoresSection() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [mapLoadError, setMapLoadError] = useState<string | null>(null)
  
  // 정적 지도 URL - 카카오 정적 지도 API 사용
  const staticMapUrl = `https://map.kakao.com/link/map/${STORE_NAME},${STORE_ADDRESS}`
  
  // 새 창에서 카카오맵 열기
  const openKakaoMap = () => {
    window.open(staticMapUrl, '_blank')
  }
  
  // 카카오맵 스크립트 로드 및 지도 초기화
  useEffect(() => {
    // 이미 로드된 경우 스킵
    if (isMapLoaded || !mapContainer.current) return
    
    console.log("카카오맵 로딩 시작...")
    
    // 스크립트 태그가 이미 존재하는지 확인
    const existingScript = document.getElementById('kakao-map-script')
    if (existingScript) {
      console.log("카카오맵 스크립트가 이미 로드되어 있음")
      initializeMap()
      return
    }
    
    // 스크립트 태그 생성
    const script = document.createElement('script')
    script.id = 'kakao-map-script'
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`
    script.async = true
    
    script.onload = () => {
      console.log("카카오맵 스크립트 로드 완료, maps.load 호출 중...")
      window.kakao.maps.load(() => {
        console.log("카카오맵 API 초기화 완료, 지도 초기화 중...")
        initializeMap()
      })
    }
    
    script.onerror = () => {
      console.error("카카오맵 스크립트 로드 실패")
      setMapLoadError("지도를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요.")
    }
    
    // 문서에 스크립트 추가
    document.head.appendChild(script)
    
    // 컴포넌트 언마운트 시 클린업
    return () => {
      if (existingScript) return
      const scriptElement = document.getElementById('kakao-map-script')
      if (scriptElement) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [isMapLoaded])
  
  // 지도 초기화 함수
  const initializeMap = () => {
    if (!mapContainer.current || !window.kakao || !window.kakao.maps) {
      console.error("지도 초기화 실패: kakao.maps 객체가 없습니다.")
      setMapLoadError("지도를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요.")
      return
    }
    
    try {
      console.log("지도 초기화 시작...")
      
      // services 객체 확인
      if (!window.kakao.maps.services) {
        console.error("services 객체가 존재하지 않습니다.")
        setMapLoadError("지도 서비스를 불러오는 데 실패했습니다.")
        return
      }
      
      // 지오코더 객체 생성
      console.log("지오코더 생성 시도...")
      const geocoder = new window.kakao.maps.services.Geocoder()
      
      // 주소로 좌표 검색
      geocoder.addressSearch(STORE_ADDRESS, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
          console.log("주소 검색 성공:", result)
          
          // 문자열을 숫자로 변환
          const latitude = parseFloat(result[0].y)
          const longitude = parseFloat(result[0].x)
          
          const coords = new window.kakao.maps.LatLng(latitude, longitude)
          
          console.log("변환된 좌표:", latitude, longitude)
          
          // 지도 생성
          const mapOptions = {
            center: coords,
            level: 3
          }
          
          if (mapContainer.current) {
            console.log("지도 객체 생성 중...")
            const map = new window.kakao.maps.Map(mapContainer.current, mapOptions)
            
            // 마커 생성
            const marker = new window.kakao.maps.Marker({
              position: coords
            })
            
            // 마커 표시
            marker.setMap(map)
            console.log("마커 생성 및 표시 완료")
            
            // 인포윈도우 생성 및 표시
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:8px;font-size:14px;font-weight:bold;text-align:center;width:180px;color:black;">${STORE_NAME}</div>`
            })
            
            infowindow.open(map, marker)
            console.log("인포윈도우 표시 완료")
            
            // 지도 크기 변경 시 다시 그리기
            window.addEventListener('resize', () => {
              map.relayout()
              map.setCenter(coords)
            })
            
            setIsMapLoaded(true)
            console.log("지도 초기화 완료!")
          }
        } else {
          console.error("주소 검색 실패:", status)
          setMapLoadError("매장 주소를 찾을 수 없습니다.")
        }
      })
    } catch (error) {
      console.error("지도 초기화 중 오류 발생:", error)
      setMapLoadError("지도를 불러오는 중 오류가 발생했습니다.")
    }
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
            <div className="relative">
              <div 
                ref={mapContainer} 
                className="w-full h-[400px] rounded-lg mt-6 overflow-hidden bg-gray-800 cursor-pointer"
                onClick={openKakaoMap}
                title="클릭하여 카카오맵에서 보기"
              ></div>
              
              {mapLoadError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 rounded-lg">
                  <p className="text-white text-center p-4">{mapLoadError}</p>
                </div>
              )}
              
              {!isMapLoaded && !mapLoadError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 rounded-lg">
                  <p className="text-white text-center">지도를 불러오는 중...</p>
                </div>
              )}
              
              <p className="text-sm text-gray-400 mt-2 text-center">지도를 클릭하면 카카오맵에서 자세히 볼 수 있습니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 