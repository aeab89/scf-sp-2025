/* Sticky Navbar */
const navbar = document.getElementById("makemesticky");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})

/* Enlarged Buttons */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s ease";
        });
        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
        });
    });
});