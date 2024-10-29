window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY >= .3 * window.innerHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});