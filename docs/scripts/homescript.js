/* Sticky Navbar */
const navbar = document.getElementById("makemesticky");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})