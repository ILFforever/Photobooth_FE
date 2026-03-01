import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const devSections = [
  {
    title: "Getting Started",
    description: "Set up your development environment.",
    pages: [
      { title: "Development Setup", href: "/docs/developer/setup", description: "Install dependencies and run the project locally." },
      { title: "Project Structure", href: "/docs/developer/structure", description: "Understand the codebase organization." },
    ],
  },
  {
    title: "API Reference",
    description: "Integration points and endpoints.",
    pages: [
      { title: "Version API", href: "/docs/developer/api-version", description: "GET /api/version - Check for updates." },
      { title: "Releases API", href: "/docs/developer/api-releases", description: "POST /api/releases - Upload new releases." },
    ],
  },
  {
    title: "Configuration",
    description: "Environment variables and settings.",
    pages: [
      { title: "Environment Variables", href: "/docs/developer/env-vars", description: "All available configuration options." },
      { title: "Authentication", href: "/docs/developer/auth", description: "How authentication works." },
    ],
  },
];

export default function DeveloperPage() {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Documentation</h1>
          <p className="text-lg text-gray-600 mb-12">
            Build on top of IPH Photobooth or contribute to the project.
          </p>

          {devSections.map((section) => (
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
