/*TypeWriter*/
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.changeCursor(' ').typeString('LEARNING')
    .pauseFor(2500)
    .deleteAll()
    .typeString('DEVELOPING')
    .pauseFor(2500)
    .deleteAll()
    .typeString('SHARING')
    .pauseFor(2500)
    .deleteAll()
    .typeString('INFLUENCING')
    .pauseFor(2500)
    .start();

/*Scroll to Top */
const scrollTop = document.querySelector(".scroll-to-top");

const buttonVisibility = () => {
    if (document.documentElement.scrollTop <= 702) {
        scrollTop.style.display = "none";
    } else {
        scrollTop.style.display = "block";
    }
}
buttonVisibility();

scrollTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    buttonVisibility();
});