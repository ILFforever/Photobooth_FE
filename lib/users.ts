import { getUserToken } from "./auth";

export interface UserLicense {
  license_key: string;
  licensee_name: string;
  licensee_email: string;
  license_type: "perpetual" | "subscription" | "demo";
  expires_at: string | null;
  activated_at: string;
}

const getBackendUrl = () => {
  if (typeof window !== "undefined") {
    if ((window as unknown as Record<string, unknown>).__NEXT_PUBLIC_BACKEND_URL__) return (window as unknown as Record<string, unknown>).__NEXT_PUBLIC_BACKEND_URL__ as string;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (backendUrl) return backendUrl;
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
};

async function authenticatedFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const token = getUserToken();
  if (!token) {
    throw new Error("Not authenticated");
  }

  return fetch(`${getBackendUrl()}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
}

export async function getUserLicenses(): Promise<UserLicense[]> {
  const response = await authenticatedFetch("/api/users/licenses");
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch licenses");
  }

  return response.json();
}

export async function requestDemoLicense(email: string): Promise<{ message: string; license_key: string }> {
  const response = await fetch(`${getBackendUrl()}/api/users/request-demo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to request demo license");
  }

  return response.json();
}