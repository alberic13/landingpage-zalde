import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import UnlockSection from "@/components/sections/UnlockSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CalendarSection from "@/components/sections/CalendarSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import BlogSection from "@/components/sections/BlogSection";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <CommunitySection />
        <UnlockSection />
        <AchievementsSection />
        <CalendarSection />
        <TestimonialSection />
        <BlogSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
