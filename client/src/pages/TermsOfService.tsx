import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-sm text-foreground/60 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-foreground/80">
                By accessing or using BananaCam ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-foreground/80 mb-4">Permission is granted to download and use BananaCam for personal, non-commercial use only, subject to the following restrictions:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>You may not use the App for any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>You may not violate any local, state, national, or international law or regulation</li>
                <li>You may not transmit any worms or viruses or any code of a destructive nature</li>
                <li>You may not infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">3.1 Photo Transformations</h3>
              <p className="text-foreground/80">
                When you upload photos to BananaCam, you retain ownership of your original images. By using our AI transformation services, you grant us a license to process and transform your images to provide the requested service. This includes transmitting your photos to our third-party service providers (Replicate API) which uses Google's Nano Banana Model to perform the AI transformations.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">3.2 Third-Party Processing</h3>
              <p className="text-foreground/80">
                You acknowledge and agree that your photos will be processed by third-party services (Replicate API and Google's Nano Banana Model) to provide the transformation functionality. By using BananaCam, you consent to the transmission and processing of your images by these third-party services in accordance with their respective privacy policies and terms of service.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">3.3 Prohibited Content</h3>
              <p className="text-foreground/80">
                You agree not to upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable. We reserve the right to refuse service to anyone who violates these terms. You are responsible for ensuring you have the right to upload and transform any images you submit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. AI-Generated Content Disclaimer</h2>
              <p className="text-foreground/80">
                BananaCam uses artificial intelligence (Google's Nano Banana Model via Replicate API) to transform your photos. The results are AI-generated and may not always produce perfect or expected results. We do not guarantee the accuracy, quality, or suitability of transformed images for any particular purpose. AI transformations are probabilistic in nature and results may vary.
              </p>
              <p className="text-foreground/80 mt-4">
                <strong>Third-Party AI Services:</strong> The AI transformations are performed by Google's Nano Banana Model, which is accessed through Replicate API. We do not control the AI model's behavior, output quality, or processing methods. Any issues, inaccuracies, or limitations in the transformations are subject to the capabilities and limitations of these third-party AI services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-foreground/80">
                The App and its original content, features, and functionality are owned by BananaCam and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Service Availability</h2>
              <p className="text-foreground/80">
                We reserve the right to withdraw or amend the App, and any service or material we provide, at any time without notice. We will not be liable if, for any reason, all or any part of the App is unavailable at any time or for any period. BananaCam depends on third-party services (Replicate API and Google's infrastructure) for its core functionality, and service may be interrupted or unavailable due to issues with these third-party services, which are beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-foreground/80">
                THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE APP'S OPERATION OR THE INFORMATION, CONTENT, OR MATERIALS IT CONTAINS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-foreground/80">
                In no event shall BananaCam, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
              <p className="text-foreground/80">
                You agree to defend, indemnify, and hold harmless BananaCam from any claims, damages, obligations, losses, liabilities, costs, or expenses arising from your use of the App or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="text-foreground/80">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p className="text-foreground/80">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-foreground/80 mt-2">
                Email: maxfroehlich@gmx.net<br />
                Website: <a href="/support" className="text-primary hover:underline">Support Page</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

