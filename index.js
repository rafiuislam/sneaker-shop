const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.add("active-nav");
});

close.addEventListener("click", () => {
    nav.classList.remove("active-nav");
});
