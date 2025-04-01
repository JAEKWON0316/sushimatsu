"use client"

import Image from "next/image"

export default function ProfileSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile001.jpg-RbqL9L4MpTZaEFQWW7WZ4lxj9v7QSR.jpeg"
              alt="이일 대표 프로필"
              width={1000}
              height={1000}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          <div className="mt-10 text-center">
            <button
              className="inline-block bg-yellow-400 text-black px-12 py-6 rounded-lg text-2xl font-bold hover:bg-yellow-500 transition-colors shadow-lg"
            >
              자신감 넘치는 창업 스토리 보러 가기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 