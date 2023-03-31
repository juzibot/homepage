export function setMobileStatusBarColor(color: string) {
  const head = document.getElementsByTagName('head')[0];

  // Chrome, Firefox OS and Opera
  const metaThemeColor = document.createElement('meta');
  metaThemeColor.setAttribute('name', 'theme-color');
  metaThemeColor.setAttribute('content', color);
  head.appendChild(metaThemeColor);

  // Windows Phone
  const metaMsApplicationNavButtonColor = document.createElement('meta');
  metaMsApplicationNavButtonColor.setAttribute('name', 'msapplication-navbutton-color');
  metaMsApplicationNavButtonColor.setAttribute('content', color);
  head.appendChild(metaMsApplicationNavButtonColor);

  // iOS Safari
  const metaAppleMobileWebAppStatusBarStyle = document.createElement('meta');
  metaAppleMobileWebAppStatusBarStyle.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
  metaAppleMobileWebAppStatusBarStyle.setAttribute('content', color);
  head.appendChild(metaAppleMobileWebAppStatusBarStyle);
}