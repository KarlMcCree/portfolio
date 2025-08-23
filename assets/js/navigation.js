document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const navItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Close mobile menu when a nav link is clicked and scroll to section
    navItems.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Update active link on scroll
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Run once on page load
    updateActiveLink();
    
    // Run on scroll with throttling
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(updateActiveLink, 100);
    }, false);
});
