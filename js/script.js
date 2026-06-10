/* ===================================
   Shine Peak - Main JavaScript
   Mobile navigation, smooth scroll, animations
   =================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (navOverlay) navOverlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', toggleMenu);
    }

    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // ===================================
    // Smooth Scrolling
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                var navHeight = document.querySelector('.navbar').offsetHeight;
                var topBarHeight = document.querySelector('.top-bar').offsetHeight;
                var totalOffset = navHeight + topBarHeight + 10;

                var elementPosition = targetElement.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - totalOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Counter Animation
    // ===================================
    function animateCounter(element, target, duration) {
        duration = duration || 2000;
        var start = 0;
        var increment = target / (duration / 16);
        var timer = setInterval(function() {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + '+';
            }
        }, 16);
    }

    var statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var counters = document.querySelectorAll('.stat-number');
                    counters.forEach(function(counter) {
                        var target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // ===================================
    // Navbar Scroll Hide/Show
    // ===================================
    var navbar = document.querySelector('.navbar');
    var lastScroll = 0;

    if (navbar) {
        window.addEventListener('scroll', function() {
            var currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                return;
            }

            if (currentScroll > lastScroll && currentScroll > 120) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
                navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.1)';
            }

            lastScroll = currentScroll;
        });
    }

    // ===================================
    // Back to Top Button
    // ===================================
    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
