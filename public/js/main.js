document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);

    // Compact navigation on narrow screens
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('site-nav-menu');

    if (navToggle && navMenu) {
        function setMenuOpen(open) {
            navToggle.setAttribute('aria-expanded', String(open));
            navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            navMenu.classList.toggle('is-open', open);
        }

        const toggleMenu = () => {
            setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
        };

        // Touch pointerup arrives before the browser's synthesized click.
        let lastTouchToggle = -Infinity;
        navToggle.addEventListener('pointerup', event => {
            if (event.pointerType !== 'touch') return;
            lastTouchToggle = performance.now();
            toggleMenu();
        });

        navToggle.addEventListener('click', event => {
            // Keep the click path for mouse and keyboard without toggling twice on touch.
            if (event.detail !== 0 && performance.now() - lastTouchToggle < 1000) return;
            toggleMenu();
        });

        navMenu.addEventListener('click', event => {
            if (event.target.closest('a')) setMenuOpen(false);
        });

        document.addEventListener('pointerdown', event => {
            if (!event.target.closest('.nav-container')) setMenuOpen(false);
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
                setMenuOpen(false);
                navToggle.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 700) setMenuOpen(false);
        });
    }


    // 2. Active Link Highlighting (ScrollSpy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightLink() {
        let scrollPosition = window.scrollY + 150; 
        let activeLink = null;

        // Logic to force last link active if at bottom of page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            activeLink = navLinks[navLinks.length - 1];
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                }
            });
        }

        navLinks.forEach(link => link.classList.toggle('active', link === activeLink));
    }
    window.addEventListener('scroll', highlightLink);
    window.addEventListener('load', () => {
        handleScroll();
        highlightLink();
    });


    // 3. Intersection Observer (Reveal on Scroll)
    const revealElements = document.querySelectorAll('.reveal-item');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // 4. Dynamic Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // 5. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, /* Adjusted offset for bigger header */
                    behavior: 'smooth'
                });
            }
        });
    });
});
