"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { isUserAuthenticated, userLogoutAndClear } from "@/lib/auth";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsLoggedIn(isUserAuthenticated());
  }, []);

  // Close panel on outside click
  useEffect(() => {
    if (!panelOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        panelRef.current?.contains(e.target as Node) ||
        buttonRef.current?.contains(e.target as Node)
      ) return;
      setPanelOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [panelOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/photos/logo/iph.png" alt="IPH Photobooth" className="w-7 h-7" />
            <span className="text-xl font-bold text-gray-900">IPH Photobooth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/releases" className="text-gray-600 hover:text-gray-900 transition-colors">
              Download
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Documentation
            </Link>
            <a
              href="https://github.com/ILFforever/Photobooth_IPH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Right side: profile button + mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* Profile circle */}
            <div className="relative">
              <button
                ref={buttonRef}
                type="button"
                onClick={() => setPanelOpen((v) => !v)}
                aria-label="Account"
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-150 ${
                  isLoggedIn
                    ? "border-transparent bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {panelOpen && (
                <div
                  ref={panelRef}
                  className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl border border-gray-100 overflow-hidden"
                  style={{ boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 32px -4px rgba(0,0,0,0.08)" }}
                >
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 pt-4 pb-3 border-b border-gray-50">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Account</p>
                      </div>
                      <div className="p-2">
                        <Link
                          href="/account"
                          onClick={() => setPanelOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-100"
                        >
                          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                          </span>
                          <span className="font-medium">My Account</span>
                        </Link>
                        <button
                          onClick={() => { setPanelOpen(false); userLogoutAndClear(); }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors duration-100 text-left"
                        >
                          <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                          </span>
                          Sign out
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="px-5 pt-5 pb-4">
                        <p className="text-sm font-semibold text-gray-900 leading-snug">Sign in to IPH Photobooth</p>
                        <p className="text-xs text-gray-500 mt-1">Access your licenses and account settings</p>
                      </div>
                      <div className="px-3 pb-3 flex flex-col gap-1.5">
                        <Link
                          href="/login"
                          onClick={() => setPanelOpen(false)}
                          className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-medium text-white transition-all duration-150"
                          style={{ background: "linear-gradient(135deg, #9333ea, #4f46e5)" }}
                        >
                          Sign in
                        </Link>
                        <Link
                          href="/register"
                          onClick={() => setPanelOpen(false)}
                          className="flex items-center justify-center w-full py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                        >
                          Create account
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              <Link href="/" className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/#features" className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="/releases" className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Download</Link>
              <Link href="/docs" className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
              <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-2 px-1">
                <Link href="/login" className="px-3 py-2.5 text-center text-sm font-medium text-white rounded-lg" style={{ background: "linear-gradient(135deg, #9333ea, #4f46e5)" }} onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
                <Link href="/register" className="px-3 py-2.5 text-center text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Create account</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
