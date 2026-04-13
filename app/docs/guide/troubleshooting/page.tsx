"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "all" | "camera" | "software" | "image" | "sharing" | "display";

const categories: { key: Category; label: string; count: number }[] = [
  { key: "all", label: "All", count: 9 },
  { key: "camera", label: "Camera", count: 3 },
  { key: "software", label: "Software", count: 3 },
  { key: "image", label: "Image Quality", count: 2 },
  { key: "sharing", label: "Sharing", count: 1 },
  { key: "display", label: "Display", count: 1 },
];

interface Step {
  text: string;
  sub?: string;
}

interface Issue {
  id: string;
  title: string;
  symptom: string;
  category: Category;
  urgent: boolean;
  steps: Step[];
  note?: string;
  tip?: string;
}

const issues: Issue[] = [
  {
    id: "vm-red",
    title: "VM status LED is red",
    symptom: "The indicator in the app's top-left is red. Camera cannot be detected.",
    category: "software",
    urgent: true,
    steps: [
      { text: "Wait up to 20 seconds after launch — the VM boots on startup and may still be initializing." },
      { text: "Confirm VirtualBox is installed.", sub: "Check Add/Remove Programs. If missing, reinstall IPH Photobooth from the official installer — VirtualBox is bundled." },
      { text: "Open Task Manager (Ctrl+Shift+Esc) and look for VirtualBox processes. If none appear, the VM service isn't running." },
      { text: "Restart IPH Photobooth, then wait for the LED to turn green." },
      { text: "Restart your computer to clear any stuck VM processes." },
      { text: "Check that virtualization is enabled in BIOS.", sub: "Reboot → enter BIOS (Del or F2) → enable VT-x (Intel) or AMD-V → save and exit." },
      { text: "Ensure Hyper-V is disabled.", sub: "Hyper-V and VirtualBox cannot run simultaneously. Go to Windows Features → uncheck Hyper-V → reboot." },
      { text: "Verify at least 4 GB of free RAM is available. Close background applications if needed." },
      { text: "Check Event Viewer for errors.", sub: 'Search "Event Viewer" → Windows Logs → Application → find entries timestamped near the launch failure.' },
    ],
    note: "If you see a Hyper-V conflict, disabling it requires a reboot. Plan for this during setup, not during an event.",
  },
  {
    id: "camera-not-detected",
    title: "Camera not detected after connecting",
    symptom: "The app shows no camera. Status indicator stays empty after USB connection.",
    category: "camera",
    urgent: true,
    steps: [
      { text: "Confirm the VM LED is green first — a red LED blocks all camera detection." },
      { text: "Ensure the camera is powered on and has adequate battery, or is on AC power." },
      { text: "Set the camera to PTP / Tethered mode.", sub: "Fujifilm: MENU → NETWORK/USB SETTING → USB Tether Shooting Auto. Canon: MENU → Communication → PC Connect → Tethered. Sony: select Remote Shooting from the popup on the camera screen." },
      { text: "Connect directly to a USB port on the computer — not a hub, dock, or monitor." },
      { text: "Try a different USB port. Prefer blue (USB 3.0) ports." },
      { text: "Swap the cable. A damaged or uncertified cable is the most common cause." },
      { text: "Close any application holding the camera (Lightroom, EOS Utility, Capture One)." },
      { text: "Restart the camera while the USB cable is already connected." },
      { text: "Restart IPH Photobooth after the camera is in PTP mode." },
    ],
    tip: "When connected correctly, the camera briefly appears in File Explorer, then disappears. That disappearance is expected — IPH Photobooth has taken exclusive control.",
  },
  {
    id: "camera-disconnects",
    title: "Camera disconnects mid-session",
    symptom: "Camera was working, then dropped unexpectedly. Connection icon turns grey or red.",
    category: "camera",
    urgent: false,
    steps: [
      { text: "Use the original cable that shipped with your camera — it is certified for data transfer." },
      { text: "Plug directly into a motherboard USB port, not a hub, monitor, or keyboard." },
      { text: "Use AC power for the camera during events.", sub: "Use a dummy battery or USB-C PD adapter. Never rely on camera battery for a full event." },
      { text: "Disable USB selective suspend.", sub: "Control Panel → Power Options → Change plan settings → Change advanced power settings → USB settings → USB selective suspend → Disabled." },
      { text: "Disable USB device power saving.", sub: "Device Manager → Universal Serial Bus controllers → USB Root Hub → Properties → Power Management → uncheck 'Allow the computer to turn off this device to save power'." },
      { text: "Route the USB cable away from power cables and stage lighting (EMI interference)." },
      { text: "If on USB 3.0, try a USB 2.0 cable — some cameras are more stable over the older standard." },
    ],
    tip: "Use a cable anchor or gaffer tape to prevent physical tension on the USB connector. Subtle cable tension at a busy event is a silent cause of intermittent disconnections.",
  },
  {
    id: "app-crashes",
    title: "App won't launch or crashes on startup",
    symptom: "IPH Photobooth closes immediately, shows an error, or never finishes loading.",
    category: "software",
    urgent: true,
    steps: [
      { text: "Run as administrator.", sub: "Right-click the IPH Photobooth shortcut → Run as administrator. Some operations require elevated permissions." },
      { text: "Temporarily disable antivirus, then try launching.", sub: "If it launches, add IPH Photobooth to your AV exclusions. Antivirus blocking is a very common cause." },
      { text: "Confirm VirtualBox is installed via Add/Remove Programs." },
      { text: "Update GPU drivers from the manufacturer's site (NVIDIA, AMD, or Intel)." },
      { text: "Close background applications to free at least 4 GB of RAM." },
      { text: "Check Event Viewer for crash details.", sub: 'Search "Event Viewer" → Windows Logs → Application → find entries near the time of the crash.' },
      { text: "Reinstall IPH Photobooth if all steps above fail." },
    ],
    note: "If the error mentions VCRUNTIME or MSVCP, install the Microsoft Visual C++ Redistributable from Microsoft's site.",
  },
  {
    id: "photos-not-saving",
    title: "Photos not saving or missing after capture",
    symptom: "Capture appears to complete but no file appears. Gallery is empty or files go missing.",
    category: "software",
    urgent: true,
    steps: [
      { text: "Check available disk space — keep at least 2 GB free. High-res files are large." },
      { text: "Run IPH Photobooth as administrator to ensure write access to the save folder." },
      { text: "Check your antivirus activity log for blocked file write operations." },
      { text: "Confirm the save path in settings is a real, writable folder." },
      { text: "Check Event Viewer for disk or NTFS errors.", sub: "Event Viewer → Windows Logs → System → look near the time captures went missing." },
      { text: "If photos save but then disappear, check if a sync tool (OneDrive, Dropbox) is moving or deleting them." },
    ],
    note: "If the camera's memory card is full, the camera may refuse to fire even in tethered mode. Keep a formatted, mostly empty card in the camera.",
  },
  {
    id: "photos-dark-overexposed",
    title: "Photos are too dark or overexposed",
    symptom: "Images consistently come out underlit or blown out across multiple captures.",
    category: "image",
    urgent: false,
    steps: [
      { text: "Use the live preview in IPH Photobooth to assess exposure before guests arrive." },
      { text: "Switch the camera to Auto Exposure (P or Auto) as a starting point, then fine-tune." },
      { text: "Avoid pointing the camera directly at windows, LED walls, or stage lighting." },
      { text: "For consistently dark images: increase ISO, open aperture, or add light." },
      { text: "For consistently overexposed: reduce ISO, use aperture priority, or add an ND filter." },
      { text: "Check that studio lights are aimed at the subject, not the backdrop." },
      { text: "Use exposure compensation (±EV) on the camera body for fine adjustments." },
    ],
    tip: "Standard photobooth lighting: two softbox lights at 45° to the subject, 3–4 feet away, slightly above eye level. This minimises shadows and hot-spots across all subject heights.",
  },
  {
    id: "blurry-photos",
    title: "Photos are blurry or out of focus",
    symptom: "Images are soft, motion-blurred, or consistently out of focus.",
    category: "image",
    urgent: false,
    steps: [
      { text: "Clean the lens with a microfiber cloth. A smudged lens causes consistent softness." },
      { text: "Mount the camera on a tripod or rigid photobooth stand. Camera shake is the primary cause of blur." },
      { text: "Set shutter speed to at least 1/100s to freeze motion. Go faster for energetic guests." },
      { text: "Add more light to allow a faster shutter speed without raising ISO noise." },
      { text: "Use continuous autofocus (AF-C) and confirm the focus point covers the subject area." },
      { text: "Pre-focus on a stand-in at the subject position and lock focus if the camera drifts." },
      { text: "Display a clear countdown on the guest screen and ask subjects to hold still." },
    ],
  },
  {
    id: "qr-not-working",
    title: "QR code won't scan or sharing fails",
    symptom: "Guests can't scan the QR code. Sharing link errors or doesn't load on guest phones.",
    category: "sharing",
    urgent: false,
    steps: [
      { text: "Confirm the photobooth computer has internet access — open a browser and test." },
      { text: "Confirm the guest's phone has WiFi or mobile data — not on airplane mode." },
      { text: "Ensure the QR code is fully visible on screen with no cropping at the edges." },
      { text: "Increase screen brightness — bright venue lighting can wash out the display." },
      { text: "If scanning fails, guests can manually type the URL shown below the QR code." },
      { text: "Try a different QR scanner app — some phone cameras are more reliable than others." },
      { text: "For restricted venue WiFi (hotel, convention center), confirm outbound HTTPS is allowed." },
    ],
    tip: "Some venues block guest WiFi from reaching external URLs. Set up a personal hotspot as a sharing fallback, or use cellular data on the photobooth computer for uploads.",
  },
  {
    id: "guest-display",
    title: "Guest display not showing content",
    symptom: "Second monitor shows nothing, duplicates the main screen, or stays black after launch.",
    category: "display",
    urgent: false,
    steps: [
      { text: "Set display mode to Extend.", sub: "Press Win+P → select Extend. Do not use Duplicate or Second screen only." },
      { text: 'Confirm Windows shows "Extend these displays" in Settings → System → Display.' },
      { text: "Check that the HDMI or DisplayPort cable is firmly connected at both ends." },
      { text: "Restart IPH Photobooth after connecting and configuring the display." },
      { text: "Try a different cable or GPU output port." },
      { text: "If the display is on the wrong screen, open Windows Display Settings and drag the screen thumbnails to match the physical layout." },
      { text: "Update GPU drivers if the display still isn't recognised." },
    ],
    tip: "Connect and configure the guest display before launching IPH Photobooth. The app reads display configuration on startup — changes made after launch may not take effect without a restart.",
  },
];

