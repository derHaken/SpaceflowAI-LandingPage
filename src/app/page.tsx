import { HeroHeader } from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import FooterSection from "@/components/home/footer";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import FAQsThree from "@/components/home/faqs";
import BookConsultation from "@/components/home/book-consultation";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <FAQsThree />
      <BookConsultation />
      <FooterSection />
    </div>
  );
}
