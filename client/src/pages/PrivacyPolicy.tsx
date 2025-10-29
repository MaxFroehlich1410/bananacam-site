import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-sm text-foreground/60 mb-8">Last updated: October 29, 2025</p>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-foreground/80">
                BananaCam respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use the BananaCam mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Process</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">2.1 Photos You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>When you capture a photo in BananaCam or import one from your library, the image stays on your device.</li>
                <li>If you choose to apply an AI style, the app compresses the image and transmits it—together with the style prompt—to our AI processor (AIProxy/Replicate) so the transformation can run on Replicate's infrastructure using Google's Nano Banana model.</li>
                <li>Once processing finishes, the transformed image returns to your device. The app optionally saves that result to your photo library with a BananaCam watermark.</li>
                <li>BananaCam does not keep a server-side copy of your photos.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">2.2 Local Preferences and Usage Counters</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>The toggle showing whether you allowed cloud processing and the number of free/paid transformations you have used are stored on your device using Apple's UserDefaults and Keychain.</li>
                <li>This data never leaves your device except through Apple's standard encrypted backup mechanisms.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">2.3 Purchases and Subscriptions</h3>
              <p className="text-foreground/80">
                BananaCam relies on RevenueCat to manage in-app purchases. StoreKit receipts and related subscription information are handled directly by RevenueCat and Apple; BananaCam does not receive your billing details.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">2.4 What We Do NOT Collect</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>We do not log device identifiers, operating system information, analytics, feature usage, or behavioral tracking data.</li>
                <li>We do not collect location data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>To forward your selected photo and style prompt to AIProxy/Replicate for transformation.</li>
                <li>To deliver the transformed photo back to you and optionally save it to your library.</li>
                <li>To remember whether you approved cloud processing and to enforce transformation limits tied to your subscription tier.</li>
                <li>To facilitate purchase validation through RevenueCat.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Retention</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Photos:</strong> BananaCam keeps every photo on your device. When you request an AI transformation, the image exists on Replicate's systems only long enough to complete processing. For details, refer to Replicate's retention policy (<a href="https://replicate.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://replicate.com/privacy</a>).</li>
                <li><strong>Local Data:</strong> Preferences and usage counters persist on your device until you uninstall the app, reset settings, or clear them.</li>
                <li>We do not maintain BananaCam-operated servers that store personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">5.1 AIProxy/Replicate</h3>
              <p className="text-foreground/80">
                We use AIProxy/Replicate (<a href="https://replicate.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://replicate.com</a>) to run Google's Nano Banana model. They act as our processor for AI rendering and receive only the data needed to perform your requested transformation.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">5.2 Google Nano Banana Model</h3>
              <p className="text-foreground/80">
                The model is hosted in Google Cloud as part of the Replicate workflow. Google handles the compute infrastructure for the transformation; any temporary storage follows Google and Replicate policies.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">5.3 RevenueCat</h3>
              <p className="text-foreground/80">
                RevenueCat (<a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.revenuecat.com/privacy</a>) manages in-app purchases and subscriptions. They process transactional data required by Apple's App Store but do not share personal billing details with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-foreground/80">
                We rely on HTTPS for all network communication and use Apple's UserDefaults/Keychain to store local settings securely. Remember that no method of transmission or storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-foreground/80">
                Depending on your location, you may have the right to request access to or deletion of data stored on your device, opt out of cloud processing by disabling the in-app toggle, or make other privacy inquiries. Contact us and we will help you exercise applicable rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="text-foreground/80">
                BananaCam is not intended for children under 13, and we do not knowingly collect information from them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-foreground/80">
                We may update this policy from time to time. We will post revisions in the app and update the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-foreground/80">
                Email: <a href="mailto:maxfroehlich@gmx.net" className="text-primary hover:underline">maxfroehlich@gmx.net</a><br />
                Support: <a href="https://bananacam.site/support" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://bananacam.site/support</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

