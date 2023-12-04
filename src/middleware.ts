import { NextRequest, NextResponse } from "next/server";
import { generateCSP } from "./lib/generate-csp";
import { generateNonce } from "./lib/generate-nonce";

export const middleware = (req: NextRequest) => {
  const nonce = generateNonce();

  const cspHeader = generateCSP({
    "default-src": "'none'",
    "object-src": "'none'",
    "base-uri": "'none'",
    "frame-src": "'none'",
    "media-src": "'none'",
    "frame-ancestors": "'none'",
    "img-src": "'self'",
    "manifest-src": "'self'",
    "worker-src": "'self'",
    "child-src": "'self'",
    "form-action": "'none'",
    "font-src": "'self'",
    "upgrade-insecure-requests": "",
    "connect-src": `'self' 'nonce-${nonce}'`,
    "style-src": `'self' 'nonce-${nonce}'`,
    "script-src": `'self' 'nonce-${nonce}' 'strict-dynamic' ${
      process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""
    }`,
  });

  const requestHeaders = new Headers(req.headers);

  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set("content-security-policy", cspHeader);

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  });
};

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
