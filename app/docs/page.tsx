import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const docCategories = [
  {
    emoji: "🚀",
    title: "Getting Started",
    description: "New to IPH Photobooth? Start here with installation and setup.",
    href: "/docs/guide/getting-started",
  },
  {
    emoji: "📸",
    title: "User Guide",
    description: "Learn how to use all features of the photobooth application.",
    href: "/docs/guide",
  },
  {
    emoji: "🛠️",
    title: "Troubleshooting",
    description: "Having issues? Find solutions to common problems.",
    href: "/docs/guide/troubleshooting",
  },
  {
    emoji: "💻",
    title: "Developer Docs",
    description: "API reference, project structure, and development setup.",
    href: "/docs/developer",
  },
];

const quickLinks = [
  { title: "Installation", href: "/docs/guide/getting-started" },
  { title: "Taking Photos", href: "/docs/guide/taking-photos" },
  { title: "Creating Collages", href: "/docs/guide/collages" },
  { title: "QR Code Sharing", href: "/docs/guide/sharing" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/" className="text-purple-600 hover:text-purple-700 text-sm">
              ← Back to home
            </Link>
          </nav>

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              IPH Photobooth Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your complete guide to setting up, using, and getting the most out of IPH Photobooth.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {docCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-4 block">{category.emoji}</span>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-700 hover:underline"
                >
                  <span className="text-purple-400">→</span>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
