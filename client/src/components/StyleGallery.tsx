import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import puppyImage from "@assets/generated_images/Holding_puppy_AI_transformation_aaa6774b.png";
import retroImage from "@assets/generated_images/90s_camera_filter_transformation_76a53cf5.png";
import headshotImage from "@assets/generated_images/Professional_headshot_AI_transformation_78c54c36.png";
import hairImage from "@assets/generated_images/Long_hair_transformation_d7424b7f.png";

const styles = [
  { id: 1, name: "Holding Puppy", image: puppyImage, category: "Fun" },
  { id: 2, name: "90s Retro Cam", image: retroImage, category: "Vintage" },
  { id: 3, name: "Professional", image: headshotImage, category: "Business" },
  { id: 4, name: "Long Hair", image: hairImage, category: "Glamour" },
  { id: 5, name: "Bald Hair", image: puppyImage, category: "Fun" },
  { id: 6, name: "Huge Head", image: retroImage, category: "Comic" },
  { id: 7, name: "Supermodel", image: headshotImage, category: "Fashion" },
  { id: 8, name: "Vintage Film", image: hairImage, category: "Vintage" },
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
