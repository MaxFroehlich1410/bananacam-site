import { useState, useRef } from "react";
import beforeImage from "@assets/make_a_closeup_should_look_like_a_smartphone_photo_gmxgn36btq2f4fm64x7n_0_1760813125130.png";
import afterImage from "@assets/make_him_wear_a_banana_costume_bzx52dpudiu25qa0pijf_0_1760813125139.png";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl" data-testid="heading-before-after">
            See The <span className="text-primary">Magic</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" data-testid="text-before-after-subtitle">
            Drag the slider to reveal incredible AI transformations
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-foreground/60 uppercase tracking-wide">Before</span>
              <span className="text-xl font-semibold text-primary uppercase tracking-wide">After</span>
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
                src={afterImage}
                alt="After - Banana Costume"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="img-after"
              />
              
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={beforeImage}
                  alt="Before - Original Photo"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: `${(100 / sliderPosition) * 100}%` }}
                  data-testid="img-before"
                />
              </div>

              <div 
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-5 bg-background rounded-full" />
                    <div className="w-0.5 h-5 bg-background rounded-full" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg px-6 py-4">
                <span className="text-base font-medium" data-testid="text-style-name">
                  Banana Costume Transformation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
