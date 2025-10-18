import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockupImage from "@assets/freepik__make-an-appstore-image-for-this-app-like-an-ad__52542_1760812162759.png";
import beforeAfterImage from "@assets/freepik__make-an-appstore-image-for-this-app-like-an-ad-bef__52543_1760812162758.png";
import screensImage from "@assets/freepik__make-an-appstore-image-for-this-app-like-an-ad__52541_1760812162759.png";

const screenshots = [
  { id: 1, image: mockupImage, title: "Easy Interface" },
  { id: 2, image: beforeAfterImage, title: "Before & After" },
  { id: 3, image: screensImage, title: "Style Selection" },
];

export default function AppShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl" data-testid="heading-showcase">
            See It In <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" data-testid="text-showcase-subtitle">
            Fun filters. Easy edits. Share instantly.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-card">
            <img 
              src={screenshots[currentSlide].image}
              alt={screenshots[currentSlide].title}
              className="w-full h-full object-contain"
              data-testid={`img-screenshot-${currentSlide}`}
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
            <Button
              size="icon"
              variant="secondary"
              onClick={prevSlide}
              className="rounded-full shadow-lg"
              data-testid="button-prev-screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={nextSlide}
              className="rounded-full shadow-lg"
              data-testid="button-next-screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary w-8" : "bg-border"
                }`}
                data-testid={`button-slide-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
