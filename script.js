document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('is-clicked');
  });
});
