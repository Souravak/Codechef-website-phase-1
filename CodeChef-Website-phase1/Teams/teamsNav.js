const nav = document.querySelector('.navbar')
const navbar = document.querySelector('.barsNavLi');
const navbarHam = document.querySelector('.navbarHamDiv');
const hero = document.querySelector('.hero');
const heroDiv = document.querySelector('.heroDiv')
const socials = document.querySelector('.socialsFloat')
const cross = document.querySelector('.nav-cross')


navbar.addEventListener('click', () => {
    navbarHam.classList.toggle('active');
    navbar.classList.toggle('none');
})

cross.addEventListener('click', () => {
    navbarHam.classList.toggle('active');
    navbar.classList.toggle('none');
})