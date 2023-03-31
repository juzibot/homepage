export function setMobileStatusBarColor(color: string) {
  const head = document.getElementsByTagName('head')[0];

  // Check if meta tags already exist
  const metaThemeColor = head.querySelector('meta[name="theme-color"]');
  const metaMsApplicationNavButtonColor = head.querySelector('meta[name="msapplication-navbutton-color"]');
  const metaAppleMobileWebAppStatusBarStyle = head.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');

  // Create meta tags if they don't exist
  if (!metaThemeColor) {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    meta.setAttribute('content', color);
    head.appendChild(meta);
  } else {
    metaThemeColor.setAttribute('content', color);
  }

  if (!metaMsApplicationNavButtonColor) {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'msapplication-navbutton-color');
    meta.setAttribute('content', color);
    head.appendChild(meta);
  } else {
    metaMsApplicationNavButtonColor.setAttribute('content', color);
  }

  if (!metaAppleMobileWebAppStatusBarStyle) {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
    meta.setAttribute('content', color);
    head.appendChild(meta);
  } else {
    metaAppleMobileWebAppStatusBarStyle.setAttribute('content', color);
  }
}