// ── Sticky nav background ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.background = 'rgba(8, 15, 26, 0.92)';
        navbar.style.backdropFilter = 'blur(12px)';
        navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        navbar.style.paddingTop = '12px';
        navbar.style.paddingBottom = '12px';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
    }
});

// ── Mobile menu toggle ──
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
        a.classList.remove('text-cyanAccent');
        if (a.getAttribute('href') === '#' + current) a.classList.add('text-cyanAccent');
    });
});
