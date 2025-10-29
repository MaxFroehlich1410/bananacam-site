import { Instagram } from "lucide-react";
import { SiApple } from "react-icons/si";
import logoImage from "@assets/freepik__logo-for-banana-cam-but-make-it-look-professional__52540_1760812162759.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="BananaCam" className="h-8 w-auto" />
              <span className="font-display font-bold text-lg">
                <span className="text-primary">Banana</span>
                <span className="text-foreground/80">Cam</span>
              </span>
            </div>
            <p className="text-sm text-foreground/60">
              Transform your photos with AI-powered styles. Photorealistic and instant.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-secondary/50 flex items-center justify-center hover-elevate"
                data-testid="link-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-support">Support</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a
                  href="/support#account-billing"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-restore-purchase"
                >
                  Restore Purchase
                </a>
              </li>
              <li>
                <a
                  href="/support#faq"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-faq"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-download">Download</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm hover:text-foreground transition-colors" data-testid="link-ios-footer">
                <SiApple className="w-5 h-5" />
                <span>iOS App</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50" data-testid="text-copyright">
            © 2025 BananaCam. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/50">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors" data-testid="link-terms">Terms of Service</a>
            <a href="/support" className="hover:text-foreground transition-colors" data-testid="link-support">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
