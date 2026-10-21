(() => {
  const stages = ['connect', 'choose', 'preview'];
  const summary = document.querySelector('.connection-summary');
  const status = document.getElementById('connection-status');
  const connectedBy = document.getElementById('connected-by');
  const checkbox = document.getElementById('select-page');
  const approve = document.getElementById('approve-demo');
  const announcement = document.querySelector('.demo-live-status');
  function showStage(name) {
    stages.forEach((stage, index) => {
      document.getElementById(`stage-${stage}`).hidden = stage !== name;
      const step = document.querySelectorAll('.demo-steps li')[index];
      if (stage === name) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    });
    document.getElementById(`${name}-title`).focus({ preventScroll: true });
    document.querySelector('.walkthrough').scrollIntoView({ block:'start', behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  function reset() {
    checkbox.checked = false;
    approve.disabled = true;
    summary.classList.remove('is-connected');
    status.innerHTML = '<span class="status-dot" aria-hidden="true"></span>Not connected';
    connectedBy.textContent = '—';
    showStage('connect');
    announcement.textContent = 'Demo reset. No Facebook account is connected.';
  }
  document.getElementById('start-demo').hidden = false;
  document.getElementById('reset-demo').hidden = false;
  document.getElementById('start-demo').addEventListener('click', () => {
    showStage('choose');
    announcement.textContent = 'Demo step 2. Select the example Facebook Page.';
  });
  document.getElementById('back-demo').addEventListener('click', () => showStage('connect'));
  checkbox.addEventListener('change', () => { approve.disabled = !checkbox.checked; });
  approve.addEventListener('click', () => {
    if (!checkbox.checked) return;
    summary.classList.add('is-connected');
    status.innerHTML = '<span class="status-dot" aria-hidden="true"></span>Connected · demo only';
    connectedBy.textContent = 'Example Page manager';
    showStage('preview');
    announcement.textContent = 'Simulated connection complete. This preview uses website photographs, not Facebook posts.';
  });
  document.getElementById('disconnect-demo').addEventListener('click', reset);
  document.getElementById('reset-demo').addEventListener('click', reset);
})();
