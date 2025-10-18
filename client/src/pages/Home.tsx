import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StyleGallery from "@/components/StyleGallery";
import AppShowcase from "@/components/AppShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StyleGallery />
        <AppShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
