/**
 * GoLeverage Website - Main JavaScript
 * 
 * This file contains the core JavaScript functionality for the website,
 * including navigation, scroll effects, and general UI interactions.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initScrollAnimations();
    initFaqAccordion();
    initSmoothScroll();
    initRevealElements();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Header shadow on scroll
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Reveal elements on scroll
        revealElements();
    });
    
    // Trigger once on load
    setTimeout(revealElements, 100);
}

/**
 * Reveal Elements on Scroll
 */
function initRevealElements() {
    // Add reveal classes to elements
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        // Add different reveal classes to alternate sections
        if (index % 2 === 0) {
            section.classList.add('reveal');
        } else {
            section.classList.add('reveal');
        }
    });
    
    // Add reveal classes to cards and elements
    const cards = document.querySelectorAll('.service-card, .benefit-card, .indicator, .pricing-card, .package-card, .product-card, .metric-card, .process-step');
    cards.forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

/**
 * Reveal Elements Function
 */
function revealElements() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                
                // Update icon
                const icon = this.querySelector('.faq-toggle i');
                if (icon) {
                    if (item.classList.contains('active')) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                    } else {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                }
            });
        }
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Buy Now Button Click Handler
 */
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('buy-btn')) {
        e.preventDefault();
        
        // Get product info
        const productCard = e.target.closest('.product-card');
        const productName = productCard ? productCard.querySelector('h3').textContent : 'Product';
        
        // Show alert for demo purposes
        alert(`Thank you for your interest in "${productName}"! In a real implementation, this would add the item to your cart.`);
    }
});

/**
 * Contact Form Modal (if needed)
 */
function initContactModal() {
    const contactButtons = document.querySelectorAll('[data-modal="contact"]');
    const modal = document.querySelector('.modal-contact');
    
    if (modal && contactButtons.length > 0) {
        // Open modal
        contactButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.add('active');
                document.body.classList.add('modal-open');
            });
        });
        
        // Close modal
        const closeButtons = modal.querySelectorAll('.modal-close');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
            });
        });
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        });
    }
}

