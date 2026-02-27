import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");

  if (!type || !["msi", "vm"].includes(type)) {
    return NextResponse.json(
      { error: "Query param 'type' must be 'msi' or 'vm'" },
      { status: 400 }
    );
  }

  const backendRes = await fetch(
    `${BACKEND_URL}/api/releases/download?type=${type}`
  );

  if (!backendRes.ok) {
    const error = await backendRes.json().catch(() => ({ error: "Download failed" }));
    return NextResponse.json(error, { status: backendRes.status });
  }

  const headers = new Headers();
  const contentType = backendRes.headers.get("Content-Type");
  const contentDisposition = backendRes.headers.get("Content-Disposition");
  const contentLength = backendRes.headers.get("Content-Length");

  if (contentType) headers.set("Content-Type", contentType);
  if (contentDisposition) headers.set("Content-Disposition", contentDisposition);
  if (contentLength) headers.set("Content-Length", contentLength);

  return new Response(backendRes.body, { status: 200, headers });
}
