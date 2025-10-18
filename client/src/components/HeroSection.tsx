import { Button } from "@/components/ui/button";
import { Apple, Play, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import beforeImage from "@assets/generated_images/Before_transformation_selfie_photo_b121b6f9.png";
import puppyImage from "@assets/generated_images/Holding_puppy_AI_transformation_aaa6774b.png";
import retroImage from "@assets/generated_images/90s_camera_filter_transformation_76a53cf5.png";
import headshotImage from "@assets/generated_images/Professional_headshot_AI_transformation_78c54c36.png";
import hairImage from "@assets/generated_images/Long_hair_transformation_d7424b7f.png";

const transformations = [
  { name: "Holding Puppy", before: beforeImage, after: puppyImage },
  { name: "90s Retro", before: beforeImage, after: retroImage },
  { name: "Professional", before: beforeImage, after: headshotImage },
  { name: "Long Hair", before: beforeImage, after: hairImage },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <div className="relative max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-foreground/60 uppercase tracking-wide">Before</span>
                  <span className="text-lg font-semibold text-primary uppercase tracking-wide">After</span>
                </div>
                
                <div 
                  ref={containerRef}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/20 cursor-col-resize select-none"
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  onTouchMove={handleTouchMove}
                  data-testid="slider-container"
                >
                  <img 
                    src={transformations[currentIndex].after}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                    data-testid="img-after"
                  />
                  
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img 
                      src={transformations[currentIndex].before}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ width: `${(100 / sliderPosition) * 100}%` }}
                      data-testid="img-before"
                    />
                  </div>

                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize z-10"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-background rounded-full" />
                        <div className="w-0.5 h-4 bg-background rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-3">
                    <span className="text-sm font-medium" data-testid="text-style-name">
                      {transformations[currentIndex].name}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                  {transformations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary w-8" : "bg-border"
                      }`}
                      data-testid={`button-style-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
