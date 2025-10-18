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

export default function BeforeAfterSlider() {
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
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/20 cursor-col-resize select-none"
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-5 bg-background rounded-full" />
                    <div className="w-0.5 h-5 bg-background rounded-full" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg px-6 py-4">
                <span className="text-base font-medium" data-testid="text-style-name">
                  {transformations[currentIndex].name}
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-10" : "bg-border"
                  }`}
                  data-testid={`button-style-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
