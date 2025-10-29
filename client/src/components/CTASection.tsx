import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="download">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_70%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-display font-bold text-4xl md:text-6xl" data-testid="heading-cta">
          Ready to <span className="text-primary">Transform?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
          Join to create insane photos with AI. Download now and unleash your inner banana!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" variant="default" className="text-lg px-8 gap-2" data-testid="button-cta-ios">
            <Apple className="w-5 h-5" />
            <div className="flex flex-col items-start">
              <span className="text-xs opacity-80">Download on</span>
              <span className="font-semibold">App Store</span>
            </div>
          </Button>
        </div>

        <p className="text-sm text-foreground/50" data-testid="text-platforms">
          Available on iOS
        </p>
      </div>
    </section>
  );
}
