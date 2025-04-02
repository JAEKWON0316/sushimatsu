"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

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
    kakaoMapCallback?: () => void;
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
  const [showMap, setShowMap] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)
  const [isMapScriptLoaded, setIsMapScriptLoaded] = useState(false)
  const [isMapInitialized, setIsMapInitialized] = useState(false)
  const isLoadingScript = useRef(false)

  // 지도 초기화 함수
  const initializeMap = () => {
    if (!mapContainer.current || !window.kakao || !window.kakao.maps) return
    
    console.log("지도 초기화 시작...");
    
    try {
      // 카카오맵 SDK 초기화
      window.kakao.maps.load(() => {
        console.log("카카오맵 SDK 초기화 완료");
        
        try {
          // 지오코더 객체 생성
          if (!window.kakao.maps.services) {
            console.error("services 객체가 존재하지 않습니다.");
            setMapError('카카오맵 서비스를 불러오는데 실패했습니다.');
            return;
          }
          
          console.log("지오코더 생성 시도...");
          const geocoder = new window.kakao.maps.services.Geocoder();
          
          // 주소로 좌표 검색
          geocoder.addressSearch(STORE_ADDRESS, (result: Array<{ x: string; y: string }>, status: string) => {
            if (status === window.kakao.maps.services.Status.OK) {
              console.log("주소 검색 성공:", result);
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
              
              // 지도 생성
              const mapOptions = {
                center: coords,
                level: 3
              };
              
              if (mapContainer.current) {
                console.log("지도 객체 생성");
                const map = new window.kakao.maps.Map(mapContainer.current, mapOptions);
                
                // 마커 생성
                const marker = new window.kakao.maps.Marker({
                  position: coords
                });
                
                // 마커 표시
                marker.setMap(map);
                
                // 인포윈도우 생성 및 표시
                const infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="padding:8px;font-size:14px;font-weight:bold;text-align:center;width:180px;color:black;">${STORE_NAME}</div>`
                });
                
                infowindow.open(map, marker);
                
                // 지도 크기 변경 시 다시 그리기
                window.addEventListener('resize', () => {
                  map.relayout();
                  map.setCenter(coords);
                });
                
                console.log("지도 초기화 완료");
                setIsMapInitialized(true);
              }
            } else {
              console.error("주소 검색 실패:", status);
              setMapError('매장 주소를 찾을 수 없습니다.');
            }
          });
        } catch (error) {
          console.error("지도 초기화 오류:", error);
          setMapError('지도 초기화 중 오류가 발생했습니다.');
        }
      });
    } catch (error) {
      console.error("카카오맵 로드 오류:", error);
      setMapError('지도를 로드하는데 실패했습니다.');
    }
  }

  // 지도 표시/숨김 토글
  const toggleMap = () => {
    if (!showMap && !isMapScriptLoaded && !isLoadingScript.current) {
      // 스크립트가 로드되지 않았고, 현재 로드 중이 아니라면 로드 시작
      loadKakaoMapScript();
    }
    setShowMap((prev) => !prev);
    if (!showMap) {
      setMapError(null);
    }
  }

  // 카카오맵 API 스크립트 로드
  const loadKakaoMapScript = () => {
    if (isMapScriptLoaded || isLoadingScript.current) return;
    
    isLoadingScript.current = true;
    try {
      // 카카오맵이 이미 로드되어 있는지 확인
      if (window.kakao && window.kakao.maps) {
        console.log("카카오맵 이미 로드됨");
        setIsMapScriptLoaded(true);
        initializeMap();
        isLoadingScript.current = false;
        return;
      }
      
      console.log("카카오맵 스크립트 로드 시작...");
      
      // 카카오맵 콜백 함수 정의
      window.kakaoMapCallback = () => {
        console.log("카카오맵 콜백 함수 실행");
        setIsMapScriptLoaded(true);
        initializeMap();
        isLoadingScript.current = false;
      };
      
      // 스크립트 생성
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      // 카카오 공식 방식으로 콜백 함수 사용
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false&callback=kakaoMapCallback`;
      script.async = true;
      
      // 오류 처리
      script.onerror = (error) => {
        console.error("카카오맵 스크립트 로드 오류:", error);
        setMapError('카카오맵을 불러오는데 실패했습니다. 새로고침 후 다시 시도해주세요.');
        isLoadingScript.current = false;
      };
      
      // body에 스크립트 추가
      document.body.appendChild(script);
    } catch (error) {
      console.error("스크립트 추가 중 오류 발생:", error);
      setMapError('카카오맵 스크립트를 추가하는 과정에서 오류가 발생했습니다.');
      isLoadingScript.current = false;
    }
  }
  
  // 맵 컨테이너가 마운트되고 스크립트가 로드된 후 지도 초기화
  useEffect(() => {
    if (showMap && isMapScriptLoaded && !isMapInitialized && mapContainer.current) {
      initializeMap();
    }
  }, [showMap, isMapScriptLoaded, isMapInitialized]);

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
              {showMap && !mapError && (!isMapScriptLoaded || !isMapInitialized) && (
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