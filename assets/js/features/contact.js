export function initContact() {
  const button = document.querySelector('#copy-email');
  const status = document.querySelector('#copy-status');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.email);
      status.textContent = 'Email copied to clipboard.';
    } catch {
      status.textContent = 'Copy unavailable. Select the email address or click it to open your email app.';
    }
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
}
