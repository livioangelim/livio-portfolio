// script.js

// Navbar Elements
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const navbarLinks = document.querySelectorAll(".navbar-link");

// Sections
const sections = document.querySelectorAll("section");

// Function to handle scrolling and sticky navbar
const mainFn = () => {
    // Sticky Navbar
    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    // Active Navbar Links
    sections.forEach((section, i) => {
        if (window.scrollY >= section.offsetTop - navbar.offsetHeight - 50) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("active");
            });
            navbarLinks[i].classList.add("active");
        }
    });
};

// Smooth Scroll Functionality for Navbar Links
navbarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight;

            // Scroll manually with smooth behavior
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth' // Ensure smooth scrolling
            });
        }
    });
});


// Event listener for scrolling
window.addEventListener("scroll", mainFn);

// Initial call to set up the page correctly on load
mainFn();