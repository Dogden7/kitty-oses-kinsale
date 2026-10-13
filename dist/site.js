(() => {
  const dialog = document.querySelector('.photo-dialog');
  const image = dialog.querySelector('.dialog-image');
  const caption = dialog.querySelector('#photo-caption');
  const buttons = [...document.querySelectorAll('[data-photo]')];
  const photos = buttons.map(button => ({
    src: button.querySelector('img').getAttribute('src'),
    alt: button.querySelector('img').alt,
    title: button.closest('figure').querySelector('figcaption')?.textContent || 'Live Irish music',
  }));
  let current = 0;
  let opener;
  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    image.src = photos[current].src;
    image.alt = photos[current].alt;
    caption.textContent = `${photos[current].title} · ${current + 1} of ${photos.length}`;
  }
  buttons.forEach((button, index) => button.addEventListener('click', () => {
    opener = button;
    showPhoto(index);
    dialog.showModal();
    document.body.classList.add('photo-open');
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.photo-previous').addEventListener('click', () => showPhoto(current - 1));
  dialog.querySelector('.photo-next').addEventListener('click', () => showPhoto(current + 1));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(current + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('photo-open');
    opener?.focus({ preventScroll: true });
  });
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('nav a')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          links.forEach(link => {
            if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        }
      }
    }, { rootMargin: '-15% 0px -45% 0px' });
    ['food', 'music', 'visit'].forEach(id => observer.observe(document.getElementById(id)));
    observer.observe(document.querySelector('.opening'));
  }
})();
