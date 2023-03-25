// footer.js
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('footer.html');
  const footerTemplate = await response.text();
  document.querySelector('.footer-container').innerHTML = footerTemplate;
});
