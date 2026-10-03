// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.querySelector(".navbar nav");

        nav.classList.remove("active");

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    links.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .experience-item, .about-container, .contact-box"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});