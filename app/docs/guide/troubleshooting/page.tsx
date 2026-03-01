import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

type Severity = "common" | "moderate" | "severe";

const troubleshootingItems: { title: string; severity: Severity; content: React.ReactNode }[] = [
  {
    title: "Camera not detected",
    severity: "common",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Ensure your camera is powered on and has battery</li>
        <li>Check the USB cable is properly connected at both ends</li>
        <li>Try a different USB port on your computer</li>
        <li>Replace the USB cable with a known-good one</li>
        <li>Set camera to PTP mode in camera settings (usually under USB settings)</li>
        <li>Restart both the camera and the IPH Photobooth application</li>
        <li>Test the camera on another computer to rule out hardware issues</li>
      </ul>
    ),
  },
  {
    title: "App won't start or crashes on launch",
    severity: "common",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Check Windows Event Viewer for crash logs (search for "Event Viewer" in Start)</li>
        <li>Ensure VirtualBox is running (bundled with installer)</li>
        <li>Try running as administrator: Right-click → Run as administrator</li>
        <li>Check if antivirus is blocking the application</li>
        <li>Verify your GPU drivers are up to date</li>
        <li>Make sure you have at least 4GB of free RAM</li>
      </ul>
    ),
  },
  {
    title: "Photos appear dark or overexposed",
    severity: "moderate",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Check camera exposure settings — use auto-exposure mode initially</li>
        <li>Ensure adequate lighting in your photobooth area</li>
        <li>Aide pointing the camera directly at bright lights or windows</li>
        <li>Use the live preview to adjust lighting before taking photos</li>
        <li>Some cameras allow exposure compensation through the camera itself</li>
      </ul>
    ),
  },
  {
    title: "QR code not working for guests",
    severity: "moderate",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Ensure the guest's phone camera or QR scanner app is active</li>
        <li>Check that both the photobooth and guest device have internet connection</li>
        <li>Make sure the QR code is fully visible on screen</li>
        <li>Try increasing the display brightness if in a bright environment</li>
        <li>Guests can also manually type the URL shown below the QR code</li>
      </ul>
    ),
  },
  {
    title: "Guest display not showing photos",
    severity: "moderate",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Ensure the secondary display is properly connected via HDMI/DisplayPort</li>
        <li>Check Windows display settings: Win+P → Extend</li>
        <li>Verify the display is set to "Extend these displays" not "Duplicate"</li>
        <li>Restart the application after connecting the display</li>
        <li>Try disconnecting and reconnecting the display cable</li>
      </ul>
    ),
  },
  {
    title: "Photos not saving or missing",
    severity: "severe",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Check available disk space on your computer</li>
        <li>Verify write permissions on the installation folder</li>
        <li>Check if antivirus is blocking file writes</li>
        <li>Look in Windows Event Viewer for disk-related errors</li>
        <li>Ensure the virtual machine has adequate storage allocated</li>
      </ul>
    ),
  },
  {
    title: "Poor photo quality or blurry images",
    severity: "moderate",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Clean the camera lens with a proper lens cleaning cloth</li>
        <li>Ensure adequate lighting — low light causes longer exposure times</li>
        <li>Use a tripod if available to prevent camera shake</li>
        <li>Ask subjects to remain still during countdown</li>
        <li>Check camera focus settings — use auto-focus for best results</li>
      </ul>
    ),
  },
];

const severityColors = {
  common: "bg-blue-50 border-blue-200",
  moderate: "bg-yellow-50 border-yellow-200",
  severe: "bg-red-50 border-red-200",
};

const severityLabels = {
  common: "Common Issue",
  moderate: "Moderate",
  severe: "Important",
};

const severityBadgeColors = {
  common: "bg-blue-200 text-blue-800",
  moderate: "bg-yellow-200 text-yellow-800",
  severe: "bg-red-200 text-red-800",
};

export default function TroubleshootingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs" className="hover:text-purple-600 transition-colors">
              Docs
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs/guide" className="hover:text-purple-600 transition-colors">
              User Guide
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-900 font-medium">Troubleshooting</span>
          </nav>

          <article>
            {/* Hero Header */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-purple-600 tracking-wide uppercase">Help & Support</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Troubleshooting</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Having issues? Find solutions to common problems here.
              </p>
            </div>

            {/* Quick filter by severity */}
            <div className="mb-8 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Filter by severity</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "all", label: "All Issues", color: "bg-gray-200 text-gray-700" },
                  { key: "severe", label: "Important", color: "bg-red-100 text-red-700 border border-red-200" },
                  { key: "moderate", label: "Moderate", color: "bg-yellow-100 text-yellow-700 border border-yellow-200" },
                  { key: "common", label: "Common", color: "bg-blue-100 text-blue-700 border border-blue-200" },
                ].map((filter) => (
                  <span key={filter.key} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${filter.color}`}>
                    {filter.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Troubleshooting Items */}
            {troubleshootingItems.map((item) => (
              <details key={item.title} className={`mb-3 group rounded-xl border ${severityColors[item.severity]}`}>
                <summary className="list-none cursor-pointer font-medium text-gray-900 hover:bg-opacity-80 rounded-xl transition-all [&::-webkit-details-marker]:hidden">
                  <div className="p-6 flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${severityBadgeColors[item.severity]}`}>
                        {severityLabels[item.severity]}
                      </span>
                      {item.title}
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-gray-200/50">
                  {item.content}
                </div>
              </details>
            ))}

            {/* Update Info - non-collapsible */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700">
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800 mr-2">Info</span>
                <strong>How to update the application:</strong> IPH Photobooth automatically checks for updates on startup.
                For detailed update instructions, visit our <Link href="/docs/guide/updating" className="text-purple-600 hover:underline">Updating Software guide</Link>.
              </p>
            </div>

            {/* Still need help */}
            <div className="mt-16 bg-purple-50 rounded-xl p-8 border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Still Need Help?</h2>
              <p className="text-gray-700 mb-6">
                If you&apos;re still experiencing issues after trying these solutions, we&apos;re here to help.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:support@intania.com"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </a>
                <Link
                  href="/docs/guide"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-5 py-2 rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Back to User Guide
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
