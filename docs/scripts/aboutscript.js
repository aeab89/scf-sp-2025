/* Sticky Navbar */
const navbar = document.getElementById("makemesticky");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})

/* Scroll Reveal */
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about-content > *");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.9) {
                section.classList.add("visible");
            }
        })
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
})