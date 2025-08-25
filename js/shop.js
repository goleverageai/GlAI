/**
 * GoLeverage Website - Shop JavaScript
 * 
 * This file contains the functionality for the shop page,
 * including category filtering and product display.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initShopFilters();
    initProductCards();
});

/**
 * Shop Category Filters
 */
function initShopFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    // Skip if no filter buttons or products found
    if (!filterButtons.length || !productCards.length) return;
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected category
            const selectedCategory = this.getAttribute('data-category');
            
            // Filter products
            filterProducts(selectedCategory);
        });
    });
    
    // Filter products function
    function filterProducts(category) {
        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                
                // Add animation
                card.classList.remove('fade-in');
                void card.offsetWidth; // Trigger reflow
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    }
}

/**
 * Product Cards Functionality
 */
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
        
        // Buy button click handler
        const buyButton = card.querySelector('.buy-btn');
        if (buyButton) {
            buyButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get product info
                const productName = card.querySelector('h3').textContent;
                const productPrice = card.querySelector('.product-price').textContent;
                
                // Show alert for demo purposes
                alert(`Thank you for your interest in "${productName}" (${productPrice})! In a real implementation, this would add the item to your cart.`);
            });
        }
    });
}

/**
 * Shopping Cart Functionality (Basic)
 */
function initShoppingCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartItems = [];
    
    // Add to cart function
    window.addToCart = function(productId, productName, productPrice) {
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice
        });
        
        // Update cart icon
        updateCartIcon();
        
        // Show notification
        showNotification(`Added "${productName}" to cart!`);
    };
    
    // Update cart icon
    function updateCartIcon() {
        if (cartIcon) {
            // Add item count badge
            let badge = cartIcon.querySelector('.cart-badge');
            
            if (!badge && cartItems.length > 0) {
                badge = document.createElement('span');
                badge.classList.add('cart-badge');
                cartIcon.appendChild(badge);
            }
            
            if (badge) {
                badge.textContent = cartItems.length;
                
                if (cartItems.length === 0) {
                    badge.remove();
                }
            }
        }
    }
    
    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            
            // Remove from DOM after animation
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

