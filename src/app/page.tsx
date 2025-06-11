
import Features from "@/components/home/features";
import { HeroHeader } from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import { VideoDemo } from '@/components/home/video-demo';
import FooterSection from "@/components/home/footer";
import HowItWorks from "@/components/home/how-it-works";
import FAQsThree from "@/components/home/faqs";
import BookConsultation from "@/components/home/book-consultation";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <Features />
      <VideoDemo />
      <HowItWorks />
      <FAQsThree />
      <BookConsultation />  
      <FooterSection />
    </div>
  );
}
