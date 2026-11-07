// Küçük terminal yazı efekti ve sayfa etkileşimleri için hazır alan.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.add('navigating');
    setTimeout(() => document.body.classList.remove('navigating'), 350);
  });
});