export default function TroubleshootingPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = activeCategory === "all"
    ? issues
    : issues.filter((i) => i.category === activeCategory);

  const urgent = filtered.filter((i) => i.urgent);
  const standard = filtered.filter((i) => !i.urgent);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const IssueRow = ({ issue }: { issue: Issue }) => {
    const isOpen = openId === issue.id;
    return (
      <div className={`border-b border-gray-100 last:border-0 ${isOpen ? "bg-gray-50/50" : ""}`}>
        <button
          onClick={() => toggle(issue.id)}
          className="w-full text-left px-0 py-5 flex items-start justify-between gap-4 group"
        >
          <div className="flex items-start gap-3 min-w-0">
            {issue.urgent && (
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-red-500" />
            )}
            {!issue.urgent && (
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300" />
            )}
            <div className="min-w-0">
              <p className="font-medium text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                {issue.title}
              </p>
              {!isOpen && (
                <p className="text-sm text-gray-500 mt-0.5 leading-snug">{issue.symptom}</p>
              )}
            </div>
          </div>
          <svg
            className={`w-4 h-4 text-gray-400 shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="pb-8 pl-5">
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{issue.symptom}</p>

            <ol className="space-y-4">
              {issue.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-xs font-semibold text-gray-400 tabular-nums pt-0.5 w-4 shrink-0 text-right">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-900 leading-relaxed">{step.text}</p>
                    {step.sub && (
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.sub}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {issue.note && (
              <div className="mt-6 pl-8 flex gap-3">
                <div className="shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                </div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Note — </strong>{issue.note}
                </p>
              </div>
            )}

            {issue.tip && (
              <div className="mt-4 pl-8 flex gap-3">
                <div className="shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636 6.364l.707-.707M12 21v-1M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <p className="text-sm text-purple-900 leading-relaxed">
                  <strong>Pro tip — </strong>{issue.tip}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/docs" className="hover:text-gray-600 transition-colors">Docs</Link>
          <span>/</span>
          <Link href="/docs/guide" className="hover:text-gray-600 transition-colors">User Guide</Link>
          <span>/</span>
          <span className="text-gray-900">Troubleshooting</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Troubleshooting</h1>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            Ordered diagnostic steps for the issues photographers encounter most often. Start with Critical issues first.
          </p>
        </div>

        {/* Pre-event callout */}
        <div className="mb-10 flex gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Run a full test before every event</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Test the complete capture-to-share flow at least 30 minutes before guests arrive. Confirm camera detection, exposure, guest display, and QR sharing end-to-end.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                activeCategory === cat.key
                  ? "bg-gray-900 text-white font-medium"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Issues */}
        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm py-12 text-center">No issues in this category.</p>
        )}

        {urgent.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-semibold text-red-600 tracking-widest uppercase">Critical</span>
              <div className="flex-1 h-px bg-red-100" />
            </div>
            <p className="text-xs text-gray-400 mb-4">These issues prevent the app from functioning. Resolve before investigating others.</p>
            <div className="border border-gray-200 rounded-xl divide-y divide-gray-100 px-6">
              {urgent.map((issue) => (
                <IssueRow key={issue.id} issue={issue} />
              ))}
            </div>
          </section>
        )}

        {standard.length > 0 && (
          <section className="mb-10">
            {urgent.length > 0 && (
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Other Issues</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
            )}
            <div className="border border-gray-200 rounded-xl divide-y divide-gray-100 px-6">
              {standard.map((issue) => (
                <IssueRow key={issue.id} issue={issue} />
              ))}
            </div>
          </section>
        )}

        {/* Update note */}
        <div className="mb-10 flex gap-3 text-sm text-gray-500">
          <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>
            IPH Photobooth checks for updates on startup. Keeping the app updated resolves many known issues.{" "}
            <Link href="/docs/guide/updating" className="text-purple-600 hover:underline">
              Update guide →
            </Link>
          </span>
        </div>

        {/* Still need help */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-sm font-semibold text-gray-900 mb-1">Still need help?</p>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            If the issue persists after following all relevant steps, email support with a description, the steps you&apos;ve already tried, and a screenshot or video if possible.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:support@intania.com"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
            <Link
              href="/docs/guide"
              className="inline-flex items-center gap-2 text-gray-600 px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
            >
              Back to User Guide
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
