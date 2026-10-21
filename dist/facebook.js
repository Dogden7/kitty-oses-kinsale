(() => {
  const panel = document.querySelector('.facebook-panel');
  if (!panel) return;
  const placeholder = panel.querySelector('.facebook-placeholder');
  const loadButton = panel.querySelector('.facebook-load');
  const hideButton = panel.querySelector('.facebook-hide');
  const container = panel.querySelector('.facebook-feed');
  const tools = panel.querySelector('.facebook-tools');
  const defaultHelp = tools.querySelector('p').innerHTML;
  let frame;
  let lastWidth = 0;
  let resizeTimer;
  function fitFeed() {
    if (!frame) return;
    const measured = Math.floor(container.getBoundingClientRect().width);
    if (!measured) return;
    const width = Math.max(180, Math.min(500, measured));
    if (width === lastWidth) return;
    lastWidth = width;
    const url = new URL('https://www.facebook.com/plugins/page.php');
    url.search = new URLSearchParams({
      href: 'https://www.facebook.com/kittykinsale/',
      tabs: 'timeline', width: String(width), height: '620',
      small_header: 'true', adapt_container_width: 'true',
      hide_cover: 'true', show_facepile: 'false'
    }).toString();
    frame.width = String(width);
    frame.src = url.toString();
  }
  loadButton.hidden = false;
  loadButton.addEventListener('click', () => {
    if (frame) return;
    frame = document.createElement('iframe');
    frame.title = 'Recent Facebook posts from Kitty Ó Sé’s Kinsale';
    frame.height = '620';
    frame.setAttribute('scrolling', 'no');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.addEventListener('error', () => {
      container.hidden = true;
      tools.querySelector('p').textContent = 'Facebook posts could not be loaded here. Use the Open Facebook link to see the latest updates.';
      hideButton.focus({ preventScroll: true });
    });
    placeholder.hidden = true;
    container.hidden = false;
    tools.querySelector('p').innerHTML = defaultHelp;
    tools.hidden = false;
    loadButton.setAttribute('aria-expanded', 'true');
    container.append(frame);
    fitFeed();
    frame.focus({ preventScroll: true });
  });
  hideButton.addEventListener('click', () => {
    clearTimeout(resizeTimer);
    frame?.remove();
    frame = undefined;
    lastWidth = 0;
    container.hidden = true;
    tools.hidden = true;
    placeholder.hidden = false;
    loadButton.setAttribute('aria-expanded', 'false');
    loadButton.focus({ preventScroll: true });
  });
  const onResize = () => {
    if (!frame) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitFeed, 200);
  };
  if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(panel);
  else window.addEventListener('resize', onResize);
})();
