document.addEventListener('DOMContentLoaded', function() {
    // Array of titles to cycle through
    const titles = [
        'Web Developer',
        'UI/UX Designer',
        'IoT Engineer',
        'Embedded Systems Enthusiast',
        'PCB Designer',
        'Tech Innovator'
    ];

    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Typing speed in milliseconds
    let deleteSpeed = 50;  // Deleting speed in milliseconds
    let pauseBetween = 2000; // Pause between texts in milliseconds

    function type() {
        const currentTitle = titles[titleIndex];
        
        // If we're typing
        if (!isDeleting && charIndex < currentTitle.length) {
            typingText.textContent += currentTitle.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } 
        // If we're done typing, wait and start deleting
        else if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            cursor.style.animation = 'none';
            setTimeout(() => {
                cursor.style.animation = 'blink 0.7s infinite';
                type();
            }, pauseBetween);
        } 
        // If we're deleting
        else if (isDeleting && charIndex > 0) {
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deleteSpeed);
        } 
        // If we're done deleting, move to next title
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(type, 300);
        }
    }

    // Start the typing effect after the intro animation
    setTimeout(type, 1500);
});
