document.querySelectorAll('.transition-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetUrl = this.href;
      document.body.classList.add('fade-out');
      setTimeout(() => {
          window.location.href = targetUrl;
      }, 500); // This matches the transition duration in the CSS
  });
});

window.addEventListener('load', () => {
  document.body.classList.remove('fade-out');
});