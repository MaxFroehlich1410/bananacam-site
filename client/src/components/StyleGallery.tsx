import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import longHairImage from "@assets/make_him_have_extremely_long_hair_drpz1a5mu4epipwsy6mi_0_1760813443336.png";
import baldImage from "@assets/make_him_bald_mn74pb9exr3gz9kdhve6_0_1760813443337.png";
import babyImage from "@assets/make_him_holds_a_baby_s14ucjburmdhyrh0b6g8_1_1760813443337.png";
import bananaImage from "@assets/make_him_wear_a_banana_costume_bzx52dpudiu25qa0pijf_0_1760813443337.png";
import puppyImage from "@assets/make_him_hold_a_puppy_mm1wbhsa763nj4fgwprb_0_1760813443337.png";

const styles = [
  { id: 1, name: "Long Hair", image: longHairImage, category: "Glamour" },
  { id: 2, name: "Bald", image: baldImage, category: "Transform" },
  { id: 3, name: "Holding Baby", image: babyImage, category: "Family" },
  { id: 4, name: "Banana Costume", image: bananaImage, category: "Fun" },
  { id: 5, name: "Holding Puppy", image: puppyImage, category: "Cute" },
  { id: 6, name: "Long Hair", image: longHairImage, category: "Glamour" },
  { id: 7, name: "Bald", image: baldImage, category: "Transform" },
  { id: 8, name: "Holding Baby", image: babyImage, category: "Family" },
];

export default function StyleGallery() {
  return (
    <section className="py-20 md:py-32" id="styles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl" data-testid="heading-styles">
            100+ <span className="text-primary">Amazing Styles</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" data-testid="text-styles-subtitle">
            From professional headshots to hilarious transformations. All photorealistic. All instant.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {styles.map((style) => (
            <Card 
              key={style.id}
              className="group cursor-pointer hover-elevate active-elevate-2 overflow-hidden"
              data-testid={`card-style-${style.id}`}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={style.image} 
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-style-${style.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${style.id}`}>
                      {style.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm" data-testid={`text-style-name-${style.id}`}>
                  {style.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-flex items-center justify-center p-8 hover-elevate cursor-pointer" data-testid="card-more-styles">
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-primary mb-2">92+ More Styles</p>
              <p className="text-sm text-foreground/60">Download to explore all transformations</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
