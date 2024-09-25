// script.js

// Navbar Elements
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const navbarLinks = document.querySelectorAll(".navbar-link");

// Sections
const sections = document.querySelectorAll("section");

// Skills Section
const skillSection = document.querySelector(".skills-section");
const skillProgress = document.querySelectorAll(".skill-progress");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

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

    // Skills Animation
    if (window.scrollY + window.innerHeight >= skillSection.offsetTop) {
        skillProgress.forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
        });
    }
};

window.addEventListener("scroll", mainFn);

// Initial call to set up the page correctly on load
mainFn();
