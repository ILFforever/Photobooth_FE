import { getToken } from "./auth";

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

  console.log("[UPLOAD CLIENT] Sending fetch request to /api/releases");

  try {
    const response = await fetch("/api/releases", {
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
