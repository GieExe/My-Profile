document.addEventListener('DOMContentLoaded', () => {
    // ===== NAV SCROLL EFFECT =====
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('nav-open');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // ===== FORM SUBMISSION =====
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

    // ===== SCROLL REVEAL (custom, not generic) =====
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Don't unobserve — let it re-trigger if you want
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Apply reveal classes to sections and cards
    document.querySelectorAll('.section').forEach((el, i) => {
        const dir = i % 3 === 0 ? 'reveal' : i % 3 === 1 ? 'reveal-left' : 'reveal-right';
        el.classList.add(dir);
        revealObserver.observe(el);
    });

    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.add('reveal-scale');
        revealObserver.observe(el);
    });

    document.querySelectorAll('.operate-grid, .skills-grid, .education-grid, .about-summary-grid').forEach(el => {
        el.classList.add('stagger-children');
        revealObserver.observe(el);
    });

    document.querySelectorAll('.timeline-item, .summary-card, .cert-item, .hobby-feature').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ===== ACTIVE NAV TRACKING =====
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 120;
        sections.forEach(section => {
            const start = section.offsetTop;
            const end = start + section.offsetHeight;
            const targetLink = document.querySelector(`nav a[href="#${section.id}"]`);
            if (!targetLink) return;
            if (scrollPosition >= start && scrollPosition < end) {
                targetLink.classList.add('active');
            } else {
                targetLink.classList.remove('active');
            }
        });
    };
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);

    // ===== SUBTITLE REVEAL =====
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.style.opacity = '0';
        setTimeout(() => {
            subtitle.style.transition = 'opacity 1.5s ease';
            subtitle.style.opacity = '1';
        }, 500);
    }

    // ===== HERO AVATAR FALLBACK =====
    const heroPhoto = document.getElementById('hero-photo');
    const svgAvatar = document.getElementById('svg-avatar');
    if (heroPhoto && svgAvatar) {
        heroPhoto.addEventListener('error', () => {
            heroPhoto.style.display = 'none';
            svgAvatar.style.display = 'block';
        });
        heroPhoto.addEventListener('load', () => {
            svgAvatar.style.display = 'none';
            heroPhoto.style.display = 'block';
        });
        if (!heroPhoto.complete || heroPhoto.naturalWidth === 0) {
            heroPhoto.style.display = 'none';
            svgAvatar.style.display = 'block';
        }
    }

    // ===== CURSOR GLOW (desktop only) =====
    if (window.matchMedia('(hover: hover)').matches) {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);

        let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            glow.classList.add('active');
        });

        document.addEventListener('mouseleave', () => {
            glow.classList.remove('active');
        });

        // Smooth follow with lerp
        const animateGlow = () => {
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            glow.style.left = glowX + 'px';
            glow.style.top = glowY + 'px';
            requestAnimationFrame(animateGlow);
        };
        animateGlow();
    }

    // ===== MAGNETIC HOVER ON BUTTONS =====
    document.querySelectorAll('.btn, .tag-btn').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });

    // ===== PARALLAX ON HERO IMAGE =====
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 800) {
                heroImage.style.transform = `translateY(${scrolled * 0.08}px)`;
            }
        });
    }

    // ===== TILT EFFECT ON PROJECT CARDS =====
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const tiltX = (y - 0.5) * 6;
            const tiltY = (x - 0.5) * -6;
            card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(() => { card.style.transition = ''; }, 500);
        });
    });

    // ===== COUNTER ANIMATION ON METRICS =====
    const metricCards = document.querySelectorAll('.metric-card strong');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = 'true';
                const text = entry.target.textContent;
                const num = parseInt(text);
                if (!isNaN(num)) {
                    let current = 0;
                    const suffix = text.replace(/\d+/, '');
                    const interval = setInterval(() => {
                        current++;
                        entry.target.textContent = current + suffix;
                        if (current >= num) clearInterval(interval);
                    }, 80);
                }
            }
        });
    }, { threshold: 0.5 });

    metricCards.forEach(el => counterObserver.observe(el));
});

// ===== LIGHTBOX =====
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:2000;visibility:hidden;opacity:0;transition:opacity .25s;backdrop-filter:blur(8px)';
    const imgEl = document.createElement('img');
    imgEl.style.maxWidth = '90%';
    imgEl.style.maxHeight = '90%';
    imgEl.style.boxShadow = '0 10px 40px rgba(0,0,0,0.6)';
    imgEl.style.borderRadius = '8px';
    imgEl.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    overlay.appendChild(imgEl);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position:fixed;top:20px;right:24px;z-index:2100;background:transparent;border:none;color:#fff;font-size:28px;cursor:pointer;transition:transform 0.2s';
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹';
    prevBtn.style.cssText = 'position:fixed;left:24px;top:50%;transform:translateY(-50%);z-index:2100;background:transparent;border:none;color:#fff;font-size:48px;cursor:pointer;transition:transform 0.2s';
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '›';
    nextBtn.style.cssText = 'position:fixed;right:24px;top:50%;transform:translateY(-50%);z-index:2100;background:transparent;border:none;color:#fff;font-size:48px;cursor:pointer;transition:transform 0.2s';

    document.body.appendChild(overlay);
    document.body.appendChild(closeBtn);
    document.body.appendChild(prevBtn);
    document.body.appendChild(nextBtn);
    closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'none';

    let galleries = {};
    let currentGallery = null;
    let currentIndex = 0;

    document.querySelectorAll('[class$="-gallery"]').forEach(cont => {
        const name = cont.className.split(' ')[0].replace('-gallery', '');
        const arr = Array.from(cont.querySelectorAll('img')).map(i => i.getAttribute('data-src'));
        galleries[name] = arr;
    });

    function openGallery(name, start = 0) {
        if (!galleries[name] || galleries[name].length === 0) return;
        currentGallery = name;
        currentIndex = (start + galleries[name].length) % galleries[name].length;
        imgEl.src = galleries[name][currentIndex];
        imgEl.style.transform = 'scale(0.9)';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'block';
        setTimeout(() => { imgEl.style.transform = 'scale(1)'; }, 50);
    }

    function closeGallery() {
        imgEl.style.transform = 'scale(0.9)';
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'none';
        }, 250);
        currentGallery = null;
    }

    document.querySelectorAll('[data-gallery-trigger]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const name = btn.getAttribute('data-gallery') || Object.keys(galleries)[0];
            openGallery(name, 0);
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

    // Hover effects on buttons
    [closeBtn, prevBtn, nextBtn].forEach(btn => {
        btn.addEventListener('mouseenter', () => { btn.style.transform += ' scale(1.2)'; });
        btn.addEventListener('mouseleave', () => { btn.style.transform = btn.style.transform.replace(' scale(1.2)', ''); });
    });
});
