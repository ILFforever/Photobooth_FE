import { getToken } from "./auth";

export async function uploadRelease(
  file: File,
  type: "msi" | "vm",
  version: string,
  releaseNotes: string[]
): Promise<Response> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  formData.append("version", version);
  formData.append("release_notes", JSON.stringify(releaseNotes));

  const token = getToken();
  if (!token) {
    throw new Error("Not authenticated");
  }

  return fetch("/api/releases", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
}
