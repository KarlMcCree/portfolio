document.addEventListener('DOMContentLoaded', function() {
    const introOverlay = document.querySelector('.intro-overlay');
    const mainContent = document.querySelector('.main');
    
    // Function to handle the intro animation sequence
    function runIntroAnimation() {
        // Ensure the overlay is visible at the start
        introOverlay.style.display = 'flex';
        introOverlay.classList.remove('hidden');
        mainContent.classList.remove('visible');
        
        // Start the animation sequence after a small delay
        setTimeout(function() {
            // Add 'hidden' class to fade out the intro overlay
            introOverlay.classList.add('hidden');
            
            // Show the main content with a fade-in effect
            setTimeout(function() {
                mainContent.classList.add('visible');
                
                // Hide the intro overlay after animation completes
                setTimeout(function() {
                    introOverlay.style.display = 'none';
                }, 1000); // Match this with the CSS transition duration
                
            }, 1500); // Start showing main content slightly before intro fully fades
            
        }, 4000); // Total intro duration: 4 seconds
    }
    
    // Run the animation when the page loads
    window.addEventListener('load', function() {
        // Always run the animation on page load
        runIntroAnimation();
    });
    
    // Add a small delay to ensure all assets are loaded
    setTimeout(runIntroAnimation, 100);
});
