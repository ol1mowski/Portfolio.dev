import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userEmail = request.cookies.get("userEmail");

  if (!userEmail) {
    console.log("No user email");
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/thanks/:path*",
};
