// ===================================
// Shine Peak Website - Main JavaScript
// Optimized for SEO & User Experience
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const topBarHeight = document.querySelector('.top-bar').offsetHeight;
                const totalOffset = navHeight + topBarHeight;
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Counter Animation for Stats
    // ===================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + '+';
            }
        }, 16);
    }
    
    // Intersection Observer for counter animation
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = document.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // Back to Top Button
    // ===================================
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('inquiryForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            const requiredFields = ['name', 'email', 'company', 'product_interest', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!formObject[field] || formObject[field].trim() === '') {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                    setTimeout(() => {
                        input.style.borderColor = '#ddd';
                    }, 3000);
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObject.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In production, you would send this data to your server
            // Example: sendToServer(formObject);
            
            // Show success message
            alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
            
            // Reset form
            this.reset();
            
            // Track form submission (Google Analytics example)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    'event_category': 'Contact',
                    'event_label': 'Inquiry Form'
                });
            }
        });
    }
    
    // ===================================
    // Lazy Loading Images
    // ===================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===================================
    // Product Card Hover Effects
    // ===================================
    const productCards = document.querySelectorAll('.category-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===================================
    // Social Media Share Tracking
    // ===================================
    const socialLinks = document.querySelectorAll('.social-icons a, .social-icons-top a, .footer-social a');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Track social media clicks
            const platform = this.getAttribute('aria-label') || 'Unknown';
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'social_click', {
                    'event_category': 'Social Media',
                    'event_label': platform
                });
            }
        });
    });
    
    // ===================================
    // WhatsApp Button Tracking
    // ===================================
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .floating-whatsapp, .btn-whatsapp');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'Contact',
                    'event_label': 'WhatsApp Button'
                });
            }
        });
    });
    
    // ===================================
    // Schema.org Structured Data Injection
    // ===================================
    function injectStructuredData() {
        // Product schema for rich snippets
        const productSchema = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Product",
                        "name": "Bagasse Tableware",
                        "description": "Eco-friendly sugarcane pulp products. 100% biodegradable & compostable.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Shine Peak"
                        },
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock"
                        }
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Product",
                        "name": "Kraft Paper Tableware",
                        "description": "Durable kraft paper bowls, cups & containers. Recyclable & eco-friendly.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Shine Peak"
                        }
                    }
                }
            ]
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(productSchema);
        document.head.appendChild(script);
    }
    
    injectStructuredData();
    
    // ===================================
    // Performance Optimization
    // ===================================
    
    // Preload critical images
    function preloadImage(url) {
        const img = new Image();
        img.src = url;
    }
    
    // Preload hero background
    preloadImage('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80');
    
    // ===================================
    // SEO: Dynamic Meta Tags for Social Sharing
    // ===================================
    function updateMetaTags(title, description, image) {
        document.title = title;
        document.querySelector('meta[name="description"]').setAttribute('content', description);
        document.querySelector('meta[property="og:title"]').setAttribute('content', title);
        document.querySelector('meta[property="og:description"]').setAttribute('content', description);
        if (image) {
            document.querySelector('meta[property="og:image"]').setAttribute('content', image);
        }
    }
    
    // ===================================
    // Google Maps Integration (if needed)
    // ===================================
    function initMap() {
        // Add your Google Maps API key and coordinates
        // This is a placeholder for future implementation
    }
    
    // ===================================
    // Console Message for Recruiters
    // ===================================
    console.log('%c🌱 Shine Peak - Eco-Friendly Tableware', 'font-size: 20px; color: #2d5016; font-weight: bold;');
    console.log('%cWebsite optimized for SEO & Social Media Marketing', 'font-size: 14px; color: #4a7c28;');
    console.log('%c-------------------------------------------', 'color: #ccc;');
    
    // ===================================
    // Page Load Time Tracking
    // ===================================
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page load time: ${pageLoadTime}ms`);
            
            // Send to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_load_time', {
                    'value': pageLoadTime,
                    'custom_parameter': 'load_speed'
                });
            }
        }, 0);
    });
    
}); // End of DOMContentLoaded

// ===================================
// Utility Functions
// ===================================

// Debounce function for scroll/resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { debounce, throttle };
}
