import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Support() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Support</h1>
          <p className="text-lg text-foreground/70 mb-12">
            Questions or Feedback? Write us at <a href="mailto:maxfroehlich@gmx.net" className="text-primary hover:underline">maxfroehlich@gmx.net</a>.
          </p>

          <section id="faq" className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">FAQ</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">How does BananaCam work?</h3>
                <p className="text-foreground/80">
                  BananaCam uses advanced AI technology (Google's Nano Banana Model) accessed through Replicate API to transform your photos into various styles. Simply upload a photo, choose a transformation style, and the AI will process it on secure third-party servers to create a photorealistic transformed version that is delivered back to you.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Are my photos stored securely?</h3>
                <p className="text-foreground/80">
                  Yes, we take your privacy seriously. Photos are processed securely through Replicate API using Google's Nano Banana Model. Images are temporarily stored on our servers (up to 30 days) and on Replicate's infrastructure (typically 24-72 hours) during processing. You can delete your images from our systems at any time through the app. Please see our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for more details about third-party data handling.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">How long does image transformation take?</h3>
                <p className="text-foreground/80">
                  Most transformations are completed within 10-30 seconds, depending on image complexity and server load.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Can I use transformed images commercially?</h3>
                <p className="text-foreground/80">
                  Transformed images are created using AI technology. While you retain rights to your original photos, commercial use of AI-generated content may be subject to local laws and regulations. Please use your transformed images responsibly.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">What photo formats are supported?</h3>
                <p className="text-foreground/80">
                  BananaCam supports common image formats including JPEG, PNG, and HEIC. Images should be clear and well-lit for best transformation results.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Is the app free to use?</h3>
                <p className="text-foreground/80">
                  BananaCam offers both free and premium features. Basic transformations are available for free, with additional styles and features available through in-app purchases.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

