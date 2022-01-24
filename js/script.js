let menu = document.querySelector('.hero__nav');
let menu_bar = document.querySelector('.menu-bar');

menu_bar.addEventListener("click", () => {
    menu.classList.toggle("menu-bar_visible")
})

