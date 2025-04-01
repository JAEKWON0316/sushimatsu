"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "스시마츠 창업 성공 스토리",
    embedId: "XmEg6JWbQaw",
  },
  {
    id: 2,
    title: "스시마츠 메뉴 개발 과정",
    embedId: "0iofkWVqt84",
  },
  {
    id: 3,
    title: "스시마츠 가맹점 개업 현장",
    embedId: "AbbsN8_IkPI",
  },
  {
    id: 4,
    title: "스시마츠 고객 만족도 인터뷰",
    embedId: "aRfITezCo_I",
  },
  {
    id: 5,
    title: "스시마츠 메뉴 소개",
    embedId: "7QDADiepisk",
  },
  {
    id: 6,
    title: "스시마츠 가맹 상담 안내",
    embedId: "2cW14Yef7kI",
  },
]

export default function VideoSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const activeVideo = videos[activeVideoIndex]

  const handlePrev = () => {
    setActiveVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 bg-gray-900 text-white" id="videos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스시마츠 영상 갤러리</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            스시마츠 매장과 메뉴를 영상으로 만나보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.embedId}`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              aria-label="이전 영상"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              aria-label="다음 영상"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <h3 className="text-xl font-medium">{activeVideo.title}</h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-6">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideoIndex(index)}
                className={`rounded overflow-hidden ${
                  index === activeVideoIndex ? "ring-2 ring-yellow-400" : ""
                }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-auto"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 