"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sendOtp, userRegister, setUserToken } from "@/lib/auth";

const EyeOpen = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeOff = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>
);

export default function RegisterPage() {
  const router = useRouter();

  // Step 1 state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Step 2 state
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const digitRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [step, setStep] = useState<"form" | "otp">("form");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  // ── Step 1: send OTP ────────────────────────────────────────────────────────
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    try {
      await sendOtp(email);
      setStep("otp");
      startCooldown();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send code");
    } finally {
      setLoading(false);
    }
  };

  // ── Step 2: verify OTP + register ──────────────────────────────────────────
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = digits.join("");
    if (otp.length < 6) {
      setError("Enter the full 6-digit code");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const data = await userRegister({ name, email, password, otp });
      setUserToken(data.token);
      router.push("/account");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  // ── Resend cooldown ────────────────────────────────────────────────────────
  const startCooldown = () => {
    setResendCooldown(60);
    const interval = setInterval(() => {
      setResendCooldown((v) => {
        if (v <= 1) { clearInterval(interval); return 0; }
        return v - 1;
      });
    }, 1000);
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setError("");
    setDigits(["", "", "", "", "", ""]);
    digitRefs[0].current?.focus();
    try {
      await sendOtp(email);
      startCooldown();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend code");
    }
  };

  // ── OTP input handlers ─────────────────────────────────────────────────────
  const handleDigitChange = (index: number, value: string) => {
    // Allow paste of full 6-digit code
    if (value.length > 1) {
      const clean = value.replace(/\D/g, "").slice(0, 6);
      const next = [...digits];
      for (let i = 0; i < 6; i++) next[i] = clean[i] ?? "";
      setDigits(next);
      digitRefs[Math.min(clean.length, 5)].current?.focus();
      return;
    }
    if (!/^\d?$/.test(value)) return;
    const next = [...digits];
    next[index] = value;
    setDigits(next);
    if (value && index < 5) digitRefs[index + 1].current?.focus();
  };

  const handleDigitKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      digitRefs[index - 1].current?.focus();
    }
  };

  const ErrorBanner = ({ msg }: { msg: string }) => (
    <div className="mb-5 flex items-start gap-2 rounded-lg border border-red-100 bg-red-50 px-3.5 py-2.5">
      <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
      </svg>
      <p className="text-sm text-red-700">{msg}</p>
    </div>
  );

  const inputClass = "w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-colors duration-150 focus:border-purple-500 focus:ring-1 focus:ring-purple-500";
  const submitClass = "mt-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center gap-2";

  const Spinner = () => (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="animate-fadein w-full max-w-[400px] bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-10">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
            <img src="/photos/logo/iph.png" alt="IPH Photobooth" className="w-7 h-7 object-contain brightness-0 invert" />
          </div>
        </div>

        {/* ── Step 1: Registration form ───────────────────────────────────── */}
        {step === "form" && (
          <>
            <div className="mb-8">
              <h1 className="font-[family-name:var(--font-jost)] text-[30px] font-bold tracking-tight text-gray-900 leading-none mb-2">
                Create account
              </h1>
              <p className="text-sm text-gray-500">Get started with IPH Photobooth</p>
            </div>

            {error && <ErrorBanner msg={error} />}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" className={inputClass} placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" className={inputClass} placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" minLength={8} className={`${inputClass} pr-10`} placeholder="Min. 8 characters" />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} tabIndex={-1} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-150">
                    {showPassword ? <EyeOff /> : <EyeOpen />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">Confirm password</label>
                <div className="relative">
                  <input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required autoComplete="new-password" minLength={8} className={`${inputClass} pr-10`} placeholder="••••••••" />
                  <button type="button" onClick={() => setShowConfirmPassword((v) => !v)} tabIndex={-1} aria-label={showConfirmPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-150">
                    {showConfirmPassword ? <EyeOff /> : <EyeOpen />}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading} className={submitClass}>
                {loading ? <><Spinner /> Sending code…</> : "Continue"}
              </button>
            </form>

            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-500">
              <p>Already have an account?{" "}
                <Link href="/login" className="font-medium text-purple-600 hover:text-purple-700 transition-colors duration-150">Sign in</Link>
              </p>
              <Link href="/" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors duration-150">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to home
              </Link>
            </div>
          </>
        )}

        {/* ── Step 2: OTP verification ────────────────────────────────────── */}
        {step === "otp" && (
          <>
            <div className="mb-8">
              <h1 className="font-[family-name:var(--font-jost)] text-[30px] font-bold tracking-tight text-gray-900 leading-none mb-2">
                Check your email
              </h1>
              <p className="text-sm text-gray-500">
                We sent a 6-digit code to{" "}
                <span className="font-medium text-gray-700">{email}</span>
              </p>
            </div>

            {error && <ErrorBanner msg={error} />}

            <form onSubmit={handleOtpSubmit} className="space-y-6">
              {/* 6-digit boxes */}
              <div className="flex gap-2 justify-between">
                {digits.map((digit, i) => (
                  <input
                    key={i}
                    ref={digitRefs[i]}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleDigitChange(i, e.target.value)}
                    onKeyDown={(e) => handleDigitKeyDown(i, e)}
                    onFocus={(e) => e.target.select()}
                    className="w-11 h-12 text-center text-lg font-semibold border border-gray-200 rounded-lg bg-white text-gray-900 outline-none transition-colors duration-150 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    autoFocus={i === 0}
                  />
                ))}
              </div>

              <button type="submit" disabled={loading || digits.join("").length < 6} className={submitClass}>
                {loading ? <><Spinner /> Verifying…</> : "Create account"}
              </button>
            </form>

            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-gray-500">
              <p>
                Didn&apos;t receive it?{" "}
                <button
                  onClick={handleResend}
                  disabled={resendCooldown > 0}
                  className="font-medium text-purple-600 hover:text-purple-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-150"
                >
                  {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend code"}
                </button>
              </p>
              <button
                onClick={() => { setStep("form"); setError(""); setDigits(["", "", "", "", "", ""]); }}
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors duration-150"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Edit details
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
