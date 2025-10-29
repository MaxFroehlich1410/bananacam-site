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

          <section id="account-billing" className="space-y-6 mb-16">
            <h2 className="text-3xl font-bold mb-8">Account & Billing</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">How to Restore Your Purchases</h3>
                
                <p className="text-foreground/80 mb-4">
                  If you've previously purchased a BananaCam subscription (Lite, Standard, or Pro) and need to restore it—for example, after reinstalling the app or switching devices—follow these steps:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Step 1: Open Settings</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                      <li>Launch the BananaCam app</li>
                      <li>Tap the gear icon (⚙️) in the top-right corner of the main screen</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Step 2: Restore Your Purchases</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                      <li>Scroll to the "Purchases" section</li>
                      <li>Tap the "Restore Purchases" button</li>
                      <li>The app will verify your subscription with Apple using the Apple ID you used to purchase it</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Step 3: Wait for Confirmation</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                      <li>Your subscription status will be restored automatically if you're signed in with the same Apple ID that was used for the original purchase</li>
                      <li>Your subscription tier (Lite, Standard, or Pro) and remaining monthly credits will be restored</li>
                      <li>You should see your subscription active again within a few seconds</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Important Notes:</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                      <li>You must be signed in to the same Apple ID that was used to purchase your subscription</li>
                      <li>If you're switching to a new device, make sure you're logged into the same Apple ID on both devices</li>
                      <li>Restoring purchases only works for active subscriptions or subscriptions that have been purchased in the past (if they're still valid)</li>
                      <li>If you have an active subscription but it's not restoring, ensure you're using the same Apple ID account</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Troubleshooting:</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                      <li>If the restore fails, try signing out and back into your Apple ID in your device Settings</li>
                      <li>Make sure you have an active internet connection</li>
                      <li>If problems persist, contact us at <a href="mailto:maxfroehlich@gmx.net" className="text-primary hover:underline">maxfroehlich@gmx.net</a> and include the email address associated with your Apple ID account</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Alternative Method:</h4>
                    <p className="text-foreground/80">
                      You can also restore purchases from the paywall screen. When the paywall appears, look for a "Restore" button at the bottom of the paywall.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Need More Help?</h4>
                    <p className="text-foreground/80">
                      If you continue to experience issues restoring your subscription, please reach out to our support team at <a href="mailto:maxfroehlich@gmx.net" className="text-primary hover:underline">maxfroehlich@gmx.net</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                  BananaCam offers three free pictures. Afterwards you have 3 different subscription options to choose from.
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

