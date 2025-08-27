// Poem page image loading optimization
document.addEventListener('DOMContentLoaded', function() {
    const poemContent = document.querySelector('.poem-content');
    
    if (poemContent) {
        // Add loading class initially
        poemContent.classList.add('loading');
        
        // Preload the background image
        const img = new Image();
        img.onload = function() {
            // Remove loading class when image is loaded
            poemContent.classList.remove('loading');
        };
        
        img.onerror = function() {
            // If image fails to load, keep the gradient background
            poemContent.classList.remove('loading');
            console.log('Background image failed to load, using fallback gradient');
        };
        
        // Start loading the image
        img.src = '../images/header.png';
    }
});