const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line": "ri-menu-line");
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin:"bottom",
    distance:"50px",
    duration:1000,    
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".feature-content ,.section-subheader", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".feature-content .section-header", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".feature-content p", {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".feature-btn", {
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".feature-card", {
    duration:1000,
    interval:500,
    delay:2000,
});

ScrollReveal().reveal(".banner-card", {
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".specs-card", {
    duration:1000,
    interval:500,
});

ScrollReveal().reveal(".product-content img", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".product-content p", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".product-btn", {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".product-list li", {
    duration:1000,
    interval:500,
    delay:1500,
}); 

ScrollReveal().reveal(".footer-col", {
    ...scrollRevealOption,
    origin:screenLeft,
});