import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if accessing admin dashboard
  if (pathname.startsWith("/admin/dashboard")) {
    const token = request.cookies.get("admin_token")?.value || request.headers.get("authorization")?.replace("Bearer ", "");

    // Also check localStorage through a cookie approach or redirect
    // For simplicity, we'll let the client-side handle auth check
    // The dashboard component will redirect if not authenticated
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
