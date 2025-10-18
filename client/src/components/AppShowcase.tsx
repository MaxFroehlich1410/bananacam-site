import { Play } from "lucide-react";
import { useState } from "react";

export default function AppShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl" data-testid="heading-showcase">
            See It In <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" data-testid="text-showcase-subtitle">
            Watch how BananaCam transforms photos in real-time with AI magic
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-border bg-card shadow-2xl">
            <div className="relative w-full h-full bg-gradient-to-br from-card to-background">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group relative"
                    data-testid="button-play-video"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
                    <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/50">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center space-y-4 -mt-32">
                      <p className="text-2xl font-display font-bold">Demo Video</p>
                      <p className="text-foreground/60">Click to watch BananaCam in action</p>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="BananaCam Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-testid="video-demo"
                />
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/60">
              Watch real users transform their photos with our AI technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
