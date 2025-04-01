"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FixedButtons from "@/components/layout/FixedButtons"
import HeroSection from "@/components/home/HeroSection"
import SloganSection from "@/components/home/SloganSection"
import ProfileSection from "@/components/home/ProfileSection"
import TestimonialSection from "@/components/home/TestimonialSection"
import AboutSection from "@/components/home/AboutSection"
import MenuSection from "@/components/home/MenuSection"
import StoresSection from "@/components/home/StoresSection"
import FranchiseSection from "@/components/home/FranchiseSection"
import FaqSection from "@/components/home/FaqSection"
import FeatureSection from "@/components/home/FeatureSection"
import StatsSection from "@/components/home/StatsSection"
import VideoSection from "@/components/home/VideoSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      {/* 컴포넌트화된 섹션들 */}
      <main>
        <HeroSection />
        <SloganSection />
        <ProfileSection />
        <TestimonialSection />
        <StatsSection />
        <FeatureSection />
        <AboutSection />
        <MenuSection />
        <VideoSection />
        <StoresSection />
        <FaqSection />
        <FranchiseSection />
      </main>
      
      <Footer />
      <FixedButtons />
    </div>
  )
}

