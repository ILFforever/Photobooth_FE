import { NextRequest } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

// Use Next.js segment config for runtime options
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  console.log("[API PROXY] Upload request received at /api/releases");
  console.log("[API PROXY] BACKEND_URL:", BACKEND_URL);

  try {
    const formData = await request.formData();
    const token = request.headers.get("authorization");
    const file = formData.get("file") as File;
    const type = formData.get("type");
    const version = formData.get("version");

    console.log("[API PROXY] Request data:", {
      hasFile: !!file,
      fileName: file?.name,
      fileSize: file?.size,
      fileType: type,
      version,
      hasToken: !!token,
    });

    console.log("[API PROXY] Forwarding to backend...");
    const response = await fetch(`${BACKEND_URL}/api/releases`, {
      method: "POST",
      headers: token ? { Authorization: token } : {},
      body: formData,
      // @ts-ignore - duplex option is required for Node 18+ fetch with streaming body
      duplex: 'half',
    });

    console.log("[API PROXY] Backend response:", {
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get("content-type"),
    });

    // If error, log the response body
    if (!response.ok) {
      const errorText = await response.text();
      console.error("[API PROXY] Backend error response:", errorText);
      return new Response(
        `data: ${JSON.stringify({ status: "error", error: errorText || "Upload failed" })}\n\n`,
        {
          status: response.status,
          headers: { "Content-Type": "text/event-stream" },
        }
      );
    }

    // Stream the SSE response directly to the client
    console.log("[API PROXY] Streaming response to client...");
    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("[API PROXY] Exception:", error);
    return new Response(
      `data: ${JSON.stringify({ status: "error", error: error instanceof Error ? error.message : "Upload failed" })}\n\n`,
      {
        headers: { "Content-Type": "text/event-stream" },
      }
    );
  }
}
