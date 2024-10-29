window.addEventListener("scroll", function () {
    const yOffset = window.pageYOffset;
    const hero = document.querySelector(".hero");

    // Adjust the background position based on scroll position
    hero.style.backgroundPositionY = yOffset * 0.5 + "px";
});