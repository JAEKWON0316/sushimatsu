"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const menuItems = [
  {
    id: 1,
    title: "프리미엄 사시미",
    description: "신선한 해산물로 만든 특별한 사시미 플레이팅",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu001-PEDUG4SdlJ4lcnfvX4JBTVubHk7sGs.jpeg",
  },
  {
    id: 2,
    title: "해물 매운탕",
    description: "신선한 해산물이 가득한 얼큰한 매운탕",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu002-ITtYJIwqBlcUzgOq8T7Gs9bkL3LbXg.jpeg",
  },
  {
    id: 3,
    title: "모듬 스시",
    description: "다양한 스시를 한번에 즐길 수 있는 스페셜 세트",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu003-zsUQiweqGtCfVneLEkpuiV65hA00eq.jpeg",
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">대표 메뉴</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card 
              key={item.id} 
              className="bg-gray-900 border-gray-800 overflow-hidden shadow-lg transition-transform hover:scale-105 text-white"
            >
              <div className="h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <CardDescription className="text-gray-400">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">전체 메뉴 보기</Button>
        </div>
      </div>
    </section>
  )
} 