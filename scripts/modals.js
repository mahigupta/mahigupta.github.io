// modals.js
// About Family Modal logic
export function setupAboutModal() {
  const openAboutModalBtn = document.getElementById('openAboutModal');
  const aboutModal = document.getElementById('aboutModal');
  const closeAboutModalBtn = document.getElementById('closeAboutModal');
  if (!openAboutModalBtn || !aboutModal || !closeAboutModalBtn) return;
  openAboutModalBtn.onclick = function() {
    aboutModal.classList.add('open');
    aboutModal.setAttribute('aria-hidden', 'false');
  };
  closeAboutModalBtn.onclick = function() {
    aboutModal.classList.remove('open');
    aboutModal.setAttribute('aria-hidden', 'true');
  };
// End of file
}
