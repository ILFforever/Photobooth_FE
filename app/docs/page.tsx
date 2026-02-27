import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/" className="text-purple-600 hover:text-purple-700 text-sm">
              ← Back to home
            </Link>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
          <p className="text-lg text-gray-600 mb-12">
            Everything you need to know about IPH Photobooth.
          </p>

          {/* Getting Started */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Getting Started
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Download the MSI installer from the <Link href="/#download" className="text-purple-600 hover:underline">download page</Link></li>
                <li>Double-click the installer to begin installation</li>
                <li>Follow the installation wizard prompts</li>
                <li>Launch IPH Photobooth from your Start menu</li>
                <li>Connect your camera via USB (PTP compatible)</li>
                <li>The app will auto-detect your camera and you're ready to go!</li>
              </ol>
            </div>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Installation
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-3">System Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Windows 10 or 11 (64-bit)</li>
                <li>8 GB RAM recommended (4 GB minimum)</li>
                <li>250 MB storage for application</li>
                <li>PTP-compatible USB camera (Fujifilm, Canon)</li>
              </ul>

              <h3 className="font-medium text-gray-900 mb-3">VirtualBox (Included)</h3>
              <p className="text-gray-700">
                The application runs inside a VirtualBox VM for reliable, isolated operation.
                VirtualBox is bundled with the installer — no separate download needed.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Features
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Live Preview",
                  description: "See real-time preview from your camera before taking photos."
                },
                {
                  title: "Photo Collages",
                  description: "Create 2x2 photo collages with customizable layouts."
                },
                {
                  title: "QR Code Sharing",
                  description: "Guests can scan QR codes to download photos to their devices."
                },
                {
                  title: "Guest Display",
                  description: "Connect a secondary display for guests to view photos."
                },
                {
                  title: "Full Screen Mode",
                  description: "Press F11 to toggle full screen mode for the full experience."
                },
                {
                  title: "Auto-Update",
                  description: "The app automatically checks for updates on startup."
                },
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Troubleshooting
            </h2>
            <div className="space-y-4">
              <details className="bg-gray-50 rounded-xl border border-gray-200">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-100">
                  Camera not detected
                </summary>
                <div className="px-6 pb-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ensure your camera is connected via USB</li>
                    <li>Try a different USB port</li>
                    <li>Make sure your camera is in PTP mode (check camera settings)</li>
                    <li>Restart the application</li>
                  </ul>
                </div>
              </details>
              <details className="bg-gray-50 rounded-xl border border-gray-200">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-100">
                  App won't start
                </summary>
                <div className="px-6 pb-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Check Windows Event Viewer for error logs</li>
                    <li>Ensure VirtualBox is running correctly (bundled with the installer)</li>
                    <li>Try running as administrator</li>
                    <li>Verify your antivirus isn't blocking the application</li>
                  </ul>
                </div>
              </details>
              <details className="bg-gray-50 rounded-xl border border-gray-200">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-100">
                  How do I update?
                </summary>
                <div className="px-6 pb-4 text-gray-700">
                  <p>The app automatically checks for updates on startup. You can also manually
                  check by visiting the <Link href="/#download" className="text-purple-600 hover:underline">download page</Link> to see the latest version.</p>
                </div>
              </details>
            </div>
          </section>

          {/* API */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              API
            </h2>
            <p className="text-gray-600 mb-4">
              Check for updates programmatically using our version API.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{`GET /api/version

Response:
{
  "version": "1.0.12",
  "name": "Photobooth IPH",
  "short_name": "IPH Photobooth",
  "company": "Intania Production House",
  "has_download": true,
  "release_date": "2025-02-25",
  "release_notes": [...]
}`}</code>
              </pre>
            </div>
          </section>

          {/* Coming Soon */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Coming Soon
              </h2>
              <p className="text-gray-700 mb-4">
                We're working on expanding this documentation with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Architecture diagrams</li>
                <li>Source code documentation</li>
                <li>Developer setup guide</li>
                <li>Plugin system documentation</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
