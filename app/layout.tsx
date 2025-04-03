import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "스시마츠 - 프리미엄 스시 브랜드",
  description: "신선함이 살아있는 프리미엄 스시 브랜드 스시마츠입니다. 최고의 재료로 만든 스시를 만나보세요.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: "스시마츠 - 프리미엄 스시 브랜드",
    description: "신선함이 살아있는 프리미엄 스시 브랜드 스시마츠입니다. 최고의 재료로 만든 스시를 만나보세요.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EB%8A%94%20%EB%94%94%EC%9E%90%EC%9D%B8%20-%202025-03-13T184542.478-iHNHRT8TTDdFtc4eO1qELqJMWjxGmB.png",
        width: 1200,
        height: 630,
        alt: "스시마츠 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "스시마츠 - 프리미엄 스시 브랜드",
    description: "신선함이 살아있는 프리미엄 스시 브랜드 스시마츠입니다. 최고의 재료로 만든 스시를 만나보세요.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EB%8A%94%20%EB%94%94%EC%9E%90%EC%9D%B8%20-%202025-03-13T184542.478-iHNHRT8TTDdFtc4eO1qELqJMWjxGmB.png",
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

