export function showModal() {
  if (typeof document === 'undefined') return;
  document
    .getElementById('contact-modal')
    ?.setAttribute('style', 'display: flex');
}
