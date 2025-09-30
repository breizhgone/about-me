// Language Toggle Functionality
class LanguageToggle {
    constructor() {
        this.currentLang = 'fr';
        this.langButton = document.getElementById('lang-toggle');
        this.init();
    }

    init() {
        this.langButton.addEventListener('click', () => this.toggleLanguage());
        this.updateContent();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
        this.updateContent();
        this.langButton.textContent = this.currentLang === 'fr' ? 'EN' : 'FR';
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-fr][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update document language
        document.documentElement.lang = this.currentLang;
    }
}

// Mobile Navigation
class MobileNavigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// Smooth Scrolling for Navigation Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        // Add fade-in class to elements and observe them
        const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .contact-method');
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            this.observer.observe(el);
        });
    }
}

// Navbar Background on Scroll
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                this.navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                this.navbar.style.boxShadow = 'none';
            }
        });
    }
}

// Typing Animation for Hero Title
class TypingAnimation {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.originalText = this.heroTitle.textContent;
        this.init();
    }

    init() {
        this.heroTitle.textContent = '';
        this.typeText(this.originalText, 0);
    }

    typeText(text, index) {
        if (index < text.length) {
            this.heroTitle.textContent += text.charAt(index);
            setTimeout(() => this.typeText(text, index + 1), 100);
        }
    }
}

// Tech Stack Hover Effects
class TechStackEffects {
    constructor() {
        this.init();
    }

    init() {
        const techTags = document.querySelectorAll('.tech-tag, .tech-badge');
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'scale(1.1)';
                tag.style.transition = 'transform 0.3s ease';
            });

            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'scale(1)';
            });
        });
    }
}

// Parallax Effect for Hero Section
class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            this.hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Contact Form Animation (if you add a form later)
class ContactFormAnimation {
    constructor() {
        this.init();
    }

    init() {
        const contactMethods = document.querySelectorAll('.contact-method');
        contactMethods.forEach((method, index) => {
            method.style.animationDelay = `${index * 0.2}s`;
            method.classList.add('contact-animate');
        });
    }
}

// Image Modal Functionality
class ImageModal {
    constructor() {
        this.modal = document.getElementById('imageModal');
        this.modalImg = document.getElementById('modalImage');
        this.modalCaption = document.getElementById('modalCaption');
        this.closeBtn = document.querySelector('.close');
        this.init();
    }

    init() {
        // Add click event to all gallery images
        const galleryImages = document.querySelectorAll('.gallery-img');
        galleryImages.forEach(img => {
            img.addEventListener('click', (e) => {
                this.openModal(e.target);
            });
        });

        // Close modal events
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    openModal(img) {
        this.modal.style.display = 'block';
        this.modalImg.src = img.src;
        this.modalCaption.textContent = img.alt;
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Photo Hover Effects
class PhotoEffects {
    constructor() {
        this.init();
    }

    init() {
        // Profile photo rotation effect
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.addEventListener('mouseenter', () => {
                profileImg.style.transform = 'scale(1.05) rotate(5deg)';
            });
            
            profileImg.addEventListener('mouseleave', () => {
                profileImg.style.transform = 'scale(1) rotate(0deg)';
            });
        }

        // Gallery images tilt effect
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }
}

// Lazy Loading for Images
class LazyLoading {
    constructor() {
        this.imageObserver = null;
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        this.imageObserver.unobserve(img);
                    }
                });
            });

            const images = document.querySelectorAll('img');
            images.forEach(img => {
                this.imageObserver.observe(img);
            });
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageToggle();
    new MobileNavigation();
    new SmoothScroll();
    new ScrollAnimations();
    new NavbarScroll();
    new TypingAnimation();
    new TechStackEffects();
    new ParallaxEffect();
    new ContactFormAnimation();
    new ImageModal();
    new PhotoEffects();
    new LazyLoading();

    // Add loading animation
    document.body.classList.add('loaded');
});

// Add CSS for additional animations
const additionalStyles = `
    .contact-animate {
        animation: slideInUp 0.6s ease forwards;
        opacity: 0;
        transform: translateY(30px);
    }

    @keyframes slideInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    body.loaded {
        opacity: 1;
    }

    .tech-tag, .tech-badge {
        cursor: pointer;
    }

    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    img.loaded {
        opacity: 1;
    }

    .gallery-item {
        transition: all 0.3s ease;
    }

    .timeline-item {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 0.6s ease;
    }

    .timeline-item:nth-child(even) {
        transform: translateX(50px);
    }

    .timeline-item.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .skill-category {
        transition: all 0.3s ease;
    }

    .skill-category:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const mobileNav = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-based animations can be added here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);