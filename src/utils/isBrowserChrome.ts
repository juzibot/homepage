export function isBrowserChrome(): boolean {
  if (!process.browser) {
    return true; // i love chrome
  }
  return /Chrome|Safari/.test(navigator.userAgent);
}
