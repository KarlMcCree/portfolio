/*=============== MOBILE MENU TOGGLE ===============*/
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger =document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');


// Toggle mobile menu
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        // Toggle active class on hamburger and nav menu
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}


// Toggle sidebar on menu button click
if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });
}


// Close sidebar when clicking on a nav link (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close sidebar when clicking outside (for mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024 && 
        !sidebar.contains(e.target) && 
        !menuToggle.contains(e.target) &&
        sidebar.classList.contains('active')) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
    }
});

/*=============== SKILLS TABS ===============*/
// Placeholder for skills tab switching logic

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
// Example mixitup init (commented until you add portfolio filter HTML)
/*
let mixer = mixitup('.project-grid', {
    selectors: {
        target: '.project-card'
    },
    animation: {
        duration: 300
    }
});
*/

/*===== Link Active Work =====*/
// Will highlight active project category link

/*===== Work Popup =====*/
// Will show a popup with project details

/*=============== SERVICES MODAL ===============*/
// Placeholder for modal popup functionality

/*=============== SWIPER TESTIMONIAL ===============*/
// Placeholder for Swiper testimonial slider
/*
let swiper = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
*/

/*=============== INPUT ANIMATION ===============*/
// Animates input labels when typing
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.parentNode.classList.add("focus");
    });
    input.addEventListener("blur", () => {
        if(input.value === ""){
            input.parentNode.classList.remove("focus");
        }
    });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*=============== SHOW SCROLL UP ===============*/
// Show scroll-to-top button
window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scroll-up");
    if(scrollUp){
        if(window.scrollY >= 350){
            scrollUp.classList.add("show-scroll");
        } else {
            scrollUp.classList.remove("show-scroll");
        }
    }
});
