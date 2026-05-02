import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

async function proxy(req: NextRequest, path: string[]) {
  const url = `${BACKEND_URL}/api/users/${path.join("/")}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const auth = req.headers.get("authorization");
  if (auth) headers["Authorization"] = auth;

  const body = req.method !== "GET" ? await req.text() : undefined;

  const response = await fetch(url, {
    method: req.method,
    headers,
    body,
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, (await params).path);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, (await params).path);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, (await params).path);
}
