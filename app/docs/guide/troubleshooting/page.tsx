import Link from "next/link";

type Severity = "common" | "moderate" | "severe";

const troubleshootingItems: { title: string; severity: Severity; icon: string; items: string[] }[] = [
  {
    title: "Camera not detected",
    severity: "common",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0118.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
    items: [
      "Ensure your camera is powered on and has battery",
      "Check the USB cable is properly connected at both ends",
      "Try a different USB port on your computer",
      "Replace the USB cable with a known-good one",
      "Set camera to PTP mode in camera settings (usually under USB settings)",
      "Restart both the camera and the IPH Photobooth application",
      "Test the camera on another computer to rule out hardware issues",
    ],
  },
  {
    title: "App won't start or crashes on launch",
    severity: "common",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    items: [
      'Check Windows Event Viewer for crash logs (search for "Event Viewer" in Start)',
      "Ensure VirtualBox is running (bundled with installer)",
      "Try running as administrator: Right-click → Run as administrator",
      "Check if antivirus is blocking the application",
      "Verify your GPU drivers are up to date",
      "Make sure you have at least 4GB of free RAM",
    ],
  },
  {
    title: "Photos appear dark or overexposed",
    severity: "moderate",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    items: [
      "Check camera exposure settings — use auto-exposure mode initially",
      "Ensure adequate lighting in your photobooth area",
      "Aide pointing the camera directly at bright lights or windows",
      "Use the live preview to adjust lighting before taking photos",
      "Some cameras allow exposure compensation through the camera itself",
    ],
  },
  {
    title: "QR code not working for guests",
    severity: "moderate",
    icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
    items: [
      "Ensure the guest's phone camera or QR scanner app is active",
      "Check that both the photobooth and guest device have internet connection",
      "Make sure the QR code is fully visible on screen",
      "Try increasing the display brightness if in a bright environment",
      "Guests can also manually type the URL shown below the QR code",
    ],
  },
  {
    title: "Guest display not showing photos",
    severity: "moderate",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    items: [
      "Ensure the secondary display is properly connected via HDMI/DisplayPort",
      "Check Windows display settings: Win+P → Extend",
      'Verify the display is set to "Extend these displays" not "Duplicate"',
      "Restart the application after connecting the display",
      "Try disconnecting and reconnecting the display cable",
    ],
  },
  {
    title: "Photos not saving or missing",
    severity: "severe",
    icon: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4",
    items: [
      "Check available disk space on your computer",
      "Verify write permissions on the installation folder",
      "Check if antivirus is blocking file writes",
      "Look in Windows Event Viewer for disk-related errors",
      "Ensure the virtual machine has adequate storage allocated",
    ],
  },
  {
    title: "Poor photo quality or blurry images",
    severity: "moderate",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    items: [
      "Clean the camera lens with a proper lens cleaning cloth",
      "Ensure adequate lighting — low light causes longer exposure times",
      "Use a tripod if available to prevent camera shake",
      "Ask subjects to remain still during countdown",
      "Check camera focus settings — use auto-focus for best results",
    ],
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

const severityIconColors = {
  common: "bg-blue-100 text-blue-500",
  moderate: "bg-yellow-100 text-yellow-600",
  severe: "bg-red-100 text-red-500",
};

const severityChevronColors = {
  common: "bg-blue-100 text-blue-400",
  moderate: "bg-yellow-100 text-yellow-500",
  severe: "bg-red-100 text-red-400",
};

const severityHoverColors = {
  common: "hover:bg-blue-100/50",
  moderate: "hover:bg-yellow-100/50",
  severe: "hover:bg-red-100/50",
};

const severityBulletColors = {
  common: "text-blue-500",
  moderate: "text-yellow-500",
  severe: "text-red-500",
};

export default function TroubleshootingPage() {
  return (
    <div className="bg-white pt-24 pb-16">

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
            <div className="space-y-3 mb-8">
              {troubleshootingItems.map((item) => (
                <details key={item.title} className={`group rounded-xl border ${severityColors[item.severity]}`}>
                  <summary className={`list-none cursor-pointer rounded-xl ${severityHoverColors[item.severity]} transition-all [&::-webkit-details-marker]:hidden`}>
                    <div className="p-5 flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${severityIconColors[item.severity]}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900">{item.title}</span>
                          <span className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${severityBadgeColors[item.severity]}`}>
                            {severityLabels[item.severity]}
                          </span>
                        </div>
                      </span>
                      <span className={`w-8 h-8 rounded-full ${severityChevronColors[item.severity]} flex items-center justify-center group-open:rotate-180 transition-transform`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 border-t border-gray-200/50">
                    <ul className="mt-4 space-y-2.5">
                      {item.items.map((text, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className={`mt-0.5 shrink-0 ${severityBulletColors[item.severity]}`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>

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

    </div>
  );
}
