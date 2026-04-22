/* ─── Header Scroll Effect ─── */
(function() {
  const header = document.getElementById('main-header');
  if (!header) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
})();

/* ─── Mobile Menu Toggle ─── */
(function() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    const isOpen = menu.classList.toggle('open');
    if (openIcon) openIcon.style.display = isOpen ? 'none' : 'block';
    if (closeIcon) closeIcon.style.display = isOpen ? 'block' : 'none';
  });

  // Close menu when a link is clicked
  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('open');
      if (openIcon) openIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    });
  });
})();

/* ─── Enquiry Form Handling ─── */
document.querySelectorAll('.enquiry-form').forEach(function(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var container = form.closest('.enquiry-form-container');
    if (container) {
      container.innerHTML =
        '<div style="text-align:center;padding:2rem 0;">' +
          '<div style="width:4rem;height:4rem;background:#dcfce7;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">' +
            '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
          '</div>' +
          '<h3 class="font-heading" style="font-size:1.25rem;font-weight:700;color:#172554;margin-bottom:0.5rem;">Thank You!</h3>' +
          '<p style="color:#4b5563;">We\'ve received your enquiry. Our admissions team will contact you shortly.</p>' +
        '</div>';
    }
  });
});

/* ─── FAQ Accordion (for faq page with JS toggle) ─── */
document.querySelectorAll('.faq-toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var answer = btn.nextElementSibling;
    var chevron = btn.querySelector('.chevron-icon');
    if (!answer) return;
    var isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
    if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
  });
});
