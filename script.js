function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); /*it will toggle "open" class */
    icon.classList.toggle("open");
}