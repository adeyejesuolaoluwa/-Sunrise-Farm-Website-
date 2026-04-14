// =====================================================
// SUNRISE FARM - JAVASCRIPT INTERACTIVITY
// =====================================================

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// =====================================================
// DYNAMIC PRICING - INCREASES EVERY 5 MONTHS (NIGERIAN NAIRA)
// ===================================================== 

const updateDynamicPrices = () => {
    // Reference date: January 1, 2024 (start date for price tracking)
    const referenceDate = new Date('2024-01-01');
    const currentDate = new Date();
    
    // Calculate months difference
    let monthsDiff = (currentDate.getFullYear() - referenceDate.getFullYear()) * 12;
    monthsDiff += currentDate.getMonth() - referenceDate.getMonth();
    
    // Calculate how many 5-month periods have passed
    const priceIncrementPeriods = Math.floor(monthsDiff / 5);
    
    // Price increase: 5% per 5-month period
    const priceMultiplier = Math.pow(1.05, priceIncrementPeriods);
    
    // Update all prices
    const priceElements = document.querySelectorAll('.price[data-base-price]');
    priceElements.forEach(priceEl => {
        const basePrice = parseInt(priceEl.getAttribute('data-base-price'));
        const currentPrice = Math.round(basePrice * priceMultiplier);
        
        // Format price text
        const priceUnitSpan = priceEl.querySelector('.price-unit');
        priceEl.textContent = '₦' + currentPrice.toLocaleString('en-US');
        if (priceUnitSpan) {
            priceEl.appendChild(priceUnitSpan);
        }
        
        // Store current price for reference
        priceEl.setAttribute('data-current-price', currentPrice);
    });
    
    // Log pricing info
    console.log(`📊 Dynamic Pricing Updated: ${priceIncrementPeriods} price increase periods passed. Multiplier: ${priceMultiplier.toFixed(3)}x`);
};

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDynamicPrices);
} else {
    updateDynamicPrices();
}

// =====================================================
// MOBILE MENU TOGGLE
// =====================================================

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// =====================================================
// ANIMATED COUNTERS FOR STATISTICS
// =====================================================

const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50; // 50 steps for animation
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };
        
        // Intersection Observer to trigger animation when section is visible
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    updateCount();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
};

// Call animation when DOM is loaded
document.addEventListener('DOMContentLoaded', animateCounters);

// =====================================================
// CONTACT FORM HANDLING
// =====================================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const product = document.getElementById('product').value;
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (in real scenario, send to backend)
    const formData = {
        name: name,
        email: email,
        phone: phone,
        product: product,
        message: message,
        timestamp: new Date().toLocaleString()
    };
    
    console.log('Form submitted:', formData);
    
    // Show success message
    showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = '';
    }, 5000);
});

// Form helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
}

// =====================================================
// CONTACT FORM FROM PRODUCT CARDS
// =====================================================

function contactForm(productType) {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Set the product field if it exists
    const productSelect = document.getElementById('product');
    if (productSelect) {
        productSelect.value = productType;
    }
    
    // Focus on the message field
    setTimeout(() => {
        document.getElementById('message').focus();
    }, 500);
}

// =====================================================
// NEWSLETTER SUBSCRIPTION
// =====================================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (isValidEmail(email)) {
            alert('Thank you for subscribing! Check your email for confirmation.');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// =====================================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =====================================================
// SCROLL ANIMATIONS - FADE IN ON SCROLL
// =====================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.animal-card, .service-card, .testimonial-card, .illness-card, .value-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// =====================================================
// DYNAMIC YEAR IN FOOTER
// =====================================================

const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.textContent = footerYear.textContent.replace('2024', year);
}

// =====================================================
// ACTIVE NAVIGATION LINK HIGHLIGHT
// ===================================================== 

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === `#${current}`) {
            link.classList.add('active');
            link.style.color = '#FFD700';
        } else {
            link.style.color = 'white';
        }
    });
});

// =====================================================
// FORM INPUT FOCUS EFFECTS
// ===================================================== 

const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 0 3px rgba(255, 140, 66, 0.2)';
    });
    
    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
    });
});

// =====================================================
// BUTTON RIPPLE EFFECT
// ===================================================== 

function addRippleEffect(btn) {
    btn.addEventListener('mousedown', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles
        if (!document.querySelector('style[data-ripple]')) {
            const style = document.createElement('style');
            style.setAttribute('data-ripple', 'true');
            style.textContent = `
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s ease-out;
                    pointer-events: none;
                }
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
    });
}

// Apply ripple effect to buttons
document.querySelectorAll('button').forEach(btn => {
    addRippleEffect(btn);
});

// =====================================================
// LAZY LOADING FOR IMAGES (if needed)
// ===================================================== 

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// =====================================================
// KEYBOARD NAVIGATION
// ===================================================== 

document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// =====================================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ===================================================== 

let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Performance-intensive operations can go here
    }, 100);
});

// =====================================================
// ACCESSIBILITY: SKIP TO MAIN CONTENT
// ===================================================== 

const skipLink = document.createElement('a');
skipLink.href = '#animals';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// =====================================================
// PRINT FRIENDLY STYLES
// ===================================================== 

const style = document.createElement('style');
style.textContent = `
    @media print {
        .navbar, .hero-scroll, .contact-form button, .cta-button {
            display: none;
        }
        body {
            font-size: 12pt;
            color: black;
            background: white;
        }
    }
`;
document.head.appendChild(style);

// =====================================================
// INITIALIZATION
// ===================================================== 

document.addEventListener('DOMContentLoaded', () => {
    // Add loading animations to elements
    const elements = document.querySelectorAll('section, .animal-card, .service-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    console.log('🌅 Sunrise Farm Website loaded successfully!');
    console.log('💱 Dynamic Nigerian Naira pricing active - prices increase 5% every 5 months');
});

// =====================================================
// SERVICE WORKER REGISTRATION (Optional PWA Support)
// ===================================================== 

if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA support
    // navigator.serviceWorker.register('sw.js').catch(() => {});
}

// =====================================================
// DARK MODE TOGGLE (Optional Feature)
// ===================================================== 

function enableDarkMode() {
    // This is an optional feature that can be added
    // Toggle dark mode with localStorage persistence
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Uncomment to enable dark mode
// enableDarkMode();
