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
import FranchisePromotionSection from "@/components/home/FranchisePromotionSection"
import FaqSection from "@/components/home/FaqSection"
import FeatureSection from "@/components/home/FeatureSection"
import StatsSection from "@/components/home/StatsSection"
import VideoSection from "@/components/home/VideoSection"
import ProfitAnalysisSection from "@/components/home/ProfitAnalysisSection"
import StrengthSection from "@/components/home/StrengthSection"
import SupportSection from "@/components/home/SupportSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      {/* 컴포넌트화된 섹션들 */}
      <main>
        <HeroSection />
        <SloganSection />
        <StrengthSection />
        <ProfileSection />
        <ProfitAnalysisSection />
        <TestimonialSection />
        <StatsSection />
        <FeatureSection />
        <AboutSection />
        <MenuSection />
        <SupportSection />
        <VideoSection />
        <StoresSection />
        <FaqSection />
        <FranchisePromotionSection />
        <FranchiseSection />
      </main>
      
      <Footer />
      <FixedButtons />
    </div>
  )
}

