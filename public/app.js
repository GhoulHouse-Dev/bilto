document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded','false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); nav.classList.toggle('is-open',open); });
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
const form = document.querySelector('#demo-form');
// Prevent accidental submission even if submitted programmatically. No network/storage calls.
form.addEventListener('submit', e => { e.preventDefault(); document.querySelector('#form-status').textContent = 'Esikatselu valmis. Tarjouspyyntöä ei lähetetty eikä tietoja tallennettu. Varsinaisen sivuston lomake yhdistetään sovittuun vastaanottajaan.'; });
const sticky = document.querySelector('.mobile-cta');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => { sticky.hidden = entries[0].isIntersecting; }, { threshold: 0.05 });
  observer.observe(document.querySelector('#yhteys'));
}
