document.addEventListener('DOMContentLoaded', () => {
    // Nav Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Form Submission (Mock)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message, Giebert will get back to you soon!');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Simplified observer handler
    const fadeInEntries = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const sectionObserver = new IntersectionObserver(fadeInEntries, observerOptions);
    document.querySelectorAll('.section, .about-card, .timeline-content, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        sectionObserver.observe(el);
    });

    // Subtitle reveal effect
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.style.opacity = '0';
        setTimeout(() => {
            subtitle.style.transition = 'opacity 1.5s ease';
            subtitle.style.opacity = '1';
        }, 500);
    }

    // Hero avatar fallback: show SVG if local image missing
    const heroPhoto = document.getElementById('hero-photo');
    const svgAvatar = document.getElementById('svg-avatar');
    if (heroPhoto && svgAvatar) {
        // on error show svg
        heroPhoto.addEventListener('error', () => {
            heroPhoto.style.display = 'none';
            svgAvatar.style.display = 'block';
        });
        // on load hide svg
        heroPhoto.addEventListener('load', () => {
            svgAvatar.style.display = 'none';
            heroPhoto.style.display = 'block';
        });
        // quick check if image is not available
        if (!heroPhoto.complete || heroPhoto.naturalWidth === 0) {
            heroPhoto.style.display = 'none';
            svgAvatar.style.display = 'block';
        }
    }
});

// Generic lightbox supporting multiple galleries
// expects containers with class *.gallery (or any container with data-gallery-name)
// triggers should include data-gallery-trigger and optional data-gallery="name"

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:2000;visibility:hidden;opacity:0;transition:opacity .2s';
    const imgEl = document.createElement('img');
    imgEl.style.maxWidth = '90%';
    imgEl.style.maxHeight = '90%';
    imgEl.style.boxShadow = '0 10px 40px rgba(0,0,0,0.6)';
    imgEl.style.borderRadius = '8px';
    overlay.appendChild(imgEl);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position:fixed;top:20px;right:24px;z-index:2100;background:transparent;border:none;color:#fff;font-size:28px;cursor:pointer';
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹';
    prevBtn.style.cssText = 'position:fixed;left:24px;top:50%;transform:translateY(-50%);z-index:2100;background:transparent;border:none;color:#fff;font-size:48px;cursor:pointer';
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '›';
    nextBtn.style.cssText = 'position:fixed;right:24px;top:50%;transform:translateY(-50%);z-index:2100;background:transparent;border:none;color:#fff;font-size:48px;cursor:pointer';

    document.body.appendChild(overlay);
    document.body.appendChild(closeBtn);
    document.body.appendChild(prevBtn);
    document.body.appendChild(nextBtn);
    // hide controls until a gallery is opened
    closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'none';

    let galleries = {};
    let currentGallery = null;
    let currentIndex = 0;

    // gather gallery containers
    document.querySelectorAll('[class$="-gallery"]').forEach(cont => {
        const name = cont.className.split(' ')[0].replace('-gallery','');
        const arr = Array.from(cont.querySelectorAll('img')).map(i => i.getAttribute('data-src'));
        galleries[name] = arr;
    });

    function openGallery(name, start=0) {
        if (!galleries[name] || galleries[name].length === 0) return;
        currentGallery = name;
        currentIndex = (start + galleries[name].length) % galleries[name].length;
        imgEl.src = galleries[name][currentIndex];
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'block';
    }
    function closeGallery() {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        closeBtn.style.display = prevBtn.style.display = nextBtn.style.display = 'none';
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
    prevBtn.addEventListener('click', e => { e.stopPropagation(); if (currentGallery) openGallery(currentGallery, currentIndex-1); });
    nextBtn.addEventListener('click', e => { e.stopPropagation(); if (currentGallery) openGallery(currentGallery, currentIndex+1); });
    document.addEventListener('keydown', e => {
        if (overlay.style.visibility !== 'visible') return;
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft' && currentGallery) openGallery(currentGallery, currentIndex-1);
        if (e.key === 'ArrowRight' && currentGallery) openGallery(currentGallery, currentIndex+1);
    });
});
