window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector(".burger").addEventListener("click", toggleMenu);

};

function toggleMenu() {
    console.log("toggleMenu");
    const nav = document.querySelector('.nav-links');

    nav.classList.toggle('nav-active');
    document.querySelector(".burger").classList.toggle('toggle');
    document.querySelector("body").classList.toggle('overflow');



}
