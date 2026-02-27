const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const token = request.headers.get("authorization");

    const response = await fetch(`${BACKEND_URL}/api/releases`, {
      method: "POST",
      headers: token ? { Authorization: token } : {},
      body: formData,
    });

    // Stream the SSE response directly to the client
    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    return new Response(
      `data: ${JSON.stringify({ status: "error", error: "Upload failed" })}\n\n`,
      {
        headers: { "Content-Type": "text/event-stream" },
      }
    );
  }
}
