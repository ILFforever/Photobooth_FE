"use client";

import { useState, createContext, useContext } from "react";
import Link from "next/link";

type DocView = "user" | "developer";

const DocsContext = createContext<{
  view: DocView;
  setView: (view: DocView) => void;
}>({
  view: "user",
  setView: () => {},
});

export function DocsProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<DocView>("user");

  return (
    <DocsContext.Provider value={{ view, setView }}>
      {children}
    </DocsContext.Provider>
  );
}

export function DocsToggle() {
  const { view, setView } = useContext(DocsContext);

  return (
    <div className="inline-flex bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setView("user")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          view === "user"
            ? "bg-white text-purple-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        User
      </button>
      <button
        onClick={() => setView("developer")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          view === "developer"
            ? "bg-white text-purple-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Developer
      </button>
    </div>
  );
}

export function DocsContent() {
  const { view } = useContext(DocsContext);

  if (view === "user") {
    return (
      <>
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

        {/* User Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            User Guide
          </h2>
          <div className="space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">📷</span>
                Live Preview
              </h3>
              <p className="text-gray-700 mb-4">
                The live preview shows you exactly what your camera sees in real-time. Use this to frame your shots,
                check lighting, and ensure everyone is in the frame before capturing.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Tips for Best Results</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Ensure good lighting on your subjects</li>
                  <li>Position the camera at eye level or slightly above</li>
                  <li>Use the preview to check background clutter</li>
                  <li>Allow 2-3 seconds for guests to pose after pressing capture</li>
                </ul>
              </div>
            </div>

            {/* Taking Photos */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">📸</span>
                Taking Photos
              </h3>
              <p className="text-gray-700 mb-4">
                Capture single photos or create multi-photo collages with just one click.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">How to Capture</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Click the large capture button on screen, OR</li>
                    <li>Press <kbd className="bg-gray-200 px-2 py-1 rounded text-xs mx-1">Space</kbd> on your keyboard</li>
                    <li>A countdown will appear (3, 2, 1...) before the photo is taken</li>
                    <li>The photo will be displayed after capture</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Photo Settings</h4>
                  <p className="text-gray-600 text-sm">
                    Photos are automatically saved in high quality. The app uses your camera's optimal settings
                    to ensure clear, vibrant images every time.
                  </p>
                </div>
              </div>
            </div>

            {/* Creating Collages */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">🎨</span>
                Photo Collages
              </h3>
              <p className="text-gray-700 mb-4">
                Create beautiful 2x2 photo collages automatically. Perfect for capturing a sequence of fun moments!
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">How Collages Work</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                    <li>Take your first photo — it appears in the top-left corner</li>
                    <li>Take 3 more photos to fill all 4 slots</li>
                    <li>The collage is automatically assembled in a 2x2 grid</li>
                    <li>Guests can download the complete collage via QR code</li>
                  </ol>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Collage Layout</h4>
                  <div className="grid grid-cols-2 gap-2 max-w-[200px]">
                    <div className="aspect-square bg-purple-100 rounded flex items-center justify-center text-purple-600 text-xs">1</div>
                    <div className="aspect-square bg-purple-100 rounded flex items-center justify-center text-purple-600 text-xs">2</div>
                    <div className="aspect-square bg-purple-100 rounded flex items-center justify-center text-purple-600 text-xs">3</div>
                    <div className="aspect-square bg-purple-100 rounded flex items-center justify-center text-purple-600 text-xs">4</div>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">Photos fill in from top-left to bottom-right</p>
                </div>
              </div>
            </div>

            {/* QR Code Sharing */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">📱</span>
                QR Code Sharing
              </h3>
              <p className="text-gray-700 mb-4">
                Let guests download their photos instantly — no apps, no sign-ups, no hassle!
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">How Guests Download Photos</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                    <li>After a photo is taken, a QR code appears on screen</li>
                    <li>Guests open their phone camera or QR scanner app</li>
                    <li>Scan the code to open the download page</li>
                    <li>Tap download to save the photo to their device</li>
                  </ol>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">What Gets Shared</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Individual photos are available immediately after capture</li>
                    <li>Completed collages can be downloaded once all 4 photos are taken</li>
                    <li>Photos remain available for the duration of your event</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Guest Display */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">🖥️</span>
                Guest Display
              </h3>
              <p className="text-gray-700 mb-4">
                Create an immersive experience by showing photos on a separate screen for all guests to enjoy.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Setting Up Guest Display</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                    <li>Connect a secondary monitor, TV, or projector to your computer</li>
                    <li>Windows will detect the display automatically</li>
                    <li>The guest display shows the live preview and captured photos</li>
                    <li>Position the display where guests can easily see it</li>
                  </ol>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Best Practices</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Use a display at least 24" for best visibility</li>
                    <li>Position at eye level or slightly above</li>
                    <li>Ensure cables are secured to prevent accidents</li>
                    <li>Great for weddings, parties, and corporate events</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Full Screen Mode */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">⛶</span>
                Full Screen Mode
              </h3>
              <p className="text-gray-700 mb-4">
                Hide distractions and create an immersive photobooth experience.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Keyboard Controls</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <kbd className="bg-gray-200 px-3 py-1 rounded text-sm font-mono">F11</kbd>
                    <span className="text-gray-700 text-sm">Enter/exit full screen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <kbd className="bg-gray-200 px-3 py-1 rounded text-sm font-mono">Esc</kbd>
                    <span className="text-gray-700 text-sm">Exit full screen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <kbd className="bg-gray-200 px-3 py-1 rounded text-sm font-mono">Space</kbd>
                    <span className="text-gray-700 text-sm">Take photo</span>
                  </div>
                </div>
              </div>
            </div>
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
      </>
    );
  }

  // Developer documentation
  return (
    <>
      {/* Project Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Project Structure
        </h2>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <pre className="text-sm text-gray-800 overflow-x-auto">{`Photobooth_FE/
├── app/              # Next.js App Router
│   ├── (auth)/      # Authenticated routes
│   ├── admin/       # Admin panel
│   ├── docs/        # Documentation
│   └── page.tsx     # Home page
├── components/      # Reusable components
├── lib/            # Utilities & API clients
│   ├── api.ts      # API functions
│   └── auth.ts     # Authentication
└── public/         # Static assets`}</pre>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          API Reference
        </h2>

        {/* Version API */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">GET /api/version</h3>
          <p className="text-gray-600 mb-3">Retrieve the latest application version and release information.</p>
          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">{`{
  "version": "1.0.12",
  "name": "Photobooth IPH",
  "short_name": "IPH Photobooth",
  "company": "Intania Production House",
  "has_download": true,
  "release_date": "2025-02-25",
  "release_notes": [
    "Added new collage layouts",
    "Improved camera detection",
    "Bug fixes and performance improvements"
  ]
}`}</pre>
          </div>
        </div>

        {/* Upload Release API */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">POST /api/releases</h3>
          <p className="text-gray-600 mb-3">Upload a new release (requires authentication).</p>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-3">
            <p className="text-sm text-gray-600"><strong>Headers:</strong></p>
            <code className="text-sm text-purple-600">Authorization: Bearer {`{token}`}</code>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-3">
            <p className="text-sm text-gray-600"><strong>Body (FormData):</strong></p>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
              <li><code>file</code>: The MSI or VM file</li>
              <li><code>type</code>: "msi" or "vm"</li>
              <li><code>version</code>: Version string (e.g., "1.0.12")</li>
              <li><code>release_notes</code>: JSON array of release notes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Environment Variables */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Environment Variables
        </h2>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="space-y-4">
            <div>
              <code className="text-purple-600 text-sm">NEXT_PUBLIC_BACKEND_URL</code>
              <p className="text-gray-600 text-sm mt-1">Backend API URL for uploads and API calls</p>
            </div>
            <div>
              <code className="text-purple-600 text-sm">NEXT_PUBLIC_ADMIN_PASSWORD</code>
              <p className="text-gray-600 text-sm mt-1">Password for admin panel access</p>
            </div>
            <div>
              <code className="text-purple-600 text-sm">NEXT_PUBLIC_GITHUB_REPO</code>
              <p className="text-gray-600 text-sm mt-1">GitHub repository for releases (format: owner/repo)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Development Setup
        </h2>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Clone the repository</li>
            <li>Install dependencies: <code className="bg-gray-200 px-2 py-1 rounded text-sm">npm install</code></li>
            <li>Copy environment variables: <code className="bg-gray-200 px-2 py-1 rounded text-sm">cp .env.example .env.local</code></li>
            <li>Run development server: <code className="bg-gray-200 px-2 py-1 rounded text-sm">npm run dev</code></li>
            <li>Open <a href="http://localhost:3000" className="text-purple-600 hover:underline">http://localhost:3000</a></li>
          </ol>
        </div>
      </section>

      {/* Authentication */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Authentication
        </h2>
        <p className="text-gray-600 mb-4">
          Admin routes use a simple password-based authentication system. The token is stored
          in localStorage after successful login.
        </p>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">Protected Routes</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><code>/admin</code> - Admin dashboard</li>
            <li><code>/admin/upload</code> - Release upload page</li>
          </ul>
        </div>
      </section>
    </>
  );
}
