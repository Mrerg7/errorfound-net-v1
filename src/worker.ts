interface Env {
  ASSETS: Fetcher;
}

function toCanonicalUrl(requestUrl: URL): URL {
  const target = new URL(requestUrl.href);
  target.protocol = "https:";

  if (target.hostname.startsWith("www.")) {
    target.hostname = target.hostname.slice(4);
  }

  if (target.pathname === "/index.html" || target.pathname === "/index.htm") {
    target.pathname = "/";
  }

  return target;
}

const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Cross-Origin-Opener-Policy": "same-origin",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const canonical = toCanonicalUrl(url);

    if (canonical.href !== url.href) {
      return Response.redirect(canonical.toString(), 301);
    }

    const res = await env.ASSETS.fetch(request);
    const headers = new Headers(res.headers);
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(key, value);
    }
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  },
};
