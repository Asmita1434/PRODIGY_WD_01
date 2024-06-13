const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.menu');
const navToggle = document.querySelector('.menu-btn');
const navLink = document.querySelectorAll('.nav-link');

const pic = document.querySelector('#main-shoe');
const blue = document.querySelector('.blue');
const lightpink = document.querySelector('.lightpink');
const brown= document.querySelector('.brown');
const grey = document.querySelector('.grey');
const green = document.querySelector('.green');
const black = document.querySelector('.black');
const colors = document.querySelectorAll('.color');

// resize navbar on scroll
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

window.onload = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

// navbar toggler
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    })
}

// close menu on click item
navLink.forEach(item=> item.addEventListener('click', ()=> {
    navMenu.classList.remove('active');
}))

// store product info in object
const info = {
    blue: "./blue.jpg",
    lightpink: "./lightpink.jpg",
    brown: "./brown.jpg",
    grey: "./grey.jpg",
    green: "./green.jpg",
    black: "./black.jpg",
};


// change product color
blue.addEventListener('click', () => {
    pic.src = info['blue']
})

lightpink.addEventListener('click', () => {
    pic.src = info['lightpink'];
})

brown.addEventListener('click', () => {
    pic.src = info['brown'];
})

grey.addEventListener('click', () => {
    pic.src = info['grey'];
})

green.addEventListener('click', () => {
    pic.src = info['green'];
})

black.addEventListener('click', () => {
    pic.src = info['black'];
})


colors.forEach(c => c.addEventListener('click', function (evt) {
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}));