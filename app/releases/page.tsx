"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiTimerSandComplete } from "@mdi/js";

interface VersionInfo {
  version: string | null;
  vm_version: string | null;
  has_download: boolean;
  name: string;
  short_name: string;
  company: string;
  release_notes?: string[];
  file_size?: number;
}

interface ChangelogEntry {
  version: string;
  release_notes: string[];
  created_at: string;
}

type ChangelogType = "msi" | "vm";

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

export default function ReleasesPage() {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);
  const [msiChangelog, setMsiChangelog] = useState<ChangelogEntry[]>([]);
  const [vmChangelog, setVmChangelog] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedVersion, setExpandedVersion] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ChangelogType>("msi");

  useEffect(() => {
    Promise.all([
      fetch("/api/version").then((res) => res.json()),
      fetch("/api/versions/changelog?type=msi").then((res) => res.json()),
      fetch("/api/versions/changelog?type=vm").then((res) => res.json()),
    ])
      .then(([versionData, msiData, vmData]) => {
        setVersionInfo(versionData);
        const previousMsi = (msiData.changelog || []).filter(
          (entry: ChangelogEntry) => entry.version !== versionData.version
        );
        const previousVm = (vmData.changelog || []).filter(
          (entry: ChangelogEntry) => entry.version !== versionData.vm_version
        );
        setMsiChangelog(previousMsi);
        setVmChangelog(previousVm);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const activeChangelog = activeTab === "msi" ? msiChangelog : vmChangelog;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <svg className="w-10 h-10 text-purple-600 animate-spin mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="text-gray-500 font-medium">Loading releases...</p>
          </div>
        ) : (
        <>
        {/* Latest Release Hero */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-20" />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {versionInfo?.version ? "Latest Release" : "Coming Soon"}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">IPH Photobooth</h1>
                <p className="text-lg text-gray-600">Professional Photo Booth Software for Events</p>
                {versionInfo?.version && (
                  <p className="text-sm text-gray-500 mt-1">Version {versionInfo.version}</p>
                )}
              </div>
              <div className="flex flex-col items-center gap-2">
                {versionInfo?.has_download ? (
                  <a
                    href="/api/download?type=msi"
                    download
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/25"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-400 text-white font-semibold rounded-xl cursor-not-allowed">
                    <Icon path={mdiTimerSandComplete} size={0.85} />
                    Coming Soon
                  </div>
                )}
                {versionInfo?.file_size && (
                  <p className="text-xs text-gray-400">Size: {formatBytes(versionInfo.file_size)}</p>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Release Notes</h2>
              {versionInfo?.has_download ? (
                versionInfo.release_notes && versionInfo.release_notes.length > 0 ? (
                  <ul className="space-y-2 text-gray-600">
                    {versionInfo.release_notes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span>{note.trim().replace(/^[-•]\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No release notes available for this version.</p>
                )
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                  <div className="text-amber-600 flex-shrink-0">
                    <Icon path={mdiTimerSandComplete} size={1} />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Releases coming soon</p>
                    <p className="text-sm text-amber-700">Releases will be published here by the admin team.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Minimum</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Windows 10 (64-bit)</li>
                <li>• 4 GB RAM</li>
                <li>• 500 MB storage</li>
                <li>• PTP-compatible USB camera</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Recommended</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Windows 11 (64-bit)</li>
                <li>• 8 GB RAM</li>
                <li>• 2 GB+ free storage</li>
                <li>• DSLR or high-quality webcam</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Previous Versions */}
        {(msiChangelog.length > 0 || vmChangelog.length > 0) && (
          <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Versions</h2>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => { setActiveTab("msi"); setExpandedVersion(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "msi"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Windows Installer (MSI)
              </button>
              <button
                onClick={() => { setActiveTab("vm"); setExpandedVersion(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "vm"
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                VM Package
              </button>
            </div>

            {activeChangelog.length === 0 ? (
              <p className="text-sm text-gray-500">No previous versions available for this type.</p>
            ) : (
            <div className="space-y-3">
              {activeChangelog.map((entry) => (
                <div key={entry.version} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedVersion(
                        expandedVersion === entry.version ? null : entry.version
                      )
                    }
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">v{entry.version}</p>
                        {entry.created_at && (
                          <p className="text-sm text-gray-500">
                            {new Date(entry.created_at).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedVersion === entry.version ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {expandedVersion === entry.version && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      {entry.release_notes.length > 0 ? (
                        <ul className="mt-3 space-y-2 text-gray-600">
                          {entry.release_notes.map((note, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                              </svg>
                              <span>{note.trim().replace(/^[-•]\s*/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 text-sm text-gray-500">No release notes available.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            )}
          </div>
        )}
        </>
        )}
      </main>
    </div>
  );
}
