import { Button } from "@/components/ui/button";
import { Apple, Play, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import beforeImage from "@assets/generated_images/Before_transformation_selfie_photo_b121b6f9.png";
import puppyImage from "@assets/generated_images/Holding_puppy_AI_transformation_aaa6774b.png";
import retroImage from "@assets/generated_images/90s_camera_filter_transformation_76a53cf5.png";
import headshotImage from "@assets/generated_images/Professional_headshot_AI_transformation_78c54c36.png";
import hairImage from "@assets/generated_images/Long_hair_transformation_d7424b7f.png";

const transformations = [
  { name: "Holding Puppy", image: puppyImage },
  { name: "90s Retro", image: retroImage },
  { name: "Professional", image: headshotImage },
  { name: "Long Hair", image: hairImage },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20" data-testid="badge-ai-powered">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight" data-testid="heading-hero">
              Unleash Your <span className="text-primary">Inner Banana!</span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl" data-testid="text-hero-subtitle">
              Transform your photos with 100+ AI-powered styles. Photorealistic. Instant. Insane.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="default" className="text-lg px-8 gap-2" data-testid="button-download-ios">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 gap-2" data-testid="button-download-android">
                <Play className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-foreground/60">
              <div data-testid="stat-downloads">
                <span className="font-bold text-2xl text-primary">500K+</span>
                <span className="ml-2">Downloads</span>
              </div>
              <div className="w-px h-6 bg-border" />
              <div data-testid="stat-rating">
                <span className="font-bold text-2xl text-primary">4.9</span>
                <span className="ml-2">★ Rating</span>
              </div>
            </div>
          </div>

          <div className="relative" data-testid="hero-transformation-showcase">
            <div className="relative max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">Before</span>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                    <img src={beforeImage} alt="Before" className="w-full h-auto" data-testid="img-before" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">After</span>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-primary shadow-xl shadow-primary/20">
                    <img 
                      src={transformations[currentIndex].image} 
                      alt={transformations[currentIndex].name}
                      className="w-full h-auto transition-opacity duration-500"
                      data-testid="img-after"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-xs font-medium" data-testid="text-style-name">
                        {transformations[currentIndex].name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
