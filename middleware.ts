import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  if (!session && request.nextUrl.pathname === "/Thanks") {
    return NextResponse.redirect(new URL("/Ebook", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/Thanks",
};
