type Directive =
  | "child-src"
  | "connect-src"
  | "default-src"
  | "font-src"
  | "frame-src"
  | "img-src"
  | "manifest-src"
  | "media-src"
  | "object-src"
  | "script-src"
  | "script-src-elem"
  | "script-src-attr"
  | "style-src"
  | "style-src-elem"
  | "style-src-attr"
  | "worker-src"
  | "base-uri"
  | "plugin-types"
  | "sandbox"
  | "form-action"
  | "frame-ancestors"
  | "navigate-to"
  | "report-to"
  | "referrer"
  | "require-sri-for"
  | "require-trusted-types-for"
  | "trusted-types"
  | "upgrade-insecure-requests";

type Directives = Record<Directive, string>;

/**
 * Generates a Content Security Policy (CSP) string based on the provided directives.
 *
 * @param directives - An object containing various CSP directives as key-value pairs.
 * Each key represents a directive name and each value represents the corresponding directive value.
 * @returns A string representing the Content Security Policy (CSP) generated based on the input directives.
 *
 * @example
 * const directives = {
 *   "default-src": "'none'",
 *   "script-src": "'self'",
 *   "style-src": "'self'",
 * };
 *
 * const cspString = generateCSP(directives);
 * console.log(cspString);
 * // Output: "default-src 'none'; script-src 'self'; style-src 'self';"
 */
export const generateCSP = (directives: Partial<Directives>) => {
  const csp: `${keyof Directives} ${string}`[] = [];

  for (const directive in directives) {
    const value = directives[directive as keyof Directives];

    csp.push(`${directive as keyof Directives} ${value}`);
  }

  return csp.join("; ");
};
