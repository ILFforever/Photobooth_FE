import { getToken } from "./auth";

// Get backend URL from env or use current origin for local dev
const getBackendUrl = () => {
  if (typeof window !== 'undefined') {
    // On client, check for runtime-configured backend URL first
    if ((window as any).__BACKEND_URL__) return (window as any).__BACKEND_URL__;

    // Check for env var injected by Next.js
    const backendUrl = process.env.BACKEND_URL;
    console.log("[UPLOAD CLIENT] NEXT_PUBLIC_BACKEND_URL from process.env:", backendUrl);

    if (backendUrl) return backendUrl;

    // If no explicit backend URL, assume same origin (local dev)
    console.log("[UPLOAD CLIENT] No backend URL found, using origin:", window.location.origin);
    return window.location.origin;
  }
  return process.env.BACKEND_URL || "http://localhost:3001";
};

export async function uploadRelease(
  file: File,
  type: "msi" | "vm",
  version: string,
  releaseNotes: string[]
): Promise<Response> {
  console.log("[UPLOAD CLIENT] Starting upload request");
  console.log("[UPLOAD CLIENT] File:", {
    name: file.name,
    size: file.size,
    type: file.type,
  });
  console.log("[UPLOAD CLIENT] Metadata:", { type, version, notesCount: releaseNotes.length });

  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  formData.append("version", version);
  formData.append("release_notes", JSON.stringify(releaseNotes));

  const token = getToken();
  if (!token) {
    console.error("[UPLOAD CLIENT] No auth token found");
    throw new Error("Not authenticated");
  }

  // For large files (> 4MB), upload directly to backend to bypass Vercel's 4.5MB limit
  const DIRECT_UPLOAD_THRESHOLD = 4 * 1024 * 1024; // 4MB
  const uploadDirectly = file.size > DIRECT_UPLOAD_THRESHOLD;

  const uploadUrl = uploadDirectly
    ? `${getBackendUrl()}/api/releases`
    : "/api/releases";

  console.log("[UPLOAD CLIENT] File size:", file.size, "bytes");
  console.log("[UPLOAD CLIENT] Upload directly to backend?", uploadDirectly);
  console.log("[UPLOAD CLIENT] Sending fetch request to:", uploadUrl);

  try {
    const response = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    console.log("[UPLOAD CLIENT] Response received:", {
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get("content-type"),
    });

    // Log first chunk of response for debugging
    const clonedResponse = response.clone();
    clonedResponse.text().then(text => {
      console.log("[UPLOAD CLIENT] Response body (first 500 chars):", text.substring(0, 500));
    }).catch(() => {});

    return response;
  } catch (error) {
    console.error("[UPLOAD CLIENT] Fetch error:", error);
    throw error;
  }
}
