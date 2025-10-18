import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FeaturesSection from "@/components/FeaturesSection";
import StyleGallery from "@/components/StyleGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BeforeAfterSlider />
        <StyleGallery />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
