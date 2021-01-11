let imageLeft;
let imageRight;

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


const right1 = document.querySelector("#right1")
const right2 = document.querySelector("#right2")
const right3 = document.querySelector("#right3")
const right4 = document.querySelector("#right4")
const right5 = document.querySelector("#right5")
const right6 = document.querySelector("#right6")
const right7 = document.querySelector("#right7")
const right8 = document.querySelector("#right8")
const right9 = document.querySelector("#right9")



function sidenVises() {
    console.log("sidenVises");


    imageLeft = 1;
    imageRight = 1;

    left1.removeEventListener('animationend', pauseSlideLeft);
    left2.removeEventListener('animationend', pauseSlideLeft);
    left3.removeEventListener('animationend', pauseSlideLeft);
    left4.removeEventListener('animationend', pauseSlideLeft);
    left5.removeEventListener('animationend', pauseSlideLeft);
    left6.removeEventListener('animationend', pauseSlideLeft);
    left7.removeEventListener('animationend', pauseSlideLeft);
    left8.removeEventListener('animationend', pauseSlideLeft);


    right1.removeEventListener('animationend', pauseSlideRight);
    right2.removeEventListener('animationend', pauseSlideRight);
    right3.removeEventListener('animationend', pauseSlideRight);
    right4.removeEventListener('animationend', pauseSlideRight);
    right5.removeEventListener('animationend', pauseSlideRight);
    right6.removeEventListener('animationend', pauseSlideRight);
    right7.removeEventListener('animationend', pauseSlideRight);
    right8.removeEventListener('animationend', pauseSlideRight);



    left1.offsetLeft;
    left2.offsetLeft;
    left3.offsetLeft;
    left4.offsetLeft;
    left5.offsetLeft;
    left6.offsetLeft;
    left7.offsetLeft;
    left8.offsetLeft;
    right1.offsetLeft;
    right2.offsetLeft;
    right3.offsetLeft;
    right4.offsetLeft;
    right5.offsetLeft;
    right6.offsetLeft;
    right7.offsetLeft;
    right8.offsetLeft;





    left1.classList.add('waiting');
    left2.classList.add('waiting');
    left3.classList.add('waiting');
    left4.classList.add('waiting');
    left5.classList.add('waiting');
    left6.classList.add('waiting');
    left7.classList.add('waiting');
    left8.classList.add('waiting');
    left9.classList.add('waiting');



    left1.classList.remove('shown');
    left2.classList.remove('shown');
    left3.classList.remove('shown');
    left4.classList.remove('shown');
    left5.classList.remove('shown');
    left6.classList.remove('shown');
    left7.classList.remove('shown');
    left8.classList.remove('shown');
    left9.classList.remove('shown');


    document.querySelector("#left" + imageLeft).classList.remove('waiting');
    document.querySelector("#left" + imageLeft).classList.add('showing');
    document.querySelector("#left" + imageLeft).addEventListener('animationend', pauseSlideLeft);




    right1.classList.add('waiting');
    right2.classList.add('waiting');
    right3.classList.add('waiting');
    right4.classList.add('waiting');
    right5.classList.add('waiting');
    right6.classList.add('waiting');
    right7.classList.add('waiting');
    right8.classList.add('waiting');
    right9.classList.add('waiting');



    right1.classList.remove('shown');
    right2.classList.remove('shown');
    right3.classList.remove('shown');
    right4.classList.remove('shown');
    right5.classList.remove('shown');
    right6.classList.remove('shown');
    right7.classList.remove('shown');
    right8.classList.remove('shown');
    right9.classList.remove('shown');


    document.querySelector("#right" + imageRight).classList.remove('waiting');
    document.querySelector("#right" + imageRight).classList.add('showing');
    document.querySelector("#right" + imageRight).addEventListener('animationend', pauseSlideRight);


}

function pauseSlideLeft() {
    console.log('pauseSlideLeft');

    this.removeEventListener('animationend', pauseSlideLeft);

    this.classList.add('shown');
    this.classList.remove('showing');
    this.classList.remove('waiting');

    setTimeout(nextSlideLeft, 5000);


}

function nextSlideLeft() {
    console.log('nextSlideLeft');

    if (imageLeft < 9) {
        imageLeft++;
        document.querySelector("#left" + imageLeft).classList.remove('waiting');
        document.querySelector("#left" + imageLeft).classList.add('showing');
        document.querySelector("#left" + imageLeft).addEventListener('animationend', pauseSlideLeft);
    } else {
        setTimeout(restartSlideLeft, 1);
    }




}

