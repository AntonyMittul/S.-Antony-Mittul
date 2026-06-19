// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const links = document.querySelector('.nav-links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (Math.min(i % 4, 3) * 80) + 'ms';
  io.observe(el);
});

// Toast notifications
const toastWrap = document.getElementById('toastWrap');
const ICONS = {
  ok: '<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  err: '<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
};
function toast(type, msg) {
  if (!toastWrap) return;
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.innerHTML = ICONS[type] + '<span>' + msg + '</span>';
  toastWrap.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 320);
  }, 5000);
}

// Contact form (Web3Forms)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const key = form.querySelector('[name="access_key"]').value;

    if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      status.className = 'form-status err';
      status.textContent = 'Form not configured yet — add your Web3Forms access key.';
      toast('err', 'Form not configured yet — add your Web3Forms access key.');
      return;
    }

    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    status.className = 'form-status';
    status.textContent = '';

    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json();
      if (res.ok) {
        status.className = 'form-status ok';
        status.textContent = "Thanks! Your message has been sent.";
        toast('ok', "Thanks! Your message has been sent — I'll be in touch soon.");
        form.reset();
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      status.className = 'form-status err';
      status.textContent = 'Could not send right now. Please email antonymittul@gmail.com instead.';
      toast('err', 'Could not send right now. Please email antonymittul@gmail.com instead.');
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  });
}

// Cursor spotlight + parallax glow (skip on touch / reduced-motion)
const glow = document.querySelector('.glow');
const fine = window.matchMedia('(pointer: fine)').matches;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (fine && !reduced) {
  document.body.classList.add('has-pointer');
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    if (glow) glow.style.transform = `translateX(calc(-50% + ${x}px))`;
  }, { passive: true });
}
