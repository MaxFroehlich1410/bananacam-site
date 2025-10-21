import { Card } from "@/components/ui/card";
import { Camera, Sparkles, Zap, Share2 } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Camera,
    title: "Photorealistic AI",
    description: "Advanced AI technology creates seamless, ultra-realistic transformations that look 100% authentic.",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "100+ Styles",
    description: "Choose from over 100 amazing styles - professional, funny, vintage, glamorous, and more.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Instant Results",
    description: "Transform your photos in seconds. No waiting, no rendering - just instant, mind-blowing results.",
  },
  {
    id: 4,
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your transformations instantly to all your social platforms with one tap.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-card/30" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl" data-testid="heading-features">
            Why <span className="text-primary">BananaCam?</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" data-testid="text-features-subtitle">
            The most advanced AI photo transformation app on the market
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              className="p-6 space-y-4 hover-elevate"
              data-testid={`card-feature-${feature.id}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" data-testid={`icon-feature-${feature.id}`} />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-xl" data-testid={`text-feature-title-${feature.id}`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70" data-testid={`text-feature-desc-${feature.id}`}>
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
