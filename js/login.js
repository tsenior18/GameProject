var i = 0;
var txt = 'Welcome to the Game - Log in Page';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('main-title').innerHTML += txt.charAt(i);
        i++
        setTimeout(typeWriter, speed);
    }
}
typeWriter();


var b = 0;
var text = 'Sign in to Access the Premium Game';
var speeds = 50;

function subtypeWriter() {
    if (b < text.length) {
        document.getElementById('sub-title').innerHTML += text.charAt(b);
        b++
        setTimeout(subtypeWriter, speeds);
    }
}
subtypeWriter();