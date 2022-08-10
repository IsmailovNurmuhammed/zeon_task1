const burger = document.querySelector("#mobile-burger");
const menu = document.querySelector(".nav");
const outside = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
    burger.classList.contains("active")
        ? (outside.style.overflow = "visible")
        : (outside.style.overflow = "hidden");
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        burger.classList.contains("active")
            ? (outside.style.overflow = "visible")
            : (outside.style.overflow = "hidden");
        burger.classList.toggle("active");
        menu.classList.toggle("active");
    });
}
