import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/freepik__logo-for-banana-cam-but-make-it-look-professional__52540_1760812162759.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3" data-testid="logo-container">
            <img src={logoImage} alt="BananaCam" className="h-10 w-auto" />
            <span className="font-display font-bold text-xl">
              <span className="text-primary">Banana</span>
              <span className="text-muted-foreground">Cam</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-features">
              Features
            </a>
            <a href="#styles" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-styles">
              Styles
            </a>
            <a href="#download" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-download">
              Download
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="default" size="default" data-testid="button-download-app">
              Download App
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium" data-testid="mobile-link-features">Features</a>
              <a href="#styles" className="text-sm font-medium" data-testid="mobile-link-styles">Styles</a>
              <a href="#download" className="text-sm font-medium" data-testid="mobile-link-download">Download</a>
              <Button variant="default" className="w-full" data-testid="mobile-button-download">Download App</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
