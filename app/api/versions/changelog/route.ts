import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET(request: NextRequest) {
  try {
    const type = request.nextUrl.searchParams.get("type") || "msi";

    const res = await fetch(
      `${BACKEND_URL}/api/versions/changelog?type=${type}`
    );

    if (!res.ok) {
      return NextResponse.json(
        { type, changelog: [] },
        { status: 200 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { type: "msi", changelog: [] },
      { status: 200 }
    );
  }
}
