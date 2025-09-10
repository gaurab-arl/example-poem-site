// Poem page image loading optimization
document.addEventListener('DOMContentLoaded', function() {
    // Add page enter animation
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('page-enter');
    }
    
    const poemContent = document.querySelector('.poem-content');
    
    if (poemContent) {
        // Add loading class initially
        poemContent.classList.add('loading');
        
        // Preload the background image
        const img = new Image();
        img.onload = function() {
            // Remove loading class when image is loaded
            poemContent.classList.remove('loading');
            poemContent.classList.add('loaded');
        };
        
        img.onerror = function() {
            // If image fails to load, keep the gradient background
            poemContent.classList.remove('loading');
            poemContent.classList.add('loaded');
            console.log('Background image failed to load, using fallback gradient');
        };
        
        // Start loading the image
        img.src = 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    } else {
        // If no poem content, still add loaded class for consistency
        setTimeout(() => {
            if (poemContent) {
                poemContent.classList.add('loaded');
            }
        }, 500);
    }
    
    // Enhanced smooth scrolling for back button
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            // Add click feedback
            this.style.transform = 'translateY(-1px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }, 100);
        });
    }
});