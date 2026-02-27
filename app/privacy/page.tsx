import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - IPH Photobooth",
  description: "Privacy Policy for IPH Photobooth software by Intania Production House.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-12"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: February 28, 2026</p>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Introduction</h2>
            <p>
              Intania Production House (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the IPH Photobooth
              application. This Privacy Policy explains our practices regarding the collection, use,
              and disclosure of information when you use our software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">No Data Collection</h2>
            <p>
              IPH Photobooth does <strong className="text-white">not</strong> collect, store, transmit,
              or process any personal data or usage information. Specifically, we do not collect:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Personal identification information (name, email, phone number, etc.)</li>
              <li>Device or hardware information</li>
              <li>Usage or analytics data</li>
              <li>Location data</li>
              <li>Cookies or tracking technologies</li>
              <li>Photos or media created using the application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Local Processing Only</h2>
            <p>
              All photos, collages, and media generated through IPH Photobooth are processed and
              stored entirely on your local device. No data is transmitted to our servers or any
              third-party services. You retain full ownership and control of all content created
              with the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
            <p>
              IPH Photobooth does not integrate with or send data to any third-party analytics,
              advertising, or tracking services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Children&apos;s Privacy</h2>
            <p>
              Since we do not collect any data, our application does not knowingly or unknowingly
              collect information from children under the age of 13 or any other age group.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on
              this page with an updated revision date. We encourage you to review this page
              periodically for the latest information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:hammymukura@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                hammymukura@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Intania Production House. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
