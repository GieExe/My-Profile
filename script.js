document.addEventListener('DOMContentLoaded', () => {
    // Nav
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('nav-open'));
    }
    navLinks.forEach(link => {
        link.addEventListener('click', () => { if (navMenu) navMenu.classList.remove('nav-open'); });
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                header.style.borderBottomColor = window.scrollY > 50 ? 'rgba(212,168,83,0.15)' : 'var(--border)';
                ticking = false;
            });
            ticking = true;
        }
    });

    // Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;
            setTimeout(() => {
                alert('Thank you for your message, Giebert will get back to you soon!');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Scroll reveal — just opacity, nothing flashy
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.section, .project-card, .operate-card, .timeline-item, .summary-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s ease';
        observer.observe(el);
    });

    // Active nav
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const updateActiveNav = () => {
        const pos = window.scrollY + 120;
        sections.forEach(section => {
            const link = document.querySelector(`nav a[href="#${section.id}"]`);
            if (!link) return;
            if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);

    // Hero photo fallback
    const heroPhoto = document.getElementById('hero-photo');
    const svgAvatar = document.getElementById('svg-avatar');
    if (heroPhoto && svgAvatar) {
        heroPhoto.addEventListener('error', () => { heroPhoto.style.display = 'none'; svgAvatar.style.display = 'block'; });
        heroPhoto.addEventListener('load', () => { svgAvatar.style.display = 'none'; heroPhoto.style.display = 'block'; });
        if (!heroPhoto.complete || heroPhoto.naturalWidth === 0) { heroPhoto.style.display = 'none'; svgAvatar.style.display = 'block'; }
    }
});

// Lightbox — functional, not decorative
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;z-index:2000;visibility:hidden;opacity:0;transition:opacity .2s;cursor:pointer';
    const imgEl = document.createElement('img');
    imgEl.style.cssText = 'max-width:92%;max-height:92%;border-radius:4px';
    overlay.appendChild(imgEl);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '\u00d7';
    closeBtn.style.cssText = 'position:fixed;top:16px;right:20px;z-index:2100;background:none;border:none;color:#aaa;font-size:32px;cursor:pointer;font-family:system-ui';
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '\u2039';
    prevBtn.style.cssText = 'position:fixed;left:16px;top:50%;transform:translateY(-50%);z-index:2100;background:none;border:none;color:#aaa;font-size:40px;cursor:pointer;font-family:system-ui';
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '\u203a';
    nextBtn.style.cssText = 'position:fixed;right:16px;top:50%;transform:translateY(-50%);z-index:2100;background:none;border:none;color:#aaa;font-size:40px;cursor:pointer;font-family:system-ui';

    document.body.appendChild(overlay);
    document.body.appendChild(closeBtn);
    document.body.appendChild(prevBtn);
    document.body.appendChild(nextBtn);
    closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'none';

    let galleries = {}, currentGallery = null, currentIndex = 0;

    document.querySelectorAll('[class$="-gallery"]').forEach(cont => {
        const name = cont.className.split(' ')[0].replace('-gallery', '');
        galleries[name] = Array.from(cont.querySelectorAll('img')).map(i => i.getAttribute('data-src'));
    });

    function openGallery(name, start) {
        if (!galleries[name] || !galleries[name].length) return;
        currentGallery = name;
        currentIndex = ((start || 0) + galleries[name].length) % galleries[name].length;
        imgEl.src = galleries[name][currentIndex];
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'block';
    }

    function closeGallery() {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.visibility = 'hidden'; closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'none'; }, 200);
        currentGallery = null;
    }

    document.querySelectorAll('[data-gallery-trigger]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            openGallery(btn.getAttribute('data-gallery') || Object.keys(galleries)[0], 0);
        });
    });

    overlay.addEventListener('click', closeGallery);
    closeBtn.addEventListener('click', closeGallery);
    prevBtn.addEventListener('click', e => { e.stopPropagation(); if (currentGallery) openGallery(currentGallery, currentIndex - 1); });
    nextBtn.addEventListener('click', e => { e.stopPropagation(); if (currentGallery) openGallery(currentGallery, currentIndex + 1); });
    document.addEventListener('keydown', e => {
        if (overlay.style.visibility !== 'visible') return;
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft' && currentGallery) openGallery(currentGallery, currentIndex - 1);
        if (e.key === 'ArrowRight' && currentGallery) openGallery(currentGallery, currentIndex + 1);
    });
});
