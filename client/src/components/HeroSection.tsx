import { Button } from "@/components/ui/button";
import { Apple, Play as PlayIcon, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import bananaVideo from "@assets/BananaCam_1_1760813309089.mp4";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
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
                <PlayIcon className="w-5 h-5" />
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

          <div className="relative" data-testid="hero-video-showcase">
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/20 bg-black">
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    muted
                    data-testid="video-hero"
                  >
                    <source src={bananaVideo} type="video/mp4" />
                  </video>
                  
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button
                        onClick={handlePlayVideo}
                        className="group relative"
                        data-testid="button-play-hero-video"
                      >
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all" />
                        <div className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/50">
                          <PlayIcon className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
