import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const guideSections = [
  {
    title: "Getting Started",
    description: "Set up your photobooth and start taking photos.",
    pages: [
      { title: "Installation & Setup", href: "/docs/guide/getting-started", description: "Download, install, and configure your photobooth." },
      { title: "Camera Connection", href: "/docs/guide/camera-connection", description: "Connect and configure your PTP-compatible camera." },
    ],
  },
  {
    title: "Using the Photobooth",
    description: "Learn how to use all the features.",
    pages: [
      { title: "Taking Photos", href: "/docs/guide/taking-photos", description: "Capture single photos with live preview." },
      { title: "Photo Collages", href: "/docs/guide/collages", description: "Create beautiful 2x2 photo collages." },
      { title: "QR Code Sharing", href: "/docs/guide/sharing", description: "Let guests download photos instantly." },
      { title: "Guest Display", href: "/docs/guide/guest-display", description: "Show photos on a secondary screen." },
      { title: "Full Screen Mode", href: "/docs/guide/full-screen", description: "Immersive full-screen experience." },
    ],
  },
  {
    title: "Help & Support",
    description: "Get help when you need it.",
    pages: [
      { title: "Updating Software", href: "/docs/guide/updating", description: "Keep your photobooth up to date with the latest features." },
      { title: "Troubleshooting", href: "/docs/guide/troubleshooting", description: "Solutions to common issues." },
      { title: "Keyboard Shortcuts", href: "/docs/guide/shortcuts", description: "Quick reference for all shortcuts." },
    ],
  },
];

export default function GuidePage() {
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
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/docs" className="text-purple-600 hover:text-purple-700 text-sm">
              Docs
            </Link>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">User Guide</h1>
          <p className="text-lg text-gray-600 mb-12">
            Master IPH Photobooth with our comprehensive guides.
          </p>

          {guideSections.map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <div className="space-y-3">
                {section.pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
