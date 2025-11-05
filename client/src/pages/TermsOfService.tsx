import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-sm text-foreground/60 mb-8">Last updated: November 5, 2025</p>
          
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
              <h2 className="text-2xl font-semibold mb-4">3. Subscriptions</h2>
              <p className="text-foreground/80">
                BananaCam offers optional auto-renewing subscriptions that unlock additional transformation credits and premium functionality. By purchasing a subscription, you agree to the terms in this section in addition to the rest of these Terms of Service.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.1 Available Plans</h3>
              <p className="text-foreground/80 mb-4">
                We currently offer six auto-renewable subscription options. Listed prices reflect the United States App Store in USD; Apple will display and charge the equivalent amount in your local currency, which may vary because of exchange rates, taxes, or regional pricing adjustments.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>BananaCam Lite Monthly</strong> – 1 month for $1.99 USD per month.</li>
                <li><strong>BananaCam Standard Monthly</strong> – 1 month for $5.99 USD per month.</li>
                <li><strong>BananaCam Pro Monthly</strong> – 1 month for $9.99 USD per month.</li>
                <li><strong>BananaCam Lite Annual</strong> – 1 year for $19.99 USD per year.</li>
                <li><strong>BananaCam Standard Annual</strong> – 1 year for $49.99 USD per year.</li>
                <li><strong>BananaCam Pro Annual</strong> – 1 year for $99.99 USD per year.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.2 Auto-Renewal & Billing</h3>
              <p className="text-foreground/80">
                Subscriptions renew automatically unless auto-renew is turned off at least 24 hours before the end of the current period. Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period at the price shown in the app at the time of renewal. After purchase, the current subscription period cannot be cancelled and you retain access to premium features until the period ends.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.3 Managing or Cancelling Your Subscription</h3>
              <p className="text-foreground/80">
                You can manage your subscription, view renewal dates, or turn off auto-renew at any time by opening the Settings app on your iOS or iPadOS device, tapping your Apple ID at the top, selecting <em>Subscriptions</em>, and choosing BananaCam. You can also open the App Store, tap your profile icon, go to <em>Subscriptions</em>, and make changes there. Turning off auto-renew takes effect after the current billing period concludes.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.4 Free Access & Trials</h3>
              <p className="text-foreground/80">
                Every new BananaCam account can process three photos for free before the paywall appears. This complimentary usage does not convert into an auto-renewing subscription and expires once the three transformations are redeemed. At this time we do not offer a time-limited free trial for subscriptions; if we introduce one, the duration and eligibility will be clearly disclosed in the app. Any unused portion of a future trial, if offered, would be forfeited upon purchasing a subscription.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.5 Billing, Refunds, and Taxes</h3>
              <p className="text-foreground/80">
                Payment is charged to your Apple ID account at the time of purchase confirmation. Apple handles billing, taxation, and refund requests for BananaCam subscriptions. All refund requests must be submitted through Apple Support; BananaCam cannot issue refunds for purchases made via the App Store. Depending on your region, applicable taxes may be added to the displayed price by Apple.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">3.6 Privacy</h3>
              <p className="text-foreground/80">
                Subscription management and transaction data are processed through Apple and our in-app purchase provider. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> to learn how we handle personal data in connection with your subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">4.1 Photo Transformations</h3>
              <p className="text-foreground/80">
                When you upload photos to BananaCam, you retain ownership of your original images. By using our AI transformation services, you grant us a license to process and transform your images to provide the requested service. This includes transmitting your photos to our third-party service providers (Replicate API) which uses Google's Nano Banana Model to perform the AI transformations.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">4.2 Third-Party Processing</h3>
              <p className="text-foreground/80">
                You acknowledge and agree that your photos will be processed by third-party services (Replicate API and Google's Nano Banana Model) to provide the transformation functionality. By using BananaCam, you consent to the transmission and processing of your images by these third-party services in accordance with their respective privacy policies and terms of service.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">4.3 Prohibited Content</h3>
              <p className="text-foreground/80">
                You agree not to upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable. We reserve the right to refuse service to anyone who violates these terms. You are responsible for ensuring you have the right to upload and transform any images you submit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. AI-Generated Content Disclaimer</h2>
              <p className="text-foreground/80">
                BananaCam uses artificial intelligence (Google's Nano Banana Model via Replicate API) to transform your photos. The results are AI-generated and may not always produce perfect or expected results. We do not guarantee the accuracy, quality, or suitability of transformed images for any particular purpose. AI transformations are probabilistic in nature and results may vary.
              </p>
              <p className="text-foreground/80 mt-4">
                <strong>Third-Party AI Services:</strong> The AI transformations are performed by Google's Nano Banana Model, which is accessed through Replicate API. We do not control the AI model's behavior, output quality, or processing methods. Any issues, inaccuracies, or limitations in the transformations are subject to the capabilities and limitations of these third-party AI services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-foreground/80">
                The App and its original content, features, and functionality are owned by BananaCam and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Service Availability</h2>
              <p className="text-foreground/80">
                We reserve the right to withdraw or amend the App, and any service or material we provide, at any time without notice. We will not be liable if, for any reason, all or any part of the App is unavailable at any time or for any period. BananaCam depends on third-party services (Replicate API and Google's infrastructure) for its core functionality, and service may be interrupted or unavailable due to issues with these third-party services, which are beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-foreground/80">
                THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE APP'S OPERATION OR THE INFORMATION, CONTENT, OR MATERIALS IT CONTAINS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="text-foreground/80">
                In no event shall BananaCam, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p className="text-foreground/80">
                You agree to defend, indemnify, and hold harmless BananaCam from any claims, damages, obligations, losses, liabilities, costs, or expenses arising from your use of the App or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-foreground/80">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Apple Standard EULA</h2>
              <p className="text-foreground/80">
                If you access BananaCam through the Apple App Store, your use of the app is also governed by Apple’s Licensed Application End User License Agreement (“Apple Standard EULA”). Please review the Apple Standard EULA at <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>. In the event of a conflict between these Terms and the Apple Standard EULA, the Apple Standard EULA will apply to the extent required by Apple.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
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

