// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.about-left, .about-right, .about-bottom-left, .about-bottom-right, .service-item, .testi-center');

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));

// ===== NAVBAR SCROLL SHADOW =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'fixed';
  navLinks.style.top = '70px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = '#fff';
  navLinks.style.padding = '20px';
  navLinks.style.gap = '20px';
  navLinks.style.borderBottom = '1px solid #eee';
  navLinks.style.zIndex = '99';
});

// ===== SERVICE ITEM HOVER =====
document.querySelectorAll('.service-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.service-arrow').style.transform = 'translateX(8px)';
    item.querySelector('.service-arrow').style.transition = 'transform 0.25s ease';
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('.service-arrow').style.transform = 'translateX(0)';
  });
});

// ===== SUBSCRIBE BUTTON =====
const subscribeBtn = document.querySelector('.btn-subscribe');
if (subscribeBtn) {
  subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    subscribeBtn.textContent = '✓ Subscribed!';
    subscribeBtn.style.background = '#4caf50';
    setTimeout(() => {
      subscribeBtn.textContent = 'Subscribe Now';
      subscribeBtn.style.background = '';
    }, 2500);
  });
}
