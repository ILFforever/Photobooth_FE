import Image from "next/image";
import Link from "next/link";

export default function SigningInPage() {
  return (
    <div className="bg-white pt-24 pb-16">
      
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs" className="hover:text-purple-600 transition-colors">Docs</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs/guide" className="hover:text-purple-600 transition-colors">User Guide</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-900 font-medium">Signing In</span>
          </nav>

          <article>
            {/* Hero */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-red-50 via-orange-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 text-red-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-red-600 tracking-wide uppercase">Authentication</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Signing In</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Connect your Google account to enable photo sharing via QR codes. Guests can then scan and download their photos instantly from Google Drive.
              </p>
            </div>

            {/* Why sign in */}
            <div className="mb-10 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-medium text-blue-900">Why connect Google Drive?</span>
                  <span className="text-blue-800"> Signing in enables the <Link href="/docs/guide/sharing" className="underline hover:text-blue-900 font-medium">QR code sharing</Link> feature, allowing guests to instantly access and download their photos. No app required — just a quick scan with their phone camera.</span>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/signing-in/google-auth.png"
                alt="Google sign-in interface"
                width={1388}
                height={868}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">Connect your Google account from the Settings panel to enable photo sharing features.</p>
              </div>
            </div>

            {/* How it works */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">How Authentication Works</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-6">
                  The photobooth uses OAuth 2.0 to securely connect to your Google Account:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Click Sign In",
                      desc: "Click the 'Sign in' button in the top-right corner of the app",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>,
                      color: "text-red-600 bg-red-100"
                    },
                    {
                      step: "2",
                      title: "Google Sign-In",
                      desc: "A secure Google sign-in window opens in your default browser",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
                      color: "text-blue-600 bg-blue-100"
                    },
                    {
                      step: "3",
                      title: "Grant Permissions",
                      desc: "Review and authorize the requested permissions (Google Drive access)",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                      color: "text-green-600 bg-green-100"
                    },
                    {
                      step: "4",
                      title: "Connection Complete",
                      desc: "Your account is connected and ready to upload photos",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      color: "text-purple-600 bg-purple-100"
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${item.color} shrink-0`}>
                        {item.icon}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Continue modal screenshot */}
            <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/signing-in/continue-modal.png"
                alt="Google continue as user modal"
                width={1388}
                height={868}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">If you previously signed in and restart the app without signing out, you'll see this "Continue as" prompt. Click your account to restore the connection.</p>
              </div>
            </div>

            {/* Returning users note */}
            <div className="mb-14 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm">
                  <span className="font-medium text-amber-900">Returning Users:</span>
                  <span className="text-amber-800"> The app remembers your Google account between sessions. If you close and reopen the app without signing out, you'll see the "Continue as" modal instead of the full sign-in flow. Just click your account to reconnect instantly.</span>
                </div>
              </div>
            </div>

            {/* Permissions explained */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Understanding Permissions</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  When you sign in, Google will show what permissions the photobooth is requesting:
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      permission: "View and manage Google Drive files",
                      description: "Required to create folders and upload photos to your Drive",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
                    },
                  ].map((item) => (
                    <div key={item.permission} className="bg-white rounded-lg p-4 border border-gray-100 flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">{item.permission}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="text-sm">
                      <span className="font-medium text-green-900">Your data stays private:</span>
                      <span className="text-green-800"> The photobooth only accesses folders it creates. Your existing files remain private and untouched. You can revoke access anytime from your Google Account settings.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Connecting your account */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Connecting Your Account</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  To sign in and enable Google Drive sharing:
                </p>
                <ol className="space-y-4">
                  {[
                    { step: "1", title: "Click Sign In", desc: "Click the 'Sign in' button that appears in the top-right corner of the application" },
                    { step: "2", title: "Authenticate with Google", desc: "A browser window will open. Select your Google account or sign in with your credentials" },
                    { step: "3", title: "Grant Permissions", desc: "Review and authorize the requested permissions for Google Drive access" },
                    { step: "4", title: "Connection Complete", desc: "The app will show you're signed in. You can now upload photos and generate QR codes" },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-600 text-sm font-semibold shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-0.5">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Managing your connection */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Managing Your Connection</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Check Connection Status",
                      desc: "Your signed-in account email is displayed in the top-right corner when connected",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    },
                    {
                      title: "Sign Out",
                      desc: "Click the sign out button to disconnect your Google account from the app",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    },
                    {
                      title: "Switch Accounts",
                      desc: "Sign out and sign back in with a different Google account",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    },
                    {
                      title: "Revoke from Google",
                      desc: "Remove app access from your Google Account security settings anytime",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                    },
                  ].map((action) => (
                    <div key={action.title} className="bg-white rounded-lg p-4 border border-gray-100 flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 shrink-0">
                        {action.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">{action.title}</h4>
                        <p className="text-gray-600 text-sm">{action.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Troubleshooting</h2>
              <div className="space-y-3">
                {[
                  {
                    issue: "Browser doesn't open",
                    solution: "Check your default browser settings. Manually copy the authorization URL from the error message and paste it into your browser."
                  },
                  {
                    issue: "Connection fails",
                    solution: "Ensure you have an active internet connection. Try signing out of your Google account in the browser first, then reconnect."
                  },
                  {
                    issue: "Wrong permissions shown",
                    solution: "Decline the permission request and try again. Make sure you're connecting to the correct application."
                  },
                  {
                    issue: "Already connected but shows not connected",
                    solution: "Click 'Disconnect' and then reconnect. This can happen after app updates or if Google session expired."
                  },
                ].map((item) => (
                  <details key={item.issue} className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
                    <summary className="list-none cursor-pointer hover:bg-gray-50 rounded-xl transition-all [&::-webkit-details-marker]:hidden">
                      <div className="p-5 flex items-center justify-between">
                        <span className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </span>
                          <span className="font-medium text-gray-900">{item.issue}</span>
                        </span>
                        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-open:rotate-180 transition-transform">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    </summary>
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 mt-4">{item.solution}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Security note */}
            <section className="mb-14">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Security Best Practices
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Only connect on secure, trusted networks (avoid public WiFi when signing in)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Disconnect your account when not in use or after events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Regularly review connected apps in your Google Account settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Use two-factor authentication on your Google account for added security</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between">
              <Link
                href="/docs/guide/camera-connection"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Previous: Camera Connection
              </Link>
              <Link
                href="/docs/guide/collages"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Next: Collage Creator
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
