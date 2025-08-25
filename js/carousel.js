/**
 * GoLeverage Website - Carousel JavaScript
 * 
 * This file contains the functionality for the AI quotes carousel
 * with auto-rotation and navigation controls.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initQuotesCarousel();
});

/**
 * AI Quotes Carousel
 */
function initQuotesCarousel() {
    const quotes = document.querySelectorAll('.quote');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentIndex = 0;
    let interval;
    let isHovered = false;
    
    // Skip if no quotes found
    if (!quotes.length) return;
    
    // Function to show a specific quote
    function showQuote(index) {
        // Hide all quotes
        quotes.forEach(quote => {
            quote.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected quote
        quotes[index].classList.add('active');
        
        // Add active class to the corresponding dot
        dots[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }
    
    // Function to show the next quote
    function nextQuote() {
        if (isHovered) return;
        
        let nextIndex = currentIndex + 1;
        if (nextIndex >= quotes.length) {
            nextIndex = 0;
        }
        
        showQuote(nextIndex);
    }
    
    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showQuote(index);
            resetInterval();
        });
    });
    
    // Start auto-rotation
    function startInterval() {
        interval = setInterval(nextQuote, 5000); // Change quote every 5 seconds
    }
    
    // Reset interval
    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }
    
    // Add hover pause functionality
    const carouselContainer = document.querySelector('.quotes-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            isHovered = true;
        });
        
        carouselContainer.addEventListener('mouseleave', function() {
            isHovered = false;
        });
    }
    
    // Initialize carousel
    showQuote(0);
    startInterval();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Only if carousel is in viewport
        const carouselRect = carouselContainer?.getBoundingClientRect();
        if (!carouselRect) return;
        
        const isInViewport = (
            carouselRect.top >= 0 &&
            carouselRect.left >= 0 &&
            carouselRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            carouselRect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        if (!isInViewport) return;
        
        if (e.key === 'ArrowLeft') {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = quotes.length - 1;
            }
            showQuote(prevIndex);
            resetInterval();
        } else if (e.key === 'ArrowRight') {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= quotes.length) {
                nextIndex = 0;
            }
            showQuote(nextIndex);
            resetInterval();
        }
    });
    
    // Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        carouselContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left, show next
            let nextIndex = currentIndex + 1;
            if (nextIndex >= quotes.length) {
                nextIndex = 0;
            }
            showQuote(nextIndex);
            resetInterval();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right, show previous
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = quotes.length - 1;
            }
            showQuote(prevIndex);
            resetInterval();
        }
    }
}

