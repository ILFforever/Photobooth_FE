import { getToken, getUserToken } from "./auth";

export const getBackendUrl = () => {
  if (typeof window !== "undefined") {
    if ((window as unknown as Record<string, unknown>).__NEXT_PUBLIC_BACKEND_URL__)
      return (window as unknown as Record<string, unknown>).__NEXT_PUBLIC_BACKEND_URL__ as string;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (backendUrl) return backendUrl;
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
};

function getAuthToken(): string {
  const adminToken = getToken();
  const userToken = getUserToken();
  return adminToken || userToken || "";
}

export async function uploadRelease(
  file: File,
  type: "msi" | "vm",
  version: string,
  releaseNotes: string[]
): Promise<Response> {
  const token = getAuthToken();
  if (!token) throw new Error("Not authenticated");

  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  formData.append("version", version);
  formData.append("release_notes", JSON.stringify(releaseNotes));

  return fetch(`/api/releases`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}
