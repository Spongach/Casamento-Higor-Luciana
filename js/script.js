// ================= ABRIR ENVELOPE =================
const cover = document.getElementById('cover');
const openBtn = document.getElementById('open-btn');
const site = document.getElementById('site');

openBtn.addEventListener('click', () => {
  cover.classList.add('cover--closing');
  site.hidden = false;
  document.body.style.overflow = '';

  setTimeout(() => {
    cover.style.display = 'none';
    revealOnScroll(); // garante que a seção hero já visível seja marcada
  }, 900);
});

// trava o scroll enquanto a capa está ativa
document.body.style.overflow = 'hidden';

// ================= CONTAGEM REGRESSIVA =================
const WEDDING_DATE = new Date('2026-10-18T09:00:00-03:00');

function updateCountdown() {
  const now = new Date();
  let diff = WEDDING_DATE - now;

  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================= SCROLL REVEAL =================
const revealTargets = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('is-visible');
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));

// ================= MODAL DE PRESENTES (PIX) =================
const giftModal = document.getElementById('gift-modal');
const giftModalName = document.getElementById('gift-modal-name');
const giftModalPrice = document.getElementById('gift-modal-price');
const giftModalPix = document.getElementById('gift-modal-pix');
const giftModalCopy = document.getElementById('gift-modal-copy');
const PIX_KEY = '62 99237-3970';

document.querySelectorAll('.gift-card').forEach((card) => {
  card.addEventListener('click', () => {
    giftModalName.textContent = card.dataset.name;
    giftModalPrice.textContent = card.dataset.price;
    giftModalPix.textContent = PIX_KEY;
    giftModalCopy.textContent = 'Copiar';
    giftModal.hidden = false;
  });
});

function closeGiftModal() {
  giftModal.hidden = true;
}

giftModal.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', closeGiftModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !giftModal.hidden) closeGiftModal();
});

giftModalCopy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(PIX_KEY);
    giftModalCopy.textContent = 'Copiado!';
  } catch (err) {
    giftModalCopy.textContent = 'Copie manualmente';
  }
});
// ================= MENU DE INTERAÇÃO (painéis) =================
document.querySelectorAll('.menu__item[data-target]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = document.getElementById(btn.dataset.target);
    const isOpen = !panel.hidden;

    // fecha outros painéis abertos
    document.querySelectorAll('.menu__panel').forEach((p) => (p.hidden = true));

    panel.hidden = isOpen;

    if (!isOpen) {
      setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    }
  });
});
