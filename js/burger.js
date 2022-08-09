const burger = document.getElementById("mobile-burger");
let menu = document.querySelector(".nav");
const outside = document.querySelector("body");

burger.addEventListener("click", function () {
    if (burger.classList.contains("active")) {
        outside.style.overflow = "visible";
    } else {
        outside.style.overflow = "hidden";
    }
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});