function pauseSlideRight() {
    console.log('pauseSlideRight');

    this.removeEventListener('animationend', pauseSlideRight);

    this.classList.add('shown');
    this.classList.remove('showing');
    this.classList.remove('waiting');

    setTimeout(nextSlideRight, 5000);


}

function nextSlideRight() {
    console.log('nextSlideRight');

    if (imageRight < 9) {
        imageRight++;
        document.querySelector("#right" + imageRight).classList.remove('waiting');
        document.querySelector("#right" + imageRight).classList.add('showing');
        document.querySelector("#right" + imageRight).addEventListener('animationend', pauseSlideRight);
    } else {
        setTimeout(restartSlideRight, 1);
    }




}


function restartSlideLeft() {
    console.log('restartSlideLeft');

    imageLeft = 1;

    left1.removeEventListener('animationend', pauseSlideLeft);
    left2.removeEventListener('animationend', pauseSlideLeft);
    left3.removeEventListener('animationend', pauseSlideLeft);
    left4.removeEventListener('animationend', pauseSlideLeft);
    left5.removeEventListener('animationend', pauseSlideLeft);
    left6.removeEventListener('animationend', pauseSlideLeft);
    left7.removeEventListener('animationend', pauseSlideLeft);
    left8.removeEventListener('animationend', pauseSlideLeft);



    left1.offsetLeft;
    left2.offsetLeft;
    left3.offsetLeft;
    left4.offsetLeft;
    left5.offsetLeft;
    left6.offsetLeft;
    left7.offsetLeft;
    left8.offsetLeft;




    left1.classList.add('waiting');
    left2.classList.add('waiting');
    left3.classList.add('waiting');
    left4.classList.add('waiting');
    left5.classList.add('waiting');
    left6.classList.add('waiting');
    left7.classList.add('waiting');
    left8.classList.add('waiting');
    left9.classList.add('waiting');



    left1.classList.remove('shown');
    left2.classList.remove('shown');
    left3.classList.remove('shown');
    left4.classList.remove('shown');
    left5.classList.remove('shown');
    left6.classList.remove('shown');
    left7.classList.remove('shown');
    left8.classList.remove('shown');
    left9.classList.remove('shown');


    document.querySelector("#left" + imageLeft).classList.remove('waiting');
    document.querySelector("#left" + imageLeft).classList.add('showing');
    document.querySelector("#left" + imageLeft).addEventListener('animationend', pauseSlideLeft);
}


function restartSlideRight() {
    console.log('restartSlideRight');



    imageRight = 1;



    right1.removeEventListener('animationend', pauseSlideRight);
    right2.removeEventListener('animationend', pauseSlideRight);
    right3.removeEventListener('animationend', pauseSlideRight);
    right4.removeEventListener('animationend', pauseSlideRight);
    right5.removeEventListener('animationend', pauseSlideRight);
    right6.removeEventListener('animationend', pauseSlideRight);
    right7.removeEventListener('animationend', pauseSlideRight);
    right8.removeEventListener('animationend', pauseSlideRight);

    right1.offsetLeft;
    right2.offsetLeft;
    right3.offsetLeft;
    right4.offsetLeft;
    right5.offsetLeft;
    right6.offsetLeft;
    right7.offsetLeft;
    right8.offsetLeft;
    right9.offsetLeft;


    right1.classList.add('waiting');
    right2.classList.add('waiting');
    right3.classList.add('waiting');
    right4.classList.add('waiting');
    right5.classList.add('waiting');
    right6.classList.add('waiting');
    right7.classList.add('waiting');
    right8.classList.add('waiting');
    right9.classList.add('waiting');



    right1.classList.remove('shown');
    right2.classList.remove('shown');
    right3.classList.remove('shown');
    right4.classList.remove('shown');
    right5.classList.remove('shown');
    right6.classList.remove('shown');
    right7.classList.remove('shown');
    right8.classList.remove('shown');
    right9.classList.remove('shown');


    document.querySelector("#right" + imageRight).classList.remove('waiting');
    document.querySelector("#right" + imageRight).classList.add('showing');
    document.querySelector("#right" + imageRight).addEventListener('animationend', pauseSlideRight);
}
