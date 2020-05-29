// Gives you the Main title type writer
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
// Gives you the Sub Title type writer
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


var logPassword = $('#signin');

logPassword.click(function () {
    var logInput = $('#user').val();
    var passInput = $('#pass').val();
    if (logInput == 'tom' && passInput == 'tom') {
        window.location = "../html/game.html";
    } else {
        alert('Inavlid Credentials, Please try again!');
    }
})