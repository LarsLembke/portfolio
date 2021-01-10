let image;

window.addEventListener("load", sidenVises);

const left1 = document.querySelector("#left1")
const left2 = document.querySelector("#left2")
const left3 = document.querySelector("#left3")
const left4 = document.querySelector("#left4")
const left5 = document.querySelector("#left5")
const left6 = document.querySelector("#left6")
const left7 = document.querySelector("#left7")
const left8 = document.querySelector("#left8")
const left9 = document.querySelector("#left9")



function sidenVises() {
    console.log("sidenVises");

    image = 1;

    left1.classList.add('showing');
    left2.classList.add('waiting');
    left3.classList.add('waiting');
    left4.classList.add('waiting');
    left5.classList.add('waiting');
    left6.classList.add('waiting');
    left7.classList.add('waiting');
    left8.classList.add('waiting');



    left1.classList.remove('shown');
    left2.classList.remove('shown');
    left3.classList.remove('shown');
    left4.classList.remove('shown');
    left5.classList.remove('shown');
    left6.classList.remove('shown');
    left7.classList.remove('shown');
    left8.classList.remove('shown');

    left1.addEventListener('animationend', pauseSlide);


}

function pauseSlide() {
    console.log('pauseSlide');

    this.removeEventListener('animationend', pauseSlide);

    left9.classList.remove('shown');

    this.classList.add('shown');
    this.classList.remove('showing');

    setTimeout(nextSlide, 5000);


}

function nextSlide() {
    console.log('nextSlide');

    if (image < 9) {
        image++;
        document.querySelector("#left" + image).classList.remove('waiting');
        document.querySelector("#left" + image).classList.add('showing');
        document.querySelector("#left" + image).addEventListener('animationend', pauseSlide);
    } else {
        setTimeout(sidenVises, 1);
    }




}
